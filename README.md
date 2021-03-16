# ROIT Date Format

### Usage

    > npm i @roit/roit-date

```typescript
import { DateFormat, Timezone } from '@roit/roit-date';

const date1 = '12/01/2021';
const date2 = '12/01/2021 00:00';
const date3 = '2021/01/12';
const date4 = '2021-01-12: 00:00';
const date5 = '2021-01-12T03:00:00.000Z';

const dateInstace = DateFormat.getInstance();

dateInstace.formatDate(date1, Timezone.AMERICA_SAO_PAULO); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date2); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date3); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date4); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date5); // 2021-01-12T03:00:00.000Z
dateInstace.formatCompetence(date4); // 01/2021
```
