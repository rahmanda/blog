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
    featured_articles: "Featured articles",
    project_description:
      "Here are selected personal projects I've been working on. The tech behind the system can be used for learning purposes. The content can be served as a contribution to society.",
    read_article: "Read article",
    articles_description:
      'I write in-depth articles about software development, productivity hacks, and personal opinions. Available in <a class="underline" href="/id/blog">Bahasa Indonesia</a> and <a class="underline" href="/en/blog">English</a>.',
    notes_description:
      "Collection of my tiny gists. They contain some weird stuffs or cool tricks I found during work.",
    view_all_posts: "View all posts",
    view_all_notes: "View all notes",
    visit_blog: "Visit blog",
    archive: "Archive",
    archive_description: "Archive of all blog articles by Rahmanda Wibowo.",
    contact: "Contact",
    lets_connect: "Let's connect!",
    contact_description: `You're always welcome to contact me via <a class="underline" href=${SOCIAL_MEDIA.linkedin} target="_blank">Linkedin</a> and <a class="underline" href=${SOCIAL_MEDIA.email} target="_blank">Email</a>.`,
  },
  id: {
    featured: "Featured",
    featured_articles: "Artikel pilihan",
    project_description:
      "Ini adalah kumpulan projek pribadi saya. Sistem teknologi yang dibangun, saya pakai untuk sumber belajar, sedangkan kontennya diharapkan bisa bermanfaat untuk publik.",
    read_article: "Baca artikel",
    articles_description:
      'Saya menulis artikel tentang software development, productivity hacks, dan opini pribadi. Tersedia dalam <a class="underline" href="/id/blog">Bahasa Indonesia</a> dan <a class="underline" href="/en/blog">Bahasa Inggris</a>.',
    notes_description:
      "Koleksi catatan-catatan kecil saya. Isinya bisa berupa hal-hal aneh atau trik keren yang saya temukan saat bekerja.",
    view_all_posts: "Lihat semua postingan",
    view_all_notes: "Lihat semua notes",
    visit_blog: "Kunjungi blog",
    archive: "Arsip",
    archive_description: "Arsip untuk semua artikel blog oleh Rahmanda Wibowo.",
    contact: "Kontak",
    lets_connect: "Kontak.",
    contact_description: `Jangan sungkan untuk mengontak saya lewat <a class="underline" href=${SOCIAL_MEDIA.linkedin} target="_blank">Linkedin</a> dan <a class="underline" href=${SOCIAL_MEDIA.email} target="_blank">Email</a>.`,
  },
};
