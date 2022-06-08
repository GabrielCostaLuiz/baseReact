import { PencilLine } from "phosphor-react";

import capa from "../../assets/capa.svg";
import user1 from "../../assets/user-1.svg";
import { Avatar } from "../Avatar";
import { Container, Profile } from "./style";

export function SideBar() {
  return (
    <Container>
      <img src={capa} alt="" />

      <Profile>
        <Avatar src={user1} />
        <strong>Cassia</strong>
        <span>Web Developer</span>
      </Profile>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </Container>
  );
}
