import { CalendarProps } from "@/types";
import * as S from "./Calendar.style";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

// dateInfo 컴포넌트에서 props받아옴
export default function Calendar({
  targetDate,
  setTargetDate,
  activeDate,
  setActiveDate,
}: CalendarProps) {
  return (
    <S.CalendarBox>
      <CalendarHeader targetDate={targetDate} setTargetDate={setTargetDate} />
      <CalendarBody
        targetDate={targetDate}
        activeDate={activeDate}
        setTargetDate={setTargetDate}
        setActiveDate={setActiveDate}
      />
    </S.CalendarBox>
  );
}
