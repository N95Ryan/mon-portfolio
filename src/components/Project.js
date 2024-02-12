import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";

const Project = ({
  technologies,
  title,
  image,
  color,
  deployed,
  description,
}) => {

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div
      className="col-sm-12 col-lg-6 animate-fade-up grid-cols-2"
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-[25px]">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle text-semibold">{title}</h3>
          <span className="viewWork">Le lien &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        <button
          className="btn"
          onClick={() => (window.location.href = deployed)}
        >
          Découvrez le projet
        </button>
      </Modal>
    </div>
  );
};

export default Project;
