import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const InstagramProfile = () => {
    const [instagramPosts, setInstagramPosts] = useState([]);

    useEffect(() => {
        const accessToken = 'YOUR_ACCESS_TOKEN';
        const userId = 'studiofact.editions'; // Instagram username

        // Fetch user's posts
        fetch(`https://graph.instagram.com/v12.0/${userId}?fields=media_type,media_url,caption,permalink,thumbnail_url,timestamp&access_token=${accessToken}`)
            .then((response) => response.json())
            .then((data: any) => {
                if (data.data && data.data.length > 0) {
                    setInstagramPosts(data.data);
                }
            })
            .catch((error) => console.error('Error fetching Instagram posts:', error));
    }, []);


    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold">Instagram Feed</h2>
            <div className="flex flex-wrap">
                {instagramPosts.map((post: any) => (
                    <div key={post.id} className="p-4">
                        {post.media_type === 'IMAGE' && (
                            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={post.media_url}
                                    alt={post.caption || 'Instagram Post'}
                                    width={250}
                                    height={250}
                                />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramProfile;
