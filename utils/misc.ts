import dayjs from 'dayjs';
import isTodayPlugin from 'dayjs/plugin/isToday';

dayjs.extend(isTodayPlugin);

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    var r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const formatNoteDate = (date?: Date | string) => {
  if (!date) {
    return '';
  }

  const day = dayjs(date);
  const isToday = day.isToday();
  if (isToday) {
    return day.format('HH:mm');
  }
  return day.format('HH:mm DD/MM/YYYY');
};
