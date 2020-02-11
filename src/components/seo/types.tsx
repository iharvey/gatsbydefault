import { HelmetProps } from "react-helmet"

export interface SEOProps extends HelmetProps {
  lang?: string;
  image?: string | null;
  description?: string;
}
