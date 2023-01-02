import {
  Group,
  Timeline,
  Center,
  Title,
  Box,
  Text,
  ActionIcon,
  Tabs,
  Transition,
  Anchor,
} from "@mantine/core";
import { useWindowScroll, useDidUpdate } from "@mantine/hooks";
import { IconArrowLeft, IconCalendarTime, IconArrowRight } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState, useRef } from "react";

import { TimeLines } from "../database/useTimeline";
import dateDistance from "../helpers/dateDistance";
import getMonth from "../helpers/getMonth";
import useCurrentLocale from "../hooks/useCurrentLocale";

interface MyTimelineProps {
  timelines: TimeLines;
}
const stylesDisabled: CSSProperties = {
  pointerEvents: "none",
  cursor: "default",
  opacity: "0.5",
  userSelect: "none",
};

export default function MyTimeline({ timelines }: MyTimelineProps) {
  const firstYear = Object.keys(timelines)[0];
  const years = Object.keys(timelines).reverse();
  const router = useRouter();
  const year = router.query.year as string;
  const [scroll, scrollTo] = useWindowScroll();
  const refControls = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(year || years[0]);

  const isFirst = activeTab == firstYear;
  const isLast = activeTab == years[0];

  const { t } = useTranslation("common");

  useEffect(() => {
    if (years.includes(year)) {
      setActiveTab(year);
      setTimeout(() => {
        backToTopTimeline();
      }, 2000);
    }
    if (!year) {
      setActiveTab(years[0]);
    }
  }, [year]);

  useDidUpdate(() => {
    backToTopTimeline();
  }, [activeTab]);

  function nextYear() {
    if (activeTab) {
      const next = parseInt(activeTab) + 1;
      const nextString = String(next);
      if (years.includes(nextString)) {
        setActiveTab(nextString);
      }
    }
  }
  function prevYear() {
    if (activeTab) {
      const prev = parseInt(activeTab) - 1;
      const prevString = String(prev);
      if (years.includes(prevString)) {
        setActiveTab(prevString);
      }
    }
  }

  function backToTopTimeline() {
    if (refControls.current) {
      const el = refControls.current;
      const distanceFromTop =
        window.pageYOffset + el.getBoundingClientRect().top;
      const y = distanceFromTop - 90;

      scrollTo({ y });
      console.log("Scrolled to", y);
    }
  }

  return (
    <Box mt={50} sx={{ maxWidth: 500 }}>
      <Tabs value={activeTab!} color="blue" onTabChange={setActiveTab}>
        <div ref={refControls} />
        <Tabs.Panel value={activeTab!} pt="xs">
          <TimeLine
            prev={prevYear}
            next={nextYear}
            timelines={timelines}
            year={activeTab!}
            isFirst={isFirst}
            isLast={isLast}
            // refControls={refControls}
          />
        </Tabs.Panel>

        <Center>
          <Group mt={10} spacing={50}>
            <Anchor
              onClick={prevYear}
              style={isFirst ? stylesDisabled : undefined}
            >
              &larr; {t("previous")}
            </Anchor>
            <Anchor
              onClick={nextYear}
              style={isLast ? stylesDisabled : undefined}
            >
              {t("next")} &rarr;
            </Anchor>
          </Group>
        </Center>
      </Tabs>
    </Box>
  );
}

interface TimeLineProps {
  year: string;
  timelines: TimeLines;
  prev: () => void;
  next: () => void;
  isFirst: boolean;
  isLast: boolean;
}

function TimeLine({
  year,
  timelines,
  prev,
  next,
  isFirst,
  isLast,
}: TimeLineProps) {
  const { locale } = useCurrentLocale();

  return (
    <Box my={40}>
      <Box
        mb={20}
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
        }}
      >
        <ActionIcon
          size="lg"
          onClick={prev}
          style={isFirst ? stylesDisabled : undefined}
        >
          <IconArrowLeft />
        </ActionIcon>
        <Title order={1} align="center">
          {year}
        </Title>
        <ActionIcon
          size="lg"
          onClick={next}
          style={isLast ? stylesDisabled : undefined}
        >
          <IconArrowRight />
        </ActionIcon>
      </Box>
      <Timeline bulletSize={20} lineWidth={4}>
        {timelines[year].map((timeline, key) => {
          let animate = null;
          if (key % 2 === 0) animate = "fade-left";
          if (key % 2 !== 0) animate = "fade-right";
          if (key <= 1) animate = undefined;
          return (
            <Timeline.Item
              title={<Title order={4}>{timeline.title}</Title>}
              key={key}
              data-aos={animate}
            >
              <Text align="justify" color="dimmed" size="sm">
                {timeline.description}
              </Text>
              {timeline.date && (
                <Group spacing={2} align="center" mt={10}>
                  <IconCalendarTime size={15} />
                  <Group spacing={2} align="center" mt={4}>
                    <Text
                      size="xs"
                      sx={{ textTransform: "capitalize" }}
                      weight="bold"
                    >
                      {getMonth(timeline.date, locale)}&nbsp;-&nbsp;
                    </Text>
                    <Text size="xs" color="dimmed">
                      {dateDistance(timeline.date, locale)}
                    </Text>
                  </Group>
                </Group>
              )}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Box>
  );
}
