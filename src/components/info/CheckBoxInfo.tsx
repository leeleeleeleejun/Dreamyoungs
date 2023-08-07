import React from "react";
import { InfoProps } from "@/types";
import * as S from "./Info.style";
import CheckBox from "@/components/common/CheckBox";
import Label from "@/components/common/Label";

const CheckBoxInfo = ({
  infoCategory,
  defaultValue,
  setDataFunc,
}: InfoProps) => {
  if (!Array.isArray(defaultValue)) return null;

  return (
    <S.CheckInfoBox>
      {quantity.map((item) => {
        const value = `선택${item}`;
        const checked = defaultValue.includes(value);
        return (
          <div key={item}>
            <CheckBox
              id={"checkBox" + item}
              type="checkBox"
              defaultChecked={checked}
              onChange={() => {
                if (checked) {
                  const newValue = defaultValue
                    .filter((item) => item !== value)
                    .sort();
                  setDataFunc([infoCategory, newValue]);
                } else {
                  const newValue = defaultValue.concat(value).sort();
                  setDataFunc([infoCategory, newValue]);
                }
              }}
            />
            <Label htmlFor={"checkBox" + item}>{value}</Label>
          </div>
        );
      })}
    </S.CheckInfoBox>
  );
};

export default React.memo(CheckBoxInfo);

const quantity = [1, 2, 3];
