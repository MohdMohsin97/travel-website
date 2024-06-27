"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const datesData = [
  {
    day: "Mo",
    date: 12,
  },
  {
    day: "Tu",
    date: 13,
  },
  {
    day: "We",
    date: 14,
  },
  {
    day: "Th",
    date: 15,
  },
  {
    day: "Fr",
    date: 16,
  },
  {
    day: "Sa",
    date: 17,
  },
  {
    day: "Su",
    date: 18,
  },
];

const Dates = () => {
  const [activeDate, setActiveDate] = useState(1);

  const handleActive = (id: number) => {
    setActiveDate(id);
  };

  return (
    <div className="grid grid-cols-7 gap-4 my-8">
      {datesData.map((date, i) => (
        <DateButton
          key={i}
          id={i}
          day={date.day}
          date={date.date}
          handleActive={handleActive}
          activeDate={activeDate}
        />
      ))}
    </div>
  );
};

const DateButton = ({
  day,
  date,
  id,
  handleActive,
  activeDate,
}: {
  day: string;
  date: number;
  id: number;
  handleActive: (id: number) => void;
  activeDate: number;
}) => {
  let active = activeDate === id;
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className="h-full w-12 m-auto py-2 flex-col gap-1 rounded-t-full rounded-b-full"
      onClick={() => handleActive(id)}
    >
      <p className="text-[10px] text-gray-400">{day}</p>
      <span className={`bg-foreground h-2 w-1 text-white rounded-full ${active ? "" : "invisible"}`}></span>
      <p>{date}</p>
    </Button>
  );
};

export default Dates;
