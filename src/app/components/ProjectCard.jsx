import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, contentType }) => {
  const isVideo = contentType === "video";
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const toggleVideoPlay = (e) => {
    if (e.target.paused) {
      e.target.play();
      setIsPlaying(true);
    } else {
      e.target.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => setShowOverlay(false);
  const handleMouseLeave = () => setShowOverlay(true);

  return (
    <div className="group">
      <div className="h-52 md:h-72 rounded-t-xl relative">
        {isVideo ? (
          <video
            src={imgUrl}
            className="h-full w-full object-cover rounded-t-xl"
            onClick={toggleVideoPlay}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            preload="auto"
          />
        ) : (
          <div
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            className="h-full w-full rounded-t-xl"
          />
        )}

        {showOverlay && (
          <div className="absolute bottom-0 left-0 w-full h-14">
            <div className="overlay items-center justify-center absolute bottom-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
              <Link
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
              </Link>
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
