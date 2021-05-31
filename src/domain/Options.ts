import { Timezone } from "./enums/Timezone";

export type FormatOptions = {
    timezone?: Timezone
    ignoreTimezone?: boolean
}

export type RetrieveDateOptions = {
    timezone?: Timezone
    hours?: boolean
}