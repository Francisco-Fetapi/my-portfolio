import { DefaultSeo, DefaultSeoProps } from "next-seo";
import SEO from "../../next-seo.config";

export default function NextSeoTemplate(props: DefaultSeoProps) {
  return <DefaultSeo {...SEO} {...props} />;
}
