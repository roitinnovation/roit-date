# ROIT Date Format

### Usage

    > npm i @roit/roit-date

### Manipulating the date

```typescript
import { formatDate, retrieveDate, Timezone } from '@roit/roit-date';

const date1 = '12/01/2021';
const date2 = '12/01/2021 00:00';
const date3 = '2021/01/12';
const date4 = '2021-01-12: 00:00';
const date5 = '2021-01-12T03:00:00.000Z';

// Timezone by default is 'America/Sao_Paulo'
formatDate(date1, { timezone: Timezone.AMERICA_SAO_PAULO }); // 2021-01-12T03:00:00.000Z
formatDate(date2); // 2021-01-12T03:00:00.000Z
formatDate(date3); // 2021-01-12T03:00:00.000Z
formatDate(date4); // 2021-01-12T03:00:00.000Z
formatDate(date5); // 2021-01-12T03:00:00.000Z

// Timezone by default is 'America/Sao_Paulo'
retrieveDate(date1, { timezone: Timezone.AMERICA_SAO_PAULO }); // 2021-01-12T00:00:00.000Z
retrieveDate(date2); // 2021-01-12T00:00:00.000Z
retrieveDate(date3); // 2021-01-12T00:00:00.000Z
retrieveDate(date4); // 2021-01-12T00:00:00.000Z
retrieveDate(date5); // 2021-01-12T00:00:00.000Z
```

### Showing the date

```typescript
import { showDateToUser, formatCompetence, Timezone } from '@roit/roit-date';

const date1 = '2021-02-12T03:00:00.000Z';
const date2 = '2021-02-01T00:00:00.000Z';

// Timezone by default is 'America/Sao_Paulo'
showDateToUser(date, { timezone: Timezone.AMERICA_SAO_PAULO }); // 12/02/2021
showDateToUser(date1); // 12/02/2021
showDateToUser(date2); // 31/01/2021    -> Based on the timezone it will convert back to UTC -3 which is Sao Paulo

// Timezone by default is 'America/Sao_Paulo'
formatCompetence(date, { timezone: Timezone.AMERICA_SAO_PAULO }); // 02/2021
formatCompetence(date1); // 02/2021
formatCompetence(date2); // 01/2021     -> Based on the timezone it will convert back to UTC -3 which is Sao Paulo
```

### Retrieving actual date

```typescript
import { getActualDate, Timezone } from '@roit/roit-date';

getActualDate(); // outputs 2021-02-12T03:00:00.000Z
getActualDate(Timezone.AMERICA_SAO_PAULO); // outputs 2021-02-12T03:00:00.000Z
```

### Diff of two dates

```typescript
import { diffDays } from '@roit/roit-date';

diffDays('2021/01/12', '13/01/2021'); // outputs 1
```
