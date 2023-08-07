import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, format } from "date-fns";
import { CalendarProps } from "@/types";
import CalendarWeek from "./CalendarWeek";
import * as S from "./Calendar.style";
import { useMemo } from "react";

export default function CalendarBody({
  targetDate,
  setTargetDate,
  activeDate,
  setActiveDate,
}: CalendarProps) {
  const monthStart = startOfMonth(targetDate); //현재 달의 시작 날짜
  const monthEnd = endOfMonth(monthStart); //현재 달의 마지막 날짜
  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜

  //렌더링 될 때마 while문 동작 시 성능 저하가 올 수 있음
  const rows = useMemo(() => {
    const rows = [];
    let date = startDate;

    while (date <= addDays(endDate, 7) && rows.length < 6) {
      const weeks = []; // 일주일 단위로 묶음
      for (let i = 0; i < 7; i++) {
        const currDate = date;
        weeks.push(
          <S.Td
            key={date.toString()}
            $SameMonth={!isSameMonth(date, monthStart)}
            $isToDay={isSameDay(new Date(), currDate)}
            $isActive={isSameDay(activeDate, currDate)}
            onClick={() => {
              setTargetDate(currDate);
              setActiveDate(currDate);
            }}
          >
            {format(date, "d")}
          </S.Td>
        );
        date = addDays(date, 1);
      }
      rows.push(<tr key={date.toString()}>{weeks}</tr>);
    }

    return rows;
  }, [
    activeDate,
    monthStart,
    startDate,
    endDate,
    setActiveDate,
    setTargetDate,
  ]);

  return (
    <S.Table>
      <CalendarWeek />
      <tbody>{rows}</tbody>
    </S.Table>
  );
}
