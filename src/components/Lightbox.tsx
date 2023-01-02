import { useState } from "react";

const Lightbox = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const image1 = "public/images/image-product-1-thumbnail.jpg";
  const image2 = "public/images/image-product-2-thumbnail.jpg";
  const image3 = "public/images/image-product-3-thumbnail.jpg";
  const image4 = "public/images/image-product-4-thumbnail.jpg";
  const imageArray = [image1, image2, image3, image4];
  const imageCards = imageArray.map((image) => (
    <img className="image-card" src={image} />
  ));

  return <div className="Lightbox"></div>;
};

export default Lightbox;
