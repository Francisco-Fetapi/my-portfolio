import { Box, Text, createStyles } from "@mantine/core";
import Image from "next/image";
import useMe from "../database/useMe";

const PHOTO_SIZE = 250;

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    // border: "10px solid ",
    // padding: "10px",
  },
  image: {
    borderRadius: theme.radius.md,
    // position: "absolute",
    // top: 20,
    // left: -20,
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
        maxHeight: PHOTO_SIZE + 50,
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        [theme.fn.smallerThan("md")]: {
          marginTop: 30,
        },
      })}
      //   data-aos="flip-left"
      //   data-aos-delay="1500"
      //   data-aos-duration="1000"
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
      {/* <Text mt={20} color="dimmed" size="xs" align="center">
         {me.name} 
      </Text> */}
    </Box>
  );
}
