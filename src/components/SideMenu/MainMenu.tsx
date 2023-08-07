import { useState } from "react";
import * as S from "./SideMenu.style";
import UpIcon from "@/components/icons/UpIcon";
import DownIcon from "@/components/icons/DownIcon";
import SubMenu from "./SubMenu";
import { MenuProps } from "@/types";

export default function MainMenu({ id, subActive, setSubActive }: MenuProps) {
  const [mainActive, setMainActive] = useState(false);

  const setMainActiveFunc = () => {
    setMainActive((prev) => !prev);
  };

  const isSubActive = subActive.slice(0, subActive.length - 1) === id;

  return (
    <>
      <S.MainMenu
        onClick={setMainActiveFunc}
        $active={!mainActive && isSubActive}
      >
        <span>대메뉴</span>
        {mainActive ? (
          <UpIcon active={isSubActive} />
        ) : (
          <DownIcon active={isSubActive} />
        )}
      </S.MainMenu>
      {mainActive && (
        <SubMenu id={id} subActive={subActive} setSubActive={setSubActive} />
      )}
    </>
  );
}
