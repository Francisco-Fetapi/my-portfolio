import { useMemo } from "react";
import ExternalLink from "../components/ExternalLink";
import { Timeline, timelineEntity } from "./Timeline";
import useMe from "./useMe";
import useProjects from "./useProjects";
import { Code } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import useTranslationComponents from "../hooks/useTranslationComponents";
import { TranslationQuery } from "next-translate";
import translated from "../helpers/getTitleAndDescriptionTranslated";
export interface TimeLine {
  title: React.ReactNode;
  description?: React.ReactNode;
  date: Date;
}

export interface TimeLines {
  [year: string]: TimeLine[];
}

interface TimelineItemTranslatedProps {
  name: string;
  values?: TranslationQuery;
}

export function TimelineItemTranslated({
  name,
  values,
}: TimelineItemTranslatedProps) {
  const { componentsForTranslation } = useTranslationComponents();
  return (
    <Trans
      i18nKey={`useTimeline:${name}`}
      components={componentsForTranslation}
      values={values}
    />
  );
}

export default function useTimeline() {
  const { allProjects } = useProjects();
  const { me } = useMe();
  const { t: t2 } = useTranslation("common");
  const { t } = useTranslation("useTimeline");

  function loadEvents() {
    Timeline.timelines = {};

    allProjects.forEach((project) => {
      timelineEntity.addEvent({
        date: project.createdAt,
        title: (
          <>
            {t2("i_created")}{" "}
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

    timelineEntity.addEvent({
      date: new Date(2018, 2, 2),
      ...translated("i_started_midSchool", {
        values: {
          midSchool: me.midSchool,
        },
      }),
    });
    timelineEntity.addEvent({
      date: new Date(2018, 11, 9),
      ...translated("first_course_algorithms"),
    });

    timelineEntity.addEvent({
      date: new Date(2018, 9, 12),
      ...translated("first_contact_with_html"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 2, 12),
      ...translated("restart_lessons"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 3, 15),
      ...translated("first_contact_css"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 3, 21),
      ...translated("course_i_conectado"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 5, 21),
      ...translated("first_screens"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 10),
      ...translated("course_js_essencial"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 12),
      ...translated("repeat_course_js_essencial"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 6, 18),
      ...translated("first_programs"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 7, 23),
      ...translated("read_book_caelum"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 7, 29),
      ...translated("caelum_project"),
    });

    timelineEntity.addEvent({
      date: new Date(2019, 10, 11),
      ...translated("read_book_k19"),
    });

    // 2020 begins here

    timelineEntity.addEvent({
      date: new Date(2020, 1, 10),
      ...translated("course_html_2"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 2, 12),
      ...translated("course_js_2"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 2, 12),
      ...translated("js_exercices"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 4, 30),
      ...translated("course_php_1"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 5),
      ...translated("read_book_php_mysql"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 20),
      ...translated("course_php_2"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 5, 20),
      ...translated("mirror_fashion_created"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 6, 3),
      ...translated("read_book_js_definitive"),
    });

    timelineEntity.addEvent({
      date: new Date(2020, 7, 28),
      ...translated("course_php_poo"),
    });

    // 2021 begins here

    timelineEntity.addEvent({
      date: new Date(2021, 0, 21),
      ...translated("get_into_github"),
    });

    timelineEntity.addEvent({
      date: new Date(2021, 0, 29),
      ...translated("start_in_reactjs"),
    });
    timelineEntity.addEvent({
      date: new Date(2021, 2, 20),
      ...translated("start_in_mui"),
    });

    timelineEntity.addEvent({
      date: new Date(2021, 4, 10),
      ...translated("course_mysql"),
    });

    timelineEntity.addEvent({
      date: new Date(2021, 6, 2),
      ...translated("course_laravel"),
    });

    // 2022 begins here
    timelineEntity.addEvent({
      date: new Date(2022, 1, 2),
      ...translated("finsish_tcc"),
    });

    timelineEntity.addEvent({
      date: new Date(2022, 3, 2),
      ...translated("finsish_mid_school", {
        values: {
          midSchool: me.midSchool,
        },
      }),
    });

    timelineEntity.addEvent({
      date: new Date(2022, 4, 13),
      ...translated("start_typescript"),
    });

    timelineEntity.addEvent({
      date: new Date(2022, 5, 13),
      ...translated("course_typescript"),
    });

    timelineEntity.addEvent({
      date: new Date(2022, 6, 10),
      ...translated("start_nextjs"),
    });

    return Timeline.timelines;
  }

  const timeline: TimeLines = useMemo(loadEvents, [allProjects]);
  // const timeline: TimeLines = loadEvents();

  const years = Object.keys(timeline);

  return { timeline, years };
}
