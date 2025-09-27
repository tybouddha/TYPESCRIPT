import React, { useState } from "react";

export default function ImagePreview() {
  //state
  const [imageUrl, setImageUrl] = useState("");

  //comportement
  //affichage
  return (
    <div>
      <div className="img">
        {imageUrl ? <img src={imageUrl} alt="aperçu" /> : "Aucune image"}
      </div>
    </div>
  );
}
