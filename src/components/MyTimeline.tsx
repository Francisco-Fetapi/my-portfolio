import {
  Group,
  Timeline,
  Title,
  Box,
  Text,
  ActionIcon,
  Tabs,
  Transition,
} from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { IconArrowLeft, IconCalendarTime, IconArrowRight } from "@tabler/icons";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";

import { TimeLines } from "../database/useTimeline";
import dateDistance from "../helpers/dateDistance";
import getMonth from "../helpers/getMonth";
import useCurrentLocale from "../hooks/useCurrentLocale";

interface MyTimelineProps {
  timelines: TimeLines;
}

export default function MyTimeline({ timelines }: MyTimelineProps) {
  const firstYear = Object.keys(timelines)[0];
  const years = Object.keys(timelines).reverse();
  const router = useRouter();
  const year = router.query.year as string;

  const [activeTab, setActiveTab] = useState<string | null>(year || years[0]);

  useEffect(() => {
    if (years.includes(year)) {
      setActiveTab(year);
    }
    if (!year) {
      setActiveTab(years[0]);
    }
  }, [year]);

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

  return (
    <Box mt={50} sx={{ maxWidth: 500 }}>
      <Tabs value={activeTab!} color="blue" onTabChange={setActiveTab}>
        {/* <Center> */}
        {/* <Tabs.List position="center">
          {years.map((year) => (
            <Tabs.Tab
              value={year}
              key={year}
              sx={{
                width: `${100 / years.length}%`,
              }}
            >
              {year}
            </Tabs.Tab>
          ))}
        </Tabs.List> */}

        <Tabs.Panel value={activeTab!} pt="xs">
          <TimeLine
            prev={prevYear}
            next={nextYear}
            timelines={timelines}
            year={activeTab!}
            isFirst={activeTab == firstYear}
            isLast={activeTab == years[0]}
          />
        </Tabs.Panel>
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

  const stylesDisabled: CSSProperties = {
    pointerEvents: "none",
    cursor: "default",
    opacity: "0.5",
  };

  return (
    <Box my={40} key={year}>
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
        {timelines[year].map((timeline, key) => (
          <Timeline.Item
            title={<Title order={4}>{timeline.title}</Title>}
            key={key}
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
        ))}
      </Timeline>
    </Box>
  );
}
