import { zonedTimeToUtc, utcToZonedTime } from "date-fns-tz"
import { differenceInDays, parseISO, differenceInHours} from 'date-fns'

import { Timezone } from "../domain/enums/Timezone"
import { FormatOptions } from "../domain/Options"
import { Util } from "../utils/Util"
import { ReturnType } from "../domain/enums/ReturnType"
import { formatToTimeZone } from "date-fns-timezone"

const formatPattern = 'YYYY-M-DDTHH:mm:ss.SSS'

/**
 * @param date Accept following date formats: yyyy/mm/dd, dd/mm/yyyy, dd/mm/yyyy hh:mm & ISO format
 * @description Should return a UTC date format
 */
export function formatDate(date: string, options?: FormatOptions): (string | null) {
    try {
        const validDate = validateDateFormat(date)
        if (!validDate) { return null } 
    
        const timezone = options?.timezone || Timezone.ETC_UTC
        const ignoreTimezone = options?.ignoreTimezone || false
    
        date = Util.dateToISO(date)
    
        const hourMinuteSecondsMatch = date.match(/^(\d{4}-\d{2}-\d{2}(T| )\d{2}(:)\d{2}(:)\d{2})$/g)
        if (hourMinuteSecondsMatch) {
            return zonedTimeToUtc(date, timezone).toISOString()
        }
    
        const isIsoFormat = date.match(/^(\d{4}-\d{2}-\d{2}(T)\d{2}(:)\d{2}(:)\d{2}(.)\d{3}(Z))$/g)
        if (isIsoFormat && ignoreTimezone) date = date.replace(/(.)\d{3}(Z)$/g, '')
    
        return zonedTimeToUtc(date, timezone).toISOString()
    } catch (error) {
        return null
    }
}

export function formatDateTimeZone(date: string, options?: FormatOptions): (string | null) {
    return getDateTimezone(date, options.timezone)
}

function getDateTimezone(dateISO: string, timezone?: Timezone) {
    if(timezone) {
        return `${formatToTimeZone(dateISO, formatPattern, { timeZone: timezone })}Z`
    }
    return parseISO(dateISO).toISOString()
}

/**
 * @param date Accept only ISO date format
 * @description Should return a UTC date format based on timezone informed
 */
export function retrieveDate(date: string, timezone = Timezone.ETC_UTC): (string | null) {
    if (!date) return null

    return utcToZonedTime(date, timezone).toISOString()
}

/**
 * @param timezone Optional timezone
 * @description Should return new Date() based on tz
 */
export function newDate(timezone = Timezone.ETC_UTC): string {
    return zonedTimeToUtc(new Date().toISOString(), timezone).toISOString()
}

/**
 * @param before Accept ony ISO date format 
 * @param after Accept ony ISO date format
 * @description Compare two different iso date and return number of days that differs from one to another
 */
export function diffDays(before: string, after: string, returnType: ReturnType): (number | null) {
    if (!before || !after) { return null }

    const parsedBefore = parseISO(Util.dateToISO(before))
    const parsedAfter = parseISO(Util.dateToISO(after))

    switch (returnType) {
        case 'HOURS':
            return differenceInHours(parsedAfter, parsedBefore)
            break;    
        default:
            return differenceInDays(parsedAfter, parsedBefore)
    }    
}

/**
 * 
 * @param date date must be in format Thu Mar 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)
 * @returns formatDate function call
 */
export function formatComponentDate(date: string, timezone = Timezone.ETC_UTC): (string | null) {
    const monthsMap = new Map<string, number>()
    monthsMap.set("Jan", 1)
    monthsMap.set("Feb", 2)
    monthsMap.set("Mar", 3)
    monthsMap.set("Apr", 4)
    monthsMap.set("May", 5)
    monthsMap.set("Jun", 6)
    monthsMap.set("Jul", 7)
    monthsMap.set("Aug", 8)
    monthsMap.set("Sep", 9)
    monthsMap.set("Oct", 10)
    monthsMap.set("Nov", 11)
    monthsMap.set("Dec", 12)

    const dateWithoutDay = date.substring(3).trim();
    const monthExtense = dateWithoutDay.substring(0, 3);
    const monthNumber = monthsMap.get(monthExtense)
    if (!monthNumber) return null
    const month = monthNumber.toString().padStart(2, '0')
    const dateWithoutMonth = dateWithoutDay.substring(3).trim()
    const day = dateWithoutMonth.substring(0, 2).trim()
    const dateWithoutDayAndMonth = dateWithoutMonth.substring(2).trim()
    const year = dateWithoutDayAndMonth.substring(0, 4).trim()
    const fullDate = `${year}-${month}-${day}`

    return formatDate(fullDate, { timezone })
}

/**
 * @param date must be a string
 * @returns boolean to check if the date is valid or not
 */
export function validateDateFormat(date: string): boolean {
    if (!date) return false

    // YYYY-MM-DDTHH:mm:ss.sssZ
    const isoFormatMatchRegex = /^(\d{4}-\d{2}-\d{2}(T)\d{2}(:)\d{2}(:)\d{2}(.)\d{3}(Z))$/g
    // YYYY-MM-DD
    const dateWithHyphen = /^(\d{4}-\d{2}-\d{2})$/g
    // YYYY-MM-DD HH:mm
    const dateWithHyphenHour = /^(\d{4}-\d{2}-\d{2}( )\d{2}(:)\d{2})$/g
    // YYYY-MM-DD HH:mm:ss
    const dateWithHyphenHourAndSeconds = /^(\d{4}-\d{2}-\d{2}( )\d{2}(:)\d{2}(:)\d{2})$/g
    // YYYY-MM-DDTHH:mm:ss or YYY-MM-DD HH:mm:ss
    const isoFormatWithoutZone = /^(\d{4}-\d{2}-\d{2}(T| )\d{2}(:)\d{2}(:)\d{2})$/g
    // DD/MM/YYYY
    const brFormatMatchRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/g
    // DD/MM/YYYY HH:mm
    const brFormatWithHourMatchRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})( )\d{2}(:)\d{2}$/g
    // DD/MM/YYYY HH:mm:ss
    const brFormatWithHourAndSecondsMatchRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})( )\d{2}(:)\d{2}(:)\d{2}$/g
    // YYYY/MM/DD
    const usaFormatMatchRegex = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/g
    // YYYY/MM/DD HH:mm
    const usaFormatWithHourMatchRegex = /^(\d{4})\/(\d{1,2})\/(\d{1,2})( )\d{2}(:)\d{2}$/g
    // YYYY/MM/DD HH:mm:ss
    const usaFormatWithHourAndSecondsMatchRegex = /^(\d{4})\/(\d{1,2})\/(\d{1,2})( )\d{2}(:)\d{2}(:)\d{2}$/g

    const regexList = [
        isoFormatMatchRegex,
        dateWithHyphen,
        dateWithHyphenHour,
        dateWithHyphenHourAndSeconds,
        isoFormatWithoutZone,
        brFormatMatchRegex,
        brFormatWithHourMatchRegex,
        brFormatWithHourAndSecondsMatchRegex,
        usaFormatMatchRegex,
        usaFormatWithHourMatchRegex,
        usaFormatWithHourAndSecondsMatchRegex
    ]

    for (const regex of regexList) {
        const match = date.match(regex)
        if (match) {
            return true
        }
    }

    return false
}