import { React, useState } from "react";

import Layout from "../components/layout/layout";
import Modal from "../components/modal";
import data from "./data.json";

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const items = data.map((item) => {
    return (
      <button
        key={item.id}
        className="carousel-item button no-style"
        onClick={() => {
          setOpenModal(true);
          setItem(item);
        }}
      >
        <img src={item.url} alt={item} />
      </button>
    );
  });

  return (
    <Layout>
      <div className="content">
        <div className="arrow up">
          {startIndex > 0 && (
            <button
              className="button no-style"
              onClick={() => {
                setStartIndex(startIndex - 4);
                setEndIndex(endIndex - 4);
              }}
            >
              <img src="up-arrow.svg" alt="up-arrow"></img>
            </button>
          )}
        </div>
        <div className="carousel-list">{items.slice(startIndex, endIndex)}</div>
        <div className="arrow down">
          {endIndex < data.length && (
            <button
              className="button no-style"
              onClick={() => {
                setStartIndex(startIndex + 4);
                setEndIndex(endIndex + 4);
              }}
            >
              <img src="down-arrow.svg" alt="down-arrow"></img>
            </button>
          )}
        </div>
      </div>
      {openModal && <Modal item={item} closeModal={setOpenModal} />}
    </Layout>
  );
};

export default Portfolio;
