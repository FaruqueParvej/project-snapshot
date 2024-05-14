import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function homePage({ params: { lang } }) {
  const dict = await getDictionary(lang); // en
  console.log(process.env.BASE_API_URL);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
