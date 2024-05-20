// Below config are taken from the astro.config.ts.
// This way, the configs are also accessible both for build and client runtime.
export const SITE_URL = import.meta.env.SITE;
export const BASE_PATH =
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
export const SITE_TITLE = "Rahmanda Wibowo";

export const COMMUNICATION_CHANNELS = [
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/rahmandawibowo",
  },
  {
    name: "Email",
    link: "mailto://rahmandawibowo@gmail.com",
  },
];
