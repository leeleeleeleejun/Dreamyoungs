import { useEffect, useState, useCallback } from "react";
import { getInfo } from "@/api";
import { Info, InfoKey } from "@/types";
import * as S from "./Contents.style";
import BasicInfo from "@/components/info/BasicInfo";
import InputInfo from "@/components/info/InputInfo";
import CheckBoxInfo from "@/components/info/CheckBoxInfo";
import RadioInfo from "@/components/info/RadioInfo";
import DateInfo from "@/components/info/DateInfo";
import PostButton from "@/components/PostButton";

export default function Contents() {
  const [data, setData] = useState<Info>();

  // api 요청하여 초기값(state) 설정
  useEffect(() => {
    (async () => {
      const Info = await getInfo();
      setData(Info);
    })();
  }, []);

  const setDataFunc = useCallback((target: [string, string | string[]]) => {
    const [key, value] = target;
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  if (!data) return null;

  //객체 형태의 data를 배열의 형태로 변경 [key, value]의 형태
  const dataArray = Object.entries(data);

  return (
    <S.Main>
      <S.InfoWrap>
        {dataArray.map((item) => {
          const [infoCategory] = item;
          return find(infoCategory as InfoKey, data, setDataFunc);
        })}
      </S.InfoWrap>
      <PostButton data={data} />
    </S.Main>
  );
}

// 정보이름에 따라 컴포넌트로 분류하는 함수
const find = (
  infoCategory: InfoKey,
  data: Info,
  setDataFunc: (target: [string, string | string[]]) => void
) => {
  const content = data[infoCategory];

  if (content === undefined) return null;

  const infoName =
    infoCategory === "date" ? "날짜" : `정보${infoCategory.slice(-1)}`;

  switch (infoCategory) {
    case "info1":
    case "info3": {
      if (typeof content === "string") {
        return (
          <S.InfoBox key={infoCategory}>
            <S.InfoName>{infoName}</S.InfoName>
            <BasicInfo>{content}</BasicInfo>
          </S.InfoBox>
        );
      } else return null;
    }
    case "info2":
    case "info4":
      if (typeof content === "string") {
        return (
          <S.InfoBox key={infoCategory}>
            <S.InfoName>{infoName}</S.InfoName>
            <InputInfo
              infoCategory={infoCategory}
              defaultValue={content}
              setDataFunc={setDataFunc}
            />
          </S.InfoBox>
        );
      } else return null;
    case "info5":
      return (
        <S.InfoBox key={infoCategory}>
          <S.InfoName>{infoName}</S.InfoName>
          <RadioInfo
            infoCategory={infoCategory}
            defaultValue={content}
            setDataFunc={setDataFunc}
          />
        </S.InfoBox>
      );

    case "info6":
      return (
        <S.InfoBox key={infoCategory}>
          <S.InfoName>{infoName}</S.InfoName>
          <CheckBoxInfo
            infoCategory={infoCategory}
            defaultValue={content}
            setDataFunc={setDataFunc}
          />
        </S.InfoBox>
      );
    case "date":
      return (
        <S.InfoBox key={infoCategory}>
          <S.InfoName>{infoName}</S.InfoName>
          <DateInfo
            infoCategory={infoCategory}
            defaultValue={content}
            setDataFunc={setDataFunc}
          />
        </S.InfoBox>
      );
    default:
      null;
  }
};
