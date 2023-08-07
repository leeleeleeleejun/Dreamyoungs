import { useState } from "react";
import * as S from "./SideMenu.style";
import SubMenu from "./SubMenu";
import { MenuProps } from "@/types";
import { ReactComponent as DownIcon } from "@/assets/MenuDownIcon.svg";
import { ReactComponent as UpIcon } from "@/assets/MenuUpIcon.svg";

export default function MainMenu({ id, subActive, setSubActive }: MenuProps) {
  const [mainActive, setMainActive] = useState(false);

  const setMainActiveFunc = () => {
    setMainActive((prev) => !prev);
  };

  const isSubActive = subActive.slice(0, subActive.length - 1) === id;

  const fill = isSubActive ? "#333333" : "var(--gray-gray-2)";
  return (
    <>
      <S.MainMenu
        onClick={setMainActiveFunc}
        $active={!mainActive && isSubActive}
      >
        <span>대메뉴</span>
        {mainActive ? <UpIcon fill={fill} /> : <DownIcon fill={fill} />}
      </S.MainMenu>
      {mainActive && (
        <SubMenu id={id} subActive={subActive} setSubActive={setSubActive} />
      )}
    </>
  );
}

//
