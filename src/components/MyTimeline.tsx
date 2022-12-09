import { SimpleGrid, Group, Timeline, Title, Box, Text } from "@mantine/core";
import { IconCalendarTime, IconDeviceWatch } from "@tabler/icons";
import { useRouter } from "next/router";
import { TimeLines } from "../database/me";
import dateDistance, { ILocales } from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";

interface MyTimelineProps {
  timelines: TimeLines;
}

export default function MyTimeline({ timelines }: MyTimelineProps) {
  const { locale } = useCurrentLocale();

  return (
    <Box sx={{ maxWidth: 500 }}>
      {Object.keys(timelines)
        .reverse()
        .map((year, key) => {
          const align = "left";
          return (
            <Box mb={40} key={year}>
              <Title order={1} mb={20} align={align}>
                {year}
              </Title>
              <Timeline align={align} bulletSize={20} lineWidth={4}>
                {timelines[year].map((timeline, key) => (
                  <Timeline.Item
                    title={<Title order={4}>{timeline.title}</Title>}
                    key={key}
                  >
                    <Text align="justify" color="dimmed" size="sm">
                      {timeline.description}
                    </Text>
                    {timeline.date && (
                      <Group
                        spacing={2}
                        align="center"
                        mt={10}
                        sx={{
                          justifyContent: align,
                        }}
                      >
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
        })}
    </Box>
  );
}
