import { SetStateAction, useState } from "react";
const Lightbox = () => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const image1 = "./images/image-product-1-thumbnail.jpg";
  const image2 = "./images/image-product-2-thumbnail.jpg";
  const image3 = "./images/image-product-3-thumbnail.jpg";
  const image4 = "./images/image-product-4-thumbnail.jpg";
  const imageArray = [image1, image2, image3, image4];

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image: SetStateAction<string>) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const imageCards = imageArray.map((image) => (
    <img className="image-card" src={image} />
  ));
  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    let currentIndex = imageArray.indexOf(imageToShow);
    if (currentIndex >= imageArray.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageArray[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    let currentIndex = imageArray.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageArray[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className="Lightbox">
      <>
        <div>{imageCards}</div>
        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow}></img>
            <button onClick={showNext}>⭢</button>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Lightbox;
