"use client";
import { usePeriodContext } from "@/context/PeriodContext";
import { useState } from "react";

export default function PeriodSelector() {
  const { setStartDate, setEndDate } = usePeriodContext()!;
  const [inputStartDate, setInputStartDate] = useState<string>();
  const [inputEndDate, setInputEndDate] = useState<string>();

  const handleStaticPeriod = (
    e: React.MouseEvent<HTMLButtonElement>,
    month: number,
  ) => {
    e.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth();
    const day = today.getDate();
    const startDate = new Date(year, monthIndex - month, day);
    const endDate = new Date(year, monthIndex, day);
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const handleSubmitPeriod = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("inputStartDate", inputStartDate);
    console.log("inputEndDate", inputEndDate);
    if (!inputStartDate || !inputEndDate) return;
    setStartDate(new Date(inputStartDate));
    setEndDate(new Date(inputEndDate));
  };

  return (
    <div className="flex justify-center gap-6">
      <div className="flex gap-1 items-center">
        <p>기간별</p>
        <button className="btn" onClick={e => handleStaticPeriod(e, 3)}>
          3개월
        </button>
        <button className="btn" onClick={e => handleStaticPeriod(e, 6)}>
          6개월
        </button>
        <button className="btn" onClick={e => handleStaticPeriod(e, 12)}>
          1년
        </button>
      </div>
      <form className="flex gap-1 items-center">
        <p>캘린더</p>
        <input
          type="date"
          value={inputStartDate}
          onChange={e => setInputStartDate(e.target.value)}
        />
        <p>~</p>
        <input
          type="date"
          value={inputEndDate}
          onChange={e => setInputEndDate(e.target.value)}
        />
      </form>
      <button
        className="btn"
        type="submit"
        onClick={e => handleSubmitPeriod(e)}
      >
        조회하기
      </button>
    </div>
  );
}
