import PhotoDetails from "@/components/PhotoDetails.jsx";
const PhotoDetailsPage = ({ params: { lang, id } }) => {
  console.log(lang, id);
  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
