import { parseISO, format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"

import { Timezone } from "../domain/enums/Timezone"
import { RetrieveDateOptions } from "../domain/Options"

/**
 * @param date Accept only ISO date
 * @description Should return a mm/yyyy date format
 */
export function formatCompetence(date: string, timezone = Timezone.AMERICA_SAO_PAULO): (string | null) {
    try {
        if (!date) return null
    
        const convertedDate = utcToZonedTime(date, timezone).toISOString()
        return format(parseISO(convertedDate), 'MM/yyyy')
    } catch (error) {
        return null
    }
}

/**
 * @param date Accept only ISO date
 * @description Should return a dd/mm/yyyy date format
 */
export function showDateToUser(date: string, options?: RetrieveDateOptions): (string | null) {
    if (!date) return null

    const timezone = options?.timezone ?? Timezone.AMERICA_SAO_PAULO
    const hours = options?.hours ?? false

    const convertedDate = utcToZonedTime(date, timezone).toISOString()

    if (hours) {
        return format(parseISO(convertedDate), `dd/MM/yyyy HH:mm`)
    }

    return format(parseISO(convertedDate), `dd/MM/yyyy`)
}
