import { useState } from "react";
import css from "./GiftBox.module.css";

export default function GiftBox({ day, message, closedImage, openImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBox = () => {
    if (!isOpen) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsOpen(true);
  };

  return (
    <>
      <div className={css.giftContainer}>
        {!isOpen ? (
          <button
            onClick={handleClickBox}
            className={css.giftButton}
            style={{
              backgroundImage: `url(${closedImage})`,
            }}
          ></button>
        ) : (
          <div
            className={css.giftOpend}
            style={{
              backgroundImage: `url(${openImage})`,
            }}
          ></div>
        )}
        <p className={css.giftDayLabel}>{day}</p>
      </div>

      {isModalOpen && (
        <div onClick={closeModal} className={css.modalOverlay}>
          <div onClick={(e) => e.stopPropagation()} className={css.modalWindow}>
            <button onClick={closeModal} className={css.modalCloseBtn}>
              X
            </button>
            <p className={css.modalText}>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
