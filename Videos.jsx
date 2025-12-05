import React, { useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const Videos = React.forwardRef(({ video, index, currentIndex }, ref) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (index === currentIndex) videoRef.current.play();
    else videoRef.current.pause();
  }, [currentIndex, index]);

  return (
    <section className="tiktok-section">
      <video ref={videoRef} src={video.src} loop className="tiktok-video" />
      <div className="actions">
        <button className="action-btn">
          <Heart />
          <span>{video.likes}</span>
        </button>
        <button className="action-btn">
          <MessageCircle />
          <span>{video.comments}</span>
        </button>
        <button className="action-btn">
          <Share2 />
          <span>Share</span>
        </button>
      </div>
      <div className="video-info">
        <h3>@{video.username}</h3>
        <p>{video.caption}</p>
      </div>
    </section>
  );
});

export default Videos;
