import { parseISO, add } from "date-fns"
import { Timezone, ConvertTimezoneToHour } from "../enums/Timezone"

/**
 * @param date Accept following date formats: yyyy/mm/dd, dd/mm/yyyy & ISO format
 * @description Should return a ISO date format
 */
export function formatDate(date: string, timezone: Timezone = Timezone.AMERICA_SAO_PAULO): (string | null) {
    if (!date) { return null }

    // 2021/03/18 - 2021/03/18 00:00
    if (date.includes('/') && date.split('/')[0].length > 2) {
        const dayWithHour = date.split('/')[2]
        const month = date.split('/')[1]
        const year = date.split('/')[0]

        // Verify if has hours
        const hours = dayWithHour.split(' ')[1] || dayWithHour.split('T')[1]
        const day = dayWithHour.split(' ')[0] || dayWithHour.split('T')[0]

        date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}${hours ? ' ' + hours : ''}`
    }

    // 18/03/2021 - 18/03/2021 00:00
    if (date.includes('/') && date.split('/')[2].length > 2) {
        const day = date.split('/')[0]
        const month = date.split('/')[1]
        const yearWithHour = date.split('/')[2]

        // Verify if has hours
        const hours = yearWithHour.split(' ')[1] || yearWithHour.split('T')[1]
        const year = yearWithHour.split(' ')[0] || yearWithHour.split('T')[0]

        date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}${hours ? ' ' + hours : ''}`
    }

    // - 2021-03-18T00:00:00
    const hourMinuteSecondsMatch = date.match(/^(\d{4}-\d{2}-\d{2}(T| )\d{2}(:)\d{2}(:)\d{2})$/g)
    if (hourMinuteSecondsMatch) {
        return parseISO(date).toISOString()
    }

    if (date.includes('Z')) return parseISO(date).toISOString()

    return add(parseISO(date), { hours: ConvertTimezoneToHour[timezone] }).toISOString()
}
/**
 * 
 * @param date date must be in format Thu Mar 18 2021 21:27:53 GMT-0300 (Horário Padrão de Brasília)
 * @returns formatDate function call
 */
export function formatComponentDate(date: string): (string | null) {
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
    return formatDate(fullDate)
}