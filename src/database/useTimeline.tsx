import { useMemo } from "react";
import ExternalLink from "../components/ExternalLink";
import { Timeline, timelineEntity } from "./Timeline";
import useProjects from "./useProjects";
export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

export default function useTimeline() {
  const { allProjects } = useProjects();
  const timeline: TimeLines = useMemo(() => {
    if (Object.keys(Timeline.timelines).length === 0) {
      allProjects.forEach((project) => {
        timelineEntity.addEvent({
          date: project.createdAt,
          title: (
            <>
              Criei o{" "}
              <ExternalLink
                href={project.links.preview || project.links.github || "#"}
              >
                {project.name}
              </ExternalLink>
            </>
          ),
          description: project.description,
        });
      });
    }

    return Timeline.timelines;
  }, [allProjects, timelineEntity]);

  const years = Object.keys(timeline);

  return { timeline, years };
}
