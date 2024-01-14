import React from "react";
import "../styles/ProfilePage.css"
import img1 from "../_assets/image7.jpg"
import img2 from "../_assets/image4.jpg"
import img3 from "../_assets/post2.webp"
import img4 from "../_assets/post1.webp"
import img5 from "../_assets/image6.png"
import img6 from "../_assets/image5.jpg"
import img7 from "../_assets/image3.jpg"
import img8 from "../_assets/post3.webp"

const imageArray = [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
    // Add more image URLs as needed
  ];
  
  const PostInMyProfile = () => {
    return (
      <div className="post-container">
        {imageArray.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Post Image ${index + 1}`} className="post-image" />
        ))}
      </div>
    );
  };
  
  export default PostInMyProfile;