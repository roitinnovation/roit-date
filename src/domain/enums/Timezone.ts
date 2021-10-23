import timezones from "timezones-list"

export enum Timezone {
    AMERICA_SAO_PAULO = 'America/Sao_Paulo'
}

export const listTimeZone = timezones.map(ti => {
    return {
        timezone: ti.tzCode,
        label: ti.label,
        name: ti.label,
        utc: ti.utc
    } 
})
