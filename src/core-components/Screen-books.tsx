import Container from "../components/Container";
import Title from "./component-book/Title";
import BodyBooks from "./component-book/Body-books";

export default function ScreenBooks() {
  return (
    <div>
      <Container className="flex flex-col gap-3">
        <Title />
        <BodyBooks />
      </Container>
    </div>
  );
}
