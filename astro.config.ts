import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { RemarkLinkRewrite } from "./src/plugins/link-rewrite";
import { RemarkReadingTime } from "./src/plugins/reading-time";

import mdx from "@astrojs/mdx";

const config = {
  github: {
    SITE_URL: "https://rahmanda.github.io",
    BASE_PATH: "/blog",
  },
  netlify: {
    SITE_URL: "https://rahmandawibowo.com",
    BASE_PATH: "",
  },
};

const buildTarget = (process.env.BUILD_TARGET ??
  "netlify") as keyof typeof config;

const { SITE_URL, BASE_PATH } = config[buildTarget];

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
    remarkPlugins: [
      [
        RemarkLinkRewrite,
        {
          replacer: (url: string) => {
            if (url.startsWith("/blog")) {
              return url.replace("/blog", BASE_PATH);
            }
            return url;
          },
        },
      ],
      RemarkReadingTime,
    ],
  },
  integrations: [tailwind(), mdx(), sitemap()],
});
