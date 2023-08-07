import React from "react";
import { useEffect, useState, lazy, Suspense } from "react";
import { format } from "date-fns";
import { InfoProps } from "@/types";
import * as S from "./Info.style";

// 캘린더는 초기화면에 사용되지 않기 때문에 초기로딩속도를 줄이기 위해 동적import를 사용했습니다.
const Calendar = lazy(() => import("@/components/Calendar"));

const DateInfo = ({ infoCategory, defaultValue, setDataFunc }: InfoProps) => {
  const initialDate =
    typeof defaultValue === "string" ? new Date(defaultValue) : new Date();

  const [isShow, setIsShow] = useState(false);
  const [targetDate, setTargetDate] = useState<Date>(initialDate); // 달력에 표시되는 기준일
  const [activeDate, setActiveDate] = useState<Date>(initialDate); // 활성화된 날짜
  const formatDate = format(activeDate, "yyyy.MM.dd");

  useEffect(() => {
    setDataFunc([infoCategory, formatDate]);
  }, [activeDate]);

  if (typeof defaultValue !== "string") {
    return null;
  }

  const setTargetDateFunc = (date: Date) => {
    setTargetDate(date);
  };

  const setActiveDateFunc = (date: Date) => {
    setActiveDate(date);
    setIsShow(false);
  };

  const showCalendar = () => {
    setIsShow((prev) => !prev);
    // 날짜를 변경하지 않고 달력을 닫았을 때
    // 달력을 다시 활성화 위치로 초기화하기 위해
    if (isShow) {
      setTargetDateFunc(activeDate);
    }
  };

  return (
    <div>
      <S.DateInfo
        type="button"
        value={formatDate}
        onClick={showCalendar}
        $isShow={isShow}
      />
      {isShow && (
        // Calendar의 loading 시간이 약 20밀리초 이내이므로 스켈레톤 UI 사용이 오히려 UX 저하 예상
        <Suspense fallback={null}>
          <Calendar
            targetDate={targetDate}
            setTargetDate={setTargetDateFunc}
            activeDate={activeDate}
            setActiveDate={setActiveDateFunc}
          />
        </Suspense>
      )}
    </div>
  );
};

export default React.memo(DateInfo);
