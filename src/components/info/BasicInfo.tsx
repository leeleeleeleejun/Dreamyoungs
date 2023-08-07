import React from "react";
import * as S from "./Info.style";

const BasicInfo = ({ children }: { children: string }) => {
  return <S.BasicInfo>{children}</S.BasicInfo>;
};

export default React.memo(BasicInfo);
