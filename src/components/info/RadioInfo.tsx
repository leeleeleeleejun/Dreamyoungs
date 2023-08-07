import { InfoProps } from "@/types";
import * as S from "./Info.style";
import React from "react";
import Label from "../common/Label";
import Radio from "../common/Radio";

const RadioInfo = ({ infoCategory, defaultValue, setDataFunc }: InfoProps) => {
  return (
    <div>
      <S.CheckInfoBox>
        {quantity.map((item) => {
          const value = `선택${item}`;
          return (
            <div key={item}>
              <Radio
                id={"radio" + item}
                type="radio"
                defaultChecked={defaultValue === value}
                onChange={() => {
                  setDataFunc([infoCategory, value]);
                }}
                name="info"
              />
              <Label htmlFor={"radio" + item}>{value}</Label>
            </div>
          );
        })}
      </S.CheckInfoBox>
      {defaultValue === "선택3" && (
        <S.RadioText>* 선택시 텍스트가 표시됩니다.</S.RadioText>
      )}
    </div>
  );
};

export default React.memo(RadioInfo);

const quantity = [1, 2, 3];
