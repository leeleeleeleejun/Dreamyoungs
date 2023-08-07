import { useState } from "react";
import { Select, OptionItem, OptionList } from "@/components/common/Select";
import * as S from "./Calendar.style";
import { ReactComponent as SelectIcon } from "@/assets/SelectIcon.svg";

export default function CalendarSelect({
  value,
  valueArray,
  setValue,
  isYear,
}: {
  value: number;
  valueArray: number[];
  setValue: React.Dispatch<React.SetStateAction<number>>;
  isYear: boolean;
}) {
  const [showList, setShowList] = useState(false);
  const setShowListFunc = () => {
    setShowList((prev) => !prev);
  };

  const text = isYear ? "년" : "월";

  return (
    <S.SelectBox>
      <Select $showList={showList} onClick={setShowListFunc}>
        {value + text}
        <SelectIcon />
      </Select>
      {showList && (
        <OptionList>
          {valueArray.map((item) => (
            <OptionItem
              key={item}
              $isActive={item === Number(value)}
              onClick={() => {
                setValue(item);
                setShowListFunc();
              }}
            >
              {item + text}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </S.SelectBox>
  );
}
