import Text from "../../components/Text";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Plus from "../../assets/icons/plus.svg?react";

export default function Title() {
  return (
    <div>
      <Container className="flex justify-between items-center mt-5">
        <div>
          <div>
            <Text className="text-gray-100" variant="body-md-base">
              Livro
            </Text>
          </div>
        </div>

        <div>
          <Button icon={Plus}>Novo Livro</Button>
        </div>
      </Container>
    </div>
  );
}
