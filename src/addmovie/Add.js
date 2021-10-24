import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "../StarRating/Star";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Addmovie = ({ handleAdd }) => {
  const [rat, setrat] = useState(0);
  const [form, setform] = useState({
    name: "",
    image: "",
    date: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button className="btn add-movie-btn " onClick={openModal}>
        add movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <from>
          <h2>Add Movie</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="Date"
              value={form.date}
              name="date"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Rate</label>
            <StarRating rate={rat} handleRate={setrat} />
          </div>
          <div>
            <label>Image</label>
            <input
              type="url"
              value={form.image}
              name="image"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => {
                let newMovie = {
                  ...form,
                  id: Math.random(),
                  rating: rat,
                };
                e.preventDefault();
                handleAdd(newMovie);
              }}
            >
              Add movie
            </button>
            <button className=" btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </from>
      </Modal>
    </div>
  );
};

export default Addmovie;
