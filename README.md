# ROIT Date Format

### Usage

    > npm i @roit/roit-date

```typescript
import { formatDate, retrieveDate, Timezone } from '@roit/roit-date';

const date1 = '12/01/2021';
const date2 = '12/01/2021 00:00';
const date3 = '2021/01/12';
const date4 = '2021-01-12: 00:00';
const date5 = '2021-01-12T03:00:00.000Z';

// Timezone by default is 'America/Sao_Paulo'
formatDate(date1, Timezone.AMERICA_SAO_PAULO); // 2021-01-12T03:00:00.000Z
formatDate(date2); // 2021-01-12T03:00:00.000Z
formatDate(date3); // 2021-01-12T03:00:00.000Z
formatDate(date4); // 2021-01-12T03:00:00.000Z
formatDate(date5); // 2021-01-12T03:00:00.000Z
formatCompetence(date5); // 01/2021

// Timezone by default is 'America/Sao_Paulo'
retrieveDate(date1, Timezone.AMERICA_SAO_PAULO); // 2021-01-12T00:00:00.000Z
retrieveDate(date2); // 2021-01-12T00:00:00.000Z
retrieveDate(date3); // 2021-01-12T00:00:00.000Z
retrieveDate(date4); // 2021-01-12T00:00:00.000Z
retrieveDate(date5); // 2021-01-12T00:00:00.000Z
retrieveDate(date1); // 01/2021
```
