import { Box, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import useMe from "../database/useMe";

const PHOTO_SIZE = 250;

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    border: "10px double #f1c872",
    borderRadius: theme.radius.md,
    // background: "#32344f",
    // background: theme.black,
    padding: 2,
  },
  image: {
    margin: 0,
    padding: 0,
  },
}));

export default function MyPhoto() {
  const { classes } = useStyles();
  const { me } = useMe();
  return (
    <Box
      className={classes.container}
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        display: "flex",
        maxWidth: PHOTO_SIZE,
        maxHeight: PHOTO_SIZE + 45,
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        [theme.fn.smallerThan("md")]: {
          marginTop: 30,
        },
      })}
      data-aos="flip-left"
      data-aos-delay="1500"
      data-aos-duration="1000"
    >
      <Image
        src={me.photo}
        width={PHOTO_SIZE}
        height={PHOTO_SIZE + 50}
        alt="Minha foto"
        className={classes.image}
        quality={100}
        placeholder="blur"
        blurDataURL={me.photo}
        // layout="responsive"
      />
    </Box>
  );
}
