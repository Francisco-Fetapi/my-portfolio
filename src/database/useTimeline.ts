export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date?: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

export default function useTimeline() {
  const timeline: TimeLines = {
    "2022": [
      {
        title: "Primeiro titulo",
        // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        // date: new Date(2002, 11, 10),
      },
      {
        title: "Segundo titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Terceiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
    ],
    "2021": [
      {
        title: "Primeiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Segundo titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Terceiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
    ],
    "2020": [
      {
        title: "Primeiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Segundo titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Terceiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
    ],
    "2019": [
      {
        title: "Primeiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Segundo titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Terceiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
    ],
    "2018": [
      {
        title: "Primeiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Segundo titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
      {
        title: "Terceiro titulo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, est nulla soluta itaque ducimus eos ullam fugit dignissimos nihil eaque natus unde corporis assumenda sunt ab cumque id perferendis at.",
        date: new Date(2002, 11, 10),
      },
    ],
  };
  return { timeline };
}
