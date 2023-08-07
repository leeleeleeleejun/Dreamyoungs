import { useState } from "react";
import { Select, OptionItem, OptionList } from "@/components/common/Select";
import * as S from "./Calendar.style";
import SelectIcon from "@/components/icons/SelectIcon";

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
  return (
    <S.SelectBox>
      <Select $showList={showList} onClick={setShowListFunc}>
        {value + (isYear ? "년" : "월")}
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
              {item + (isYear ? "년" : "월")}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </S.SelectBox>
  );
}
