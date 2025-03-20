import { useState } from "react";

const useUploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const uploadImage = async (selectedImage) => {
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(data.data.secure_url);
      return data.data.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { uploadImage, loading, error }
}

export default useUploadImage;