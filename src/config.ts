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

export const t = {
  en: {
    featured: "Featured",
    read_article: "Read article",
    notes_description:
      "Collection of my tiny gists. They contain some weird stuffs or cool tricks I found during work.",
    view_all_posts: "View all posts",
    view_all_notes: "View all notes",
    archive: "Archive",
    archive_description: "Archive of all blog articles by Rahmanda Wibowo.",
  },
  id: {
    featured: "Featured",
    read_article: "Baca artikel",
    notes_description:
      "Koleksi catatan-catatan kecil saya. Isinya bisa berupa hal-hal aneh atau trik keren yang saya temukan saat bekerja.",
    view_all_posts: "Lihat semua postingan",
    view_all_notes: "Lihat semua notes",
    archive: "Arsip",
    archive_description: "Arsip untuk semua artikel blog oleh Rahmanda Wibowo.",
  },
};
