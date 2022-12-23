import { TimeLine, TimeLines } from "./useTimeline";

export class Timeline {
  static timelines: TimeLines = {};
  addEvent(timeline: TimeLine) {
    const getYear = String(timeline.date?.getFullYear()) as keyof TimeLine;
    if (!Timeline.timelines[getYear]) {
      Timeline.timelines[getYear] = [];
    }
    Timeline.timelines[getYear].push(timeline);
    this.orderEventsByMonthDESC(getYear);
  }
  orderEventsByMonthDESC(year: string) {
    Timeline.timelines[year] = Timeline.timelines[year].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  }
}
