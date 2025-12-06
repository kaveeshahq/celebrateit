// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, url, image }) => {
  const defaultTitle = "Celebrateit - Celebrate in Style";
  const defaultDescription = "Order farm-fresh groceries delivered to your doorstep!";
  const defaultImage = "/default-image.jpg"; // Make sure this image exists in your public folder
const defaultUrl = window.location.href;
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
