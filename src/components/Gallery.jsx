import "../style/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  return (
    <div>
      <button id="left">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button id="right">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Gallery;
