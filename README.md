# ROIT Date Format

### Usage

    > npm i @roit/roit-date

```typescript
import { DateFormat } from '@roit/roit-date';

const date1 = '12/01/2021';
const date2 = '2021/01/12';
const date3 = '2021-01-12';
const date4 = '2021-01-12T03:00:00.000Z';

const dateInstace = DateFormat.getInstance();

dateInstace.formatDate(date1); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date2); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date3); // 2021-01-12T03:00:00.000Z
dateInstace.formatDate(date4); // 2021-01-12T03:00:00.000Z
dateInstace.formatCompetence(date4); // 01/2021
```
