import React, { useState } from 'react';
import { isYouTubeUrl, getYouTubeId } from '../utils/youtube-url';
import {toast, Toaster} from 'react-hot-toast';

interface YouTubeFormProps {
  setVideoId: (id: string) => void;
}

const YouTubeForm: React.FC<YouTubeFormProps> = ({setVideoId}) => {
  const [youtubeLink, setYoutubeLink] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted link:', youtubeLink);
    // Checks if the link belongs to youtube.com or youtu.be
    const isValid: boolean = isYouTubeUrl(youtubeLink);
    console.log('Is host YouTube?:', isValid);

    // ❗️❗️❗️❗️❗️❗️ SHORTS DONT WORK ❗️❗️❗️❗️❗️❗️
    if (isValid) {
      const newVideoId: string = getYouTubeId(youtubeLink) as string;
      console.log('YouTube video ID:', newVideoId);

      if (newVideoId) {
        setVideoId(newVideoId);
        toast.success(`YouTube video ID: ${newVideoId}`);
      }
      else {
        toast.error('Error getting YouTube video ID');
      }
    }
    else {
      toast.error('Invalid YouTube URL');
    }


  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <div className="mb-4">
          <label htmlFor="youtubeLink" className="block text-gray-700 text-sm font-bold mb-2">
            YouTube Link:
          </label>
          <input
            id="youtubeLink"
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            placeholder="Enter YouTube link"
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default YouTubeForm;
