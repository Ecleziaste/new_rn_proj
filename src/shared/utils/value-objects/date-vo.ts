import dayjs from 'dayjs';

export class DateVO {
  constructor(private date: Date | string | number) {}

  format(format: string) {
    return dayjs(this.date).format(format);
  }
}
