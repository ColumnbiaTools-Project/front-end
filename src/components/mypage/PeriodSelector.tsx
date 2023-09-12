"use client";
export default function PeriodSelector() {
  return (
    <div className="flex justify-center gap-6">
      <div className="flex gap-1 items-center">
        <p>기간별</p>
        <button className="btn">3개월</button>
        <button className="btn">6개월</button>
        <button className="btn">1년</button>
      </div>
      <form className="flex gap-1 items-center" action="">
        <p>캘린더</p>
        <input type="date" />
        <p>~</p>
        <input type="date" />
      </form>
    </div>
  );
}
