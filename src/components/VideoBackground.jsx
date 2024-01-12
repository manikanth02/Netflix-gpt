import useGetTrailerVideo from "../hooks/useGetTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId}) => {

    useGetTrailerVideo(movieId);
    const trailerId = useSelector((store) => store?.movies?.trailerVideos)

    return(
        <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    )
}

export default VideoBackground;