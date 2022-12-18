import {
  Group,
  Timeline,
  Title,
  Box,
  Text,
  Center,
  Pagination,
  Tabs,
  Transition,
} from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { IconCalendarTime } from "@tabler/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { TimeLines } from "../database/useTimeline";
import dateDistance from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";

interface MyTimelineProps {
  timelines: TimeLines;
}

export default function MyTimeline({ timelines }: MyTimelineProps) {
  const years = Object.keys(timelines).reverse();
  const router = useRouter();
  const year = router.query.year as string;

  const [activeTab, setActiveTab] = useState<string | null>(years[0]);

  console.log(activeTab);

  return (
    <Box mt={50} sx={{ maxWidth: 500 }}>
      <Tabs color="blue" onTabChange={setActiveTab}>
        {/* <Center> */}
        <Tabs.List position="center">
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
        </Tabs.List>

        <Tabs.Panel value={activeTab!} pt="xs">
          <TimeLine timelines={timelines} year={activeTab!} />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

interface TimeLineProps {
  year: string;
  timelines: TimeLines;
}

function TimeLine({ year, timelines }: TimeLineProps) {
  const { locale } = useCurrentLocale();
  return (
    <Transition
      mounted={true}
      transition="fade"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <Box my={40} key={year} styles={styles}>
          <Title order={1} mb={20}>
            {year}
          </Title>
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
                    <Text size="xs" mt={4} color="dimmed">
                      {dateDistance(timeline.date, locale)}
                    </Text>
                  </Group>
                )}
              </Timeline.Item>
            ))}
          </Timeline>
        </Box>
      )}
    </Transition>
  );
}
