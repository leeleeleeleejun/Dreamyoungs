import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, format } from "date-fns";
import CalendarWeek from "./CalendarWeek";
import * as S from "./Calendar.style";

export default function CalendarBody({
  targetDate,
  setTargetDate,
  activeDate,
  setActiveDate,
}: {
  targetDate: Date;
  setTargetDate: (date: Date) => void;
  activeDate: Date;
  setActiveDate: (date: Date) => void;
}) {
  const monthStart = startOfMonth(targetDate); //현재 달의 시작 날짜
  const monthEnd = endOfMonth(monthStart); //현재 달의 마지막 날짜
  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜
  const rows = []; //달력에 표시되는 총 날짜
  let days = []; //1주일 단위
  let date = startDate;

  while (date <= addDays(endDate, 7)) {
    if (rows.length === 6) break;
    for (let i = 0; i < 7; i++) {
      const currDate = date;
      days.push(
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
    rows.push(<tr key={date.toString()}>{days}</tr>);
    days = [];
  }

  return (
    <S.Table>
      <CalendarWeek />
      <tbody>{rows}</tbody>
    </S.Table>
  );
}
