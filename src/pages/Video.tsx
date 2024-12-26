import { useParams } from "react-router-dom";
// Components
import Navbar from "../components/Navbar"

export default function VideoPage() {
    const params = useParams<{videoId: string}>();
    return (
        <>
            <Navbar />
            <h1 className="text-6xl">Video {params.videoId}</h1>
        </>
    )
}