import React from "react";
import { InfoProps } from "@/types";
import * as S from "./Info.style";

const InputInfo = ({ infoCategory, defaultValue, setDataFunc }: InfoProps) => {
  return (
    <S.InputInfo
      value={defaultValue}
      type="text"
      onChange={(e) => {
        setDataFunc([infoCategory, e.target.value]);
      }}
    />
  );
};

export default React.memo(InputInfo);
