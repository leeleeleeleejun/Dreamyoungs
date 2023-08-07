import { MenuProps } from "@/types";
import * as S from "./SideMenu.style";

export default function SubMenu({ id, subActive, setSubActive }: MenuProps) {
  return (
    <ul>
      {quantity.map((item) => (
        <S.SubMenu
          key={item}
          $active={subActive === id + item}
          onClick={() => {
            setSubActive(id + item);
          }}
        >
          소메뉴
        </S.SubMenu>
      ))}
    </ul>
  );
}

const quantity = [1, 2];
