import "../style/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  return (
    <div>
      <button id="left" onClick={() => console.log("left Click")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button id="right" onClick={() => console.log("right Click")}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Gallery;
