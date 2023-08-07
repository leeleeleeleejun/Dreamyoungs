import { useEffect, useState } from "react";
import * as S from "./Calendar.style";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import CalendarSelect from "./CalendarSelect";

export default function CalendarHeader({
  targetDate,
  setTargetDate,
}: {
  targetDate: Date;
  setTargetDate: (date: Date) => void;
}) {
  const [year, setYear] = useState(Number(targetDate.getFullYear()));
  const [month, setMonth] = useState(Number(targetDate.getMonth() + 1));

  useEffect(() => {
    //상태(year, month) 변경 시 달력 변환
    setTargetDate(new Date(`${year}-${month}-01`));
  }, [year, month]);

  const prevMonth = () => {
    if (month === 1) {
      if (year === YearArray[YearArray.length - 1]) {
        alert("지정범위에서 벗어났습니다");
        return;
      }
      setYear((prev) => --prev);
      setMonth(12);
    } else {
      setMonth((prev) => --prev);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      if (year === YearArray[0]) {
        alert("지정범위에서 벗어났습니다");
        return;
      }
      setYear((prev) => ++prev);
      setMonth(1);
    } else {
      setMonth((prev) => ++prev);
    }
  };

  return (
    <S.CalendarHeaderBox>
      {/*이전 월로 이동*/}
      <button onClick={prevMonth}>
        <LeftArrowIcon />
      </button>
      <S.SelectWrap>
        <CalendarSelect
          value={year}
          valueArray={YearArray}
          setValue={setYear}
          isYear={true}
        />
        <CalendarSelect
          value={month}
          valueArray={MonthArray}
          setValue={setMonth}
          isYear={false}
        />
      </S.SelectWrap>
      {/*다음 월로 이동*/}
      <button onClick={nextMonth}>
        <RightArrowIcon />
      </button>
    </S.CalendarHeaderBox>
  );
}

const YearArray: number[] = Array(14)
  .fill(2010)
  .map((item, index) => item + index)
  .reverse();

const MonthArray: number[] = Array(12)
  .fill(1)
  .map((item, index) => item + index);
