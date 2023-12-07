import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
const CommonSwiper = ({isThumb}) => {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];

  return (
    <div>
        <ImageGallery
        additionalClass={isThumb ? 'custom-class' : null}
        showThumbnails={isThumb ? true : false} showBullets={false} showPlayButton={false} showFullscreenButton={false} showNav={isThumb ? false : true} slideOnThumbnailOver={isThumb ? true : false} items={images} />
    </div>
  )
}

export default CommonSwiper
