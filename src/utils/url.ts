import { BASE_PATH } from "src/config";

export function linkTo(slug: string) {
  return `${BASE_PATH}/${slug}`;
}
