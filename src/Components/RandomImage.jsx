import React, { useEffect, useState } from "react";
import ShareButtons from "./ShareButtons";
import "./styles.css";
const RandomImage = () => {
  // State to store the fetched image URL
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Function to fetch a random image from the API
    const fetchRandomImage = async () => {
      try {
        const response = await fetch("https://picsum.photos/500");
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch a random image when the component mounts
    fetchRandomImage();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={imageUrl} alt="Random Image" style={{ marginBottom: "20px" }} />
      <ShareButtons />
    </div>
  );
};

export default RandomImage;
