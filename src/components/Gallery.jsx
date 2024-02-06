import "../style/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import firstImg from "../assets/img1.jpg";

function Gallery() {
  return (
    <div id="galleryContainer">
      <button
        id="left"
        onClick={() => console.log("left Click")}
        className="button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <img src={firstImg} alt="firstImg" id="firstImg" />

      <button
        id="right"
        onClick={() => console.log("right Click")}
        className="button"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Gallery;
