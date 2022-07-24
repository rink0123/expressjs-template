const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const isBetween = require('dayjs/plugin/isBetween');
const isoWeekDay = require('dayjs/plugin/isoWeek');
const utc = require('dayjs/plugin/utc');

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isoWeekDay);
dayjs.extend(utc);

module.exports = dayjs;