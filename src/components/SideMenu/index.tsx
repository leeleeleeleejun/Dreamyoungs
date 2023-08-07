import { useState } from "react";
import MainMenu from "./MainMenu";
import * as S from "./SideMenu.style";

export default function MenuContainer() {
  const [showMenu, setShowMenu] = useState(false);
  const [subActive, setSubActive] = useState("");

  const setSubActiveFunc = (currMenu: string) => {
    setSubActive(currMenu);
  };

  return (
    <S.Aside $showMenu={showMenu}>
      <S.Arrow
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        {showMenu ? "❯" : "❮"}
      </S.Arrow>
      <ul>
        {quantity.map((item) => (
          <MainMenu
            key={"MainMenu" + item}
            id={"MainMenu" + item}
            subActive={subActive}
            setSubActive={setSubActiveFunc}
          />
        ))}
      </ul>
    </S.Aside>
  );
}

const quantity = [1, 2];
