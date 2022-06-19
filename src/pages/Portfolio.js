import { React, useState } from "react";

import Layout from "../components/layout/layout";
import Modal from "../components/modal";
import data from "./data.json";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState(null);

  const items = data.map((item) => {
    return (
      <button
        className="carousel-item button no-style"
        onClick={() => {
          setOpenModal(true);
          setItem(item);
          console.log(item);
        }}
      >
        <img src={item.url} alt={item} />
      </button>
    );
  });

  return (
    <Layout>
      <div className="content">
        <div className="carousel-list">{items}</div>
      </div>
      {openModal && <Modal item={item} closeModal={setOpenModal} />}
    </Layout>
  );
};

export default Portfolio;
