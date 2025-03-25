import { useEffect, useState } from "react";
import calendar from "../calendar.json";
import GiftBox from "../Hatch/GiftBox";
import css from "./App.module.css";

export default function App() {
  const [days, setDays] = useState(
    localStorage.calendar ? JSON.parse(localStorage.calendar) : calendar
  );

  useEffect(() => {
    localStorage.setItem("calendar", JSON.stringify(days));
  }, [days]);

  return (
    <div className={css.container}>
      <div className={css.imgContainer}></div>

      <div className={css.calendarContainer}>
        {calendar.map(({ day, message, closedImage, modalImage }) => (
          <GiftBox
            key={day}
            day={day}
            message={message}
            closedImage={closedImage}
            modalImage={modalImage}
          />
        ))}
      </div>
    </div>
  );
}
