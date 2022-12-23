import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";
import RouterTransition from "../components/RouterTransition";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <RouterTransition />
        <HeroTitle />
      </AppScheme>
    </div>
  );
}
