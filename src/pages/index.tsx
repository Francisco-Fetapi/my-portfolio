import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";
import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";

import SEO from "../../next-seo.config";

export default function IndexPage() {
  return (
    <div>
      <DefaultSeo
        {...SEO}
        title="Home"
        description="A short description goes here."
      />

      <AppScheme>
        <HeroTitle />
      </AppScheme>
    </div>
  );
}
