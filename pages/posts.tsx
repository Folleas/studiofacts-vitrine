import PostCard from 'components/Accueil/PostCard'; // Import your PostCard component
import React, { useEffect, useState } from 'react';

export default function Web() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Make the API request to localhost:3000/post
    fetch('http://localhost:3000/post')
      .then((response) => response.json())
      .then((responseData: any) => {
        setData(responseData.postData); // Assuming the API returns an array of post objects
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <div className='flex w-3/4'>
        <h1 className="text-4xl font-semibold mt-10">Posts</h1>
      </div>
      <div className='flex flex-col h-full justify-center w-full items-center'>
        {data.length !== 0 &&
          data.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              tags={post.tags}
              content={post.content}
              projectID={post.projectID}
            />
          ))}
      </div>
    </div>
  );
}
