import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import duration from 'dayjs/plugin/duration';
import isoWeek from 'dayjs/plugin/isoWeek';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);
dayjs.extend(duration);
dayjs.extend(isoWeek);
dayjs.extend(utc);
dayjs.extend(tz);
dayjs.duration({ months: 12 });

export default dayjs;
