// Below config are taken from the astro.config.ts.
// This way, the configs are also accessible both for build and client runtime.
export const SITE_URL = import.meta.env.SITE;
export const BASE_PATH =
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
export const SITE_TITLE = "Rahmanda Wibowo";

export const SOCIAL_MEDIA = {
  linkedin: "https://linkedin.com/in/rahmandawibowo",
  email: "mailto://rahmandawibowo@gmail.com",
  x: "https://x.com/rahmandawibowo",
  github: "https://github.com/rahmanda",
};
