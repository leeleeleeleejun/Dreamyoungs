import * as S from "./Calendar.style";

export default function CalendarWeek() {
  return (
    <thead>
      <tr>
        {day.map((item, index) => (
          <S.Th key={index}>{item}</S.Th>
        ))}
      </tr>
    </thead>
  );
}

const day = ["일", "월", "화", "수", "목", "금", "토"];
