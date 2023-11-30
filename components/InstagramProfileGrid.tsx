// InstagramProfileGrid.js
import axios from 'axios';
import Image from "next/legacy/image";
import React, { useEffect, useState } from 'react';

const InstagramProfileGrid = ({ profileUsername }: any) => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // Fetch Instagram pictures using the Instagram API (Note: This is just a simplified example)
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=705978937705279`)
      .then((response) => {
        const data = response.data.data;
        setPictures(data);
      })
      .catch((error) => {
        console.error('Error fetching Instagram pictures', error);
      });
  }, [profileUsername]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {pictures.map((picture: any) => (
        <div key={picture.id}>
          <Image
            src={picture.images.standard_resolution.url}
            alt={picture.caption.text}
            width={320}
            height={320}
          />
        </div>
      ))}
    </div>
  );
};

export default InstagramProfileGrid;