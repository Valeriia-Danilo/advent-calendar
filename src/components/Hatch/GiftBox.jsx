import { useState } from "react";
import css from "./GiftBox.module.css";

export default function GiftBox({
  day,
  message,
  closedImage,
  modalImage,
  isOpen,
  //   isDisabled,
  onOpen,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [isEarlyModalOpen, setIsEarlyModalOpen] = useState(false);

  const handleClickBox = () => {
    // if (isDisabled) {
    //   setIsEarlyModalOpen(true);
    //   return;
    // }

    setIsModalOpen(true);

    if (!isOpen) {
      onOpen();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   const closeEarlyModal = () => {
  //     setIsEarlyModalOpen(false);
  //   };

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

      {/* {isEarlyModalOpen && (
        <div onClick={closeEarlyModal} className={css.modalOverlay}>
          <div onClick={(e) => e.stopPropagation()} className={css.modalWindow}>
            <button onClick={closeEarlyModal} className={css.modalCloseBtn}>
              X
            </button>
            <p className={css.modalText}>
              Тц-тц-тц… Ще рано відкривати цей подарунок!
              <br />
              Потерпи до {day} квітня 😼
            </p>
            <div className={css.modalImgContainer}>
              <img
                src="../../../public/img/cat.png"
                alt="Котик каже ще рано"
                className={css.modalImg}
              />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
