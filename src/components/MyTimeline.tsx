import {
  Group,
  Timeline,
  Title,
  Box,
  Text,
  Center,
  Pagination,
} from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { IconCalendarTime } from "@tabler/icons";

import { TimeLines } from "../database/useTimeline";
import dateDistance from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";

interface MyTimelineProps {
  timelines: TimeLines;
}

export default function MyTimeline({ timelines }: MyTimelineProps) {
  const years = Object.keys(timelines);
  const total = years.length - 1;
  const timelinePaginated = usePagination({
    total,
    initialPage: 1,
  });

  const yearSelected = years[timelinePaginated.active];

  return (
    <>
      <Center>
        <Pagination
          page={timelinePaginated.active}
          onChange={timelinePaginated.setPage}
          total={total}
        />
      </Center>
      <Box mt={50} sx={{ maxWidth: 500 }}>
        <TimeLine timelines={timelines} year={yearSelected} />
      </Box>
    </>
  );
}

interface TimeLineProps {
  year: string;
  timelines: TimeLines;
}

function TimeLine({ year, timelines }: TimeLineProps) {
  const { locale } = useCurrentLocale();
  return (
    <Box mb={40} key={year}>
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
  );
}
