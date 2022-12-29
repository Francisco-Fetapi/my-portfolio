import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Affix, Transition } from "@mantine/core";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 10 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              onClick={() => scrollTo({ y: 0 })}
              style={transitionStyles}
              size="xl"
              sx={(theme) => ({
                background: theme.colors.blue[6] + "!important",
                color: theme.colors.gray[1],
              })}
            >
              <IconArrowUp size={20} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}
