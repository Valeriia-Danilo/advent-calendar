import { useEffect, useState } from "react";
import calendar from "../calendar.json";
import GiftBox from "../Hatch/GiftBox";
import css from "./App.module.css";

export default function App() {
  const [openedDays, setOpenedDays] = useState(() => {
    const stored = localStorage.getItem("openedDays");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("openedDays", JSON.stringify(openedDays));
  }, [openedDays]);

  const handleOpenDay = (day) => {
    if (!openedDays.includes(day)) {
      setOpenedDays((prev) => [...prev, day]);
    }
  };

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  return (
    <div className={css.container}>
      <div className={css.imgContainer}></div>

      <div className={css.calendarContainer}>
        {calendar.map(({ day, message, closedImage, modalImage }) => {
          const isDisabled =
            currentMonth < 3 || (currentMonth === 3 && day > currentDay);

          return (
            <GiftBox
              key={day}
              day={day}
              message={message}
              closedImage={closedImage}
              modalImage={modalImage}
              isOpen={openedDays.includes(day)}
              isDisabled={isDisabled}
              onOpen={() => handleOpenDay(day)}
            />
          );
        })}
      </div>
    </div>
  );
}
