import React, { useEffect, useState } from "react";

const useImgLoader = (imgPath) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imgPath;
    img.onload = () => setLoading(false);
  }, [imgPath]);

  return loading;
};

export default useImgLoader;
