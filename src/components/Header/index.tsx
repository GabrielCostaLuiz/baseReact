import igniteLogo from "../../assets/ignite-logo.svg";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <img src={igniteLogo} alt="" />
    </Container>
  );
}
