import { useState, useEffect } from "react";
import { getInstagramPictures } from "../functions/getInstagramPictures";

export const InstagramPictures = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getInstagramPictures("yrgo_webbutvecklare");
        setInstagramPosts((instagramPosts) => [...instagramPosts, response]);
      } catch (error) {
        console.log("Invalid image");
      }
    })();
  }, []);
  return <div>{instagramPosts}</div>;
};
