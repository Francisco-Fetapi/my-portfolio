import { TimeLine, TimeLines } from "./useTimeline";

export class Timeline {
  static timelines: TimeLines = {};
  addEvent(timeline: TimeLine) {
    const getYear = String(timeline.date?.getFullYear()) as keyof TimeLine;
    if (!Timeline.timelines[getYear]) {
      Timeline.timelines[getYear] = [];
    }
    const alreadyExists = Timeline.timelines[getYear].some(
      (currentTimeline) => currentTimeline.title === timeline.title
    );
    if (alreadyExists) return;

    Timeline.timelines[getYear].push(timeline);
    this.orderEventsByMonthASC(getYear);
  }
  orderEventsByMonthDESC(year: string) {
    Timeline.timelines[year] = Timeline.timelines[year].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  }
  orderEventsByMonthASC(year: string) {
    Timeline.timelines[year] = Timeline.timelines[year].sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
  }
}

export const timelineEntity = new Timeline();
