export function formatDate(date: Date, locale: "id" | "en" = "en") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
