import { Box } from "@mantine/core";

interface SideNavBarContentProps {
  children: React.ReactNode;
}

export default function SideNavBarContent({
  children,
}: SideNavBarContentProps) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {children}

      <Box
        sx={(theme) => ({
          width: 2,
          height: "20vh",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        })}
      ></Box>
    </Box>
  );
}
