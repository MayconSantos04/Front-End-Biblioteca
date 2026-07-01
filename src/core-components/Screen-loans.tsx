import Container from "../components/Container";
import TitleLoans from "./component-loans/Title-loans";

export default function ScreenLoans() {
  return (
    <div>
      <Container className="flex flex-col gap-3">
        <TitleLoans />
      </Container>
    </div>
  );
}
