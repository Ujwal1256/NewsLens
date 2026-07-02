import { useEffect, useState } from "react";

import newsPlaceholder from "../../assets/images/image.png";

const NewsImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(src || newsPlaceholder);

  useEffect(() => {
    setImageSrc(src || newsPlaceholder);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setImageSrc(newsPlaceholder)}
    />
  );
};

export default NewsImage;