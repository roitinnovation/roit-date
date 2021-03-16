import { parseISO, format } from "date-fns"

/**
 * @param date Accept only ISO date
 * @description Should return a mm/yyyy date format
 */
export function formatCompetence(date: string): string | null {
    if (!date) return null

    return format(parseISO(date), 'MM/yyyy')
}

/**
 * @param date Accept only ISO date
 * @description Should return a dd/mm/yyyy date format
 */
export function showDateToUser(date: string): string | null {
    if (!date) return null

    return format(parseISO(date), 'dd/MM/yyyy')
}
