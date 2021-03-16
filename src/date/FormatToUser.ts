import { parseISO } from "date-fns"
import { format } from "date-fns"

export class FormatToUser {

    private static instance: FormatToUser = new FormatToUser()

    private constructor () {}

    static getInstance(): FormatToUser {
        return this.instance
    }

    /**
     * @param date Accept only ISO date
     * @description Should return a mm/yyyy date format
     */
    formatCompetence(date: string): string | null {
        if (!date) return null

        return format(parseISO(date), 'MM/yyyy')
    }
    
}
    