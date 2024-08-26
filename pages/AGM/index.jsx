import React, { useState } from "react";

const videos = [
  { id: "https://youtu.be/fQD1zxm7Dw0?si=n6bWqXCrs2Y9WYtZ", title: "Video 1", description: "This is the description for Video 1." },
  { id: "https://youtu.be/WUCUQrkLFrg?si=J-YC6z2PGzTxpW2j", title: "Video 2", description: "This is the description for Video 2." },
  { id: "https://youtu.be/mkpvywZeYRM?si=auYnAM1-xRKWu0Td", title: "Video 3", description: "This is the description for Video 3." },
  // Add more videos as needed
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          {/* Video Thumbnails/Toggles */}
          <div className="flex flex-wrap gap-4 mb-6">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`p-4 rounded-lg ${selectedVideo.id === video.id ? "bg-teal-500 text-white" : "bg-white border border-gray-300"} transition-colors duration-300`}
              >
                {video.title}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="w-full max-w-4xl mb-6">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Description */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{selectedVideo.title}</h2>
            <p className="text-gray-700">{selectedVideo.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
