import Container from "../components/Container";
import Title from "../core-components/component-book/Title";
import BodyBooks from "../core-components/component-book/Body-books";

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
