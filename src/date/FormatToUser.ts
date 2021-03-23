import { parseISO, format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"

import { Timezone } from "../domain/enums/Timezone"

/**
 * @param date Accept only ISO date
 * @description Should return a mm/yyyy date format
 */
export function formatCompetence(date: string, timezone = Timezone.AMERICA_SAO_PAULO): (string | null) {
    if (!date) return null

    const convertedDate = utcToZonedTime(date, timezone).toISOString()
    return format(parseISO(convertedDate), 'MM/yyyy')
}

/**
 * @param date Accept only ISO date
 * @description Should return a dd/mm/yyyy date format
 */
export function showDateToUser(date: string, timezone = Timezone.AMERICA_SAO_PAULO): (string | null) {
    if (!date) return null

    const convertedDate = utcToZonedTime(date, timezone).toISOString()
    return format(parseISO(convertedDate), 'dd/MM/yyyy')
}
