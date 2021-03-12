import { format, parseISO, add } from "date-fns"
import { Timezone, ConvertTimezoneToHour } from "../enums/Timezone"

export class DateFormat {

    private static instance: DateFormat = new DateFormat()

    private constructor () {
    }

    static getInstance(): DateFormat {
        return this.instance
    }

    /**
     * @param date Accept following date formats: yyyy/mm/dd, dd/mm/yyyy & ISO format
     * @description Should return a ISO date format
     */
    formatDate(date: string, timezone: Timezone = Timezone.AMERICA_SAO_PAULO ): string | null {
        if (!date) { return null }

        if (date.includes('/') && date.split('/')[2].length > 2) {
            let day = date.split('/')[0]
            let month = date.split('/')[1]
            const year = date.split('/')[2]
      
            date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
      
        if (date.includes('/') && date.split('/')[0].length > 2) {
            let day = date.split('/')[2]
            let month = date.split('/')[1]
            const year = date.split('/')[0]
      
            date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
      
        if (date.match(/\d{2}Z$/)) return parseISO(date).toISOString()
        
        return add(parseISO(date), { hours: ConvertTimezoneToHour[timezone] }).toISOString()
      
    }

    /**
     * @param issueDate Accept following date formats: yyyy/mm/dd, dd/mm/yyyy & ISO format
     * @description Should return a mm/yyyy date format
     */
    formatCompetence(issueDate: string): string | null {
        const formatedDate = this.formatDate(issueDate)
        if (!formatedDate) return null

        return format(parseISO(formatedDate), 'MM/yyyy')
    }

} 

 
  
   