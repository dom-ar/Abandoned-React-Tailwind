import { useState } from "react"
import Navbar from "../components/Navbar"
import Input from "../components/Input"

export default function App() {
  const [videoId, setVideoId] = useState<string>('');

  const YoutubeInfoComponent = () => {
    const videoID = '00lxm_doFYw';
  }

  return (
    <>
      <Navbar />
      <Input setVideoId={setVideoId}/>
    </>
  );
}