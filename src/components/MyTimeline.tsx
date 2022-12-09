import { Timeline, Title, Box, Text } from "@mantine/core";
import { TimeLines } from "../database/me";

interface MyTimelineProps {
  timelines: TimeLines;
}

export default function MyTimeline({ timelines }: MyTimelineProps) {
  return (
    <Box sx={{ maxWidth: 800 }}>
      {Object.keys(timelines)
        .reverse()
        .map((year, key) => {
          //   const align = key % 2 === 0 ? "left" : "right";
          const align = "left";
          return (
            <Box mb={40} key={year}>
              <Title order={2} mb={20} align={align}>
                {year}
              </Title>
              <Timeline align={align} bulletSize={20} lineWidth={4}>
                {timelines[year].map((timeline, key) => (
                  <Timeline.Item title={timeline.title} key={key}>
                    <Text color="dimmed" size="sm">
                      {timeline.description}
                    </Text>
                    <Text size="xs" mt={4}>
                      {timeline.date?.toLocaleDateString()}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Box>
          );
        })}
    </Box>
  );
}
