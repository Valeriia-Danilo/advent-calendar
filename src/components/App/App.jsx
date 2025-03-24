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
    <div className={css.calendarContainer}>
      {calendar.map(({ day, message, openImage, closedImage }) => (
        <GiftBox
          key={day}
          day={day}
          message={message}
          openImage={openImage}
          closedImage={closedImage}
        />
      ))}
    </div>
  );
}
