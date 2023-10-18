import React from 'react';

export default function PostCard({
  title,
  tags,
  content,
  projectID,
}: any) {
  return (
    <div className="p-4 w-full xl:w-3/4">
      <div className="w-full mx-auto bg-[#ededed] min-h-[40vh] rounded-lg shadow-md p-4">
        <div>
          <h2 className="text-lg xl:text-6xl font-bold mb-6 text-[#1e2428]">
            {title}
          </h2>
          {tags && tags.length > 0 ? (
            <p className="text-gray-700 text-sm xl:text-xl">
              <strong>Tags: {tags.join(', ')}</strong>
            </p>
          ) : null}
          {projectID ? (
            <p className="text-gray-700 text-sm xl:text-xl">
              <strong>Project ID: {projectID}</strong>
            </p>
          ) : null}
          <p className="text-gray-700 text-sm xl:text-xl">{content}</p>
        </div>
      </div>
    </div>
  );
}
