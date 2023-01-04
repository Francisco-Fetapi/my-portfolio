import { TranslationQuery } from "next-translate";
import React from "react";
import { TimelineItemTranslated } from "../database/useTimeline";

interface IOptions {
  values: TranslationQuery;
}

export default function getTitleAndDescriptionTranslated(
  name: string,
  options?: IOptions
) {
  return {
    title: <TimelineItemTranslated name={`${name}_title`} />,
    description: (
      <TimelineItemTranslated
        name={`${name}_description`}
        values={options?.values}
      />
    ),
  };
}
