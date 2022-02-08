import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.extend(duration);

@Pipe({
  name: 'readTime'
})
export class ReadTimePipe implements PipeTransform {

  transform(text: string, wordsPerMinute: number = 575, unit: duration.DurationUnitType = 'minutes', locale = 'en'): string {
    const words = text.trim().split(/\s+/).length;
    const totalDuration = Math.ceil(words / wordsPerMinute);
    return dayjs.duration(totalDuration, unit).locale(locale).humanize();
  }
}