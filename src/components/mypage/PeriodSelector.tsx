"use client";
import { usePeriodContext } from "@/context/PeriodContext";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState, forwardRef } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PeriodSelector() {
  const { setStartDate, setEndDate } = usePeriodContext()!;
  const [inputStartDate, setInputStartDate] = useState<Date | null>(new Date());
  const [inputEndDate, setInputEndDate] = useState<Date | null>(
    new Date(new Date().setMonth(inputStartDate!.getMonth() + 1)),
  );

  useEffect(() => {
    if (inputStartDate! > inputEndDate!) setInputStartDate(inputEndDate);
  }, [inputEndDate]);

  useEffect(() => {
    if (inputStartDate! > inputEndDate!) setInputEndDate(inputStartDate);
  }, [inputStartDate]);

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
    if (!inputStartDate || !inputEndDate) return;
    setStartDate(inputStartDate);
    setEndDate(inputEndDate);
  };

  return (
    <div className="flex justify-center gap-6">
      <div className="flex gap-1 items-center">
        <p>
          <Image
            src="/images/calendar-icon.svg"
            alt="기간별"
            width={33}
            height={33}
          />
        </p>
        <button
          className="btn_extra_small"
          onClick={e => handleStaticPeriod(e, 3)}
        >
          3개월
        </button>
        <button
          className="btn_extra_small"
          onClick={e => handleStaticPeriod(e, 6)}
        >
          6개월
        </button>
        <button
          className="btn_extra_small"
          onClick={e => handleStaticPeriod(e, 12)}
        >
          1년
        </button>
      </div>
      <div className="flex items-center justify-between gap-1">
        <div className="relative">
          <DatePicker
            renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
              <CustomHeader
                date={date}
                increaseMonth={increaseMonth}
                decreaseMonth={decreaseMonth}
              />
            )}
            selected={inputStartDate}
            onChange={(date: Date) => setInputStartDate(date)}
            selectsStart
            startDate={inputStartDate}
            endDate={inputEndDate}
            locale={ko}
            customInput={<CustomInput />}
          ></DatePicker>
        </div>
        <p>~</p>
        <div className="relative">
          <DatePicker
            renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
              <CustomHeader
                date={date}
                increaseMonth={increaseMonth}
                decreaseMonth={decreaseMonth}
              />
            )}
            selected={inputEndDate}
            onChange={(date: Date) => setInputEndDate(date)}
            selectsEnd
            startDate={inputStartDate}
            endDate={inputEndDate}
            locale={ko}
            customInput={<CustomInput />}
          ></DatePicker>
        </div>
      </div>
      <button
        className="flex w-[87px] h-[33px] justify-center items-center bg-black text-white text-sm"
        onClick={e => handleSubmitPeriod(e)}
      >
        조회하기
      </button>
    </div>
  );
}

const CustomInput = forwardRef(
  (
    { value, onClick }: { value: Date; onClick: React.MouseEventHandler },
    ref: React.Ref<HTMLButtonElement>,
  ) => (
    <button
      className="w-[107px] h-[33px] text-darkgray border-[1px] border-whitegray flex justify-center items-center text-sm"
      onClick={onClick}
      ref={ref}
    >
      {format(new Date(value), "yyyy-MM-dd")}
    </button>
  ),
);
// Add the following code inside the PeriodSelector component, before the return statement

interface CustomHeaderProps {
  date: Date;
  increaseMonth: () => void;
  decreaseMonth: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  date,
  increaseMonth,
  decreaseMonth,
}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <div className="flex justify-between items-center">
      <button className="btn_icon" onClick={decreaseMonth}>
        <BsChevronLeft />
      </button>
      <p className="text-lg font-bold">
        {year} {month < 10 ? `0${month}` : month}
      </p>
      <button className="btn_icon" onClick={increaseMonth}>
        <BsChevronRight />
      </button>
    </div>
  );
};
