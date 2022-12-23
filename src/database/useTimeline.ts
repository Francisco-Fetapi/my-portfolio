import { useMemo } from "react";
import { Timeline, timelineEntity } from "./Timeline";
export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

export default function useTimeline() {
  const timeline: TimeLines = useMemo(() => {
    timelineEntity.addEvent({
      date: new Date(2022, 9, 12),
      title: "Terceiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2022, 8, 12),
      title: "Segundo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2022, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2020, 9, 12),
      title: "Terceiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2020, 8, 12),
      title: "Segundo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2020, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2021, 9, 12),
      title: "Terceiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2021, 8, 12),
      title: "Segundo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2021, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2019, 9, 12),
      title: "Terceiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2019, 8, 12),
      title: "Segundo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2019, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2022, 11, 29),
      title: "Ultimo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2021, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    timelineEntity.addEvent({
      date: new Date(2018, 9, 12),
      title: "Terceiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2018, 8, 12),
      title: "Segundo titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });
    timelineEntity.addEvent({
      date: new Date(2018, 2, 12),
      title: "Primeiro titulo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
    });

    return Timeline.timelines;
  }, []);

  const years = Object.keys(timeline);

  console.log(timeline);

  return { timeline, years };
}
