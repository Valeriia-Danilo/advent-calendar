import { useState } from "react";
import css from "./GiftBox.module.css";

export default function GiftBox({ day, message, closedImage, modalImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBox = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.giftContainer}>
        {!isOpen ? (
          <div className={css.giftButtonWrapper}>
            <button onClick={handleClickBox} className={css.giftButton}>
              <img
                src={closedImage}
                alt={`Gift ${day}`}
                className={css.giftImage}
              />
            </button>
            <p className={css.giftDayLabel}>{day}</p>
          </div>
        ) : (
          <button onClick={handleClickBox} className={css.giftButton}>
            <img
              src={modalImage}
              alt={`Opened Gift ${day}`}
              className={css.giftImage}
            />
          </button>
        )}
      </div>

      {isModalOpen && (
        <div onClick={closeModal} className={css.modalOverlay}>
          <div onClick={(e) => e.stopPropagation()} className={css.modalWindow}>
            <button onClick={closeModal} className={css.modalCloseBtn}>
              X
            </button>
            <p className={css.modalText}>{message}</p>
            <div className={css.modalImgContainer}>
              <img
                src={modalImage}
                alt={`Gift ${day}`}
                className={css.modalImg}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
