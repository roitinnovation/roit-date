export abstract class Util {
    public static dateToISO(date: string): string {
        if (date.includes('/') && date.split('/')[0].length > 2) {
            const dayWithHour = date.split('/')[2]
            const month = date.split('/')[1]
            const year = date.split('/')[0]
    
            const hours = dayWithHour.split(' ')[1] || dayWithHour.split('T')[1]
            const day = dayWithHour.split(' ')[0] || dayWithHour.split('T')[0]
    
            date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}${hours ? ' ' + hours : ''}`
        }
    
        if (date.includes('/') && date.split('/')[2].length > 2) {
            const day = date.split('/')[0]
            const month = date.split('/')[1]
            const yearWithHour = date.split('/')[2]
    
            // Verify if has hours
            const hours = yearWithHour.split(' ')[1] || yearWithHour.split('T')[1]
            const year = yearWithHour.split(' ')[0] || yearWithHour.split('T')[0]
    
            date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}${hours ? ' ' + hours : ''}`
        }

        return date
    }
}