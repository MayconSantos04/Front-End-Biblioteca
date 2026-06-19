import Text from "./components/Text";
import Badge from "./components/Badge";
import Search from "./assets/icons/Search.svg?react";
import Icon from "./components/Icon";
import Plus from "./assets/icons/plus.svg?react";
import Handshake from "./assets/icons/handshake.svg?react";
import Button from "./components/Button";
import Book from "../src/assets/icons/book.svg?react";
import ButtonIcon from "./components/Button-icon";
import Trash from "./assets/icons/trash.svg?react";
import Pen from "./assets/icons/pen.svg?react";
import InputText from "./components/Input-text";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./core-components/Header";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <Text variant="body-text-base" className="text-blue">
        Olá mundo
      </Text>
      <Text variant="body-text-base" className="text-red-secondary">
        Olá mundo
      </Text>
      <Text className="text-green-secondary">Olá mundo</Text>
      <Text>Olá mundo</Text>
      <div className="bg-blue p-10">oi</div>

      <div className="flex w-2xs">
        <Badge variant="secondary" className="border-2 border-red-border">
          Emprestado
        </Badge>
        <Badge variant="primary" className="border-2 border-green-border">
          Disponível
        </Badge>
      </div>

      <Icon svg={Search} />
      <Icon svg={Plus} />

      <Container className="border-2 border-black">
        
        <div className="flex flex-col items-center">
          <div className="md:p-3 flex gap-3 bg-blue-secondary p-2.5 rounded-3xl">
            <Button className="md:px-10 md:py-6" icon={Book}>
              <Text variant="body-text-name">Livro</Text>
            </Button>

            <Button className="md:px-10 md:py-6" icon={Handshake}>
              <Text variant="body-text-name">Empréstimos</Text>
            </Button>
          </div>

          <div className="flex gap-2">
            <ButtonIcon icon={Trash} variant="primary" />
            <ButtonIcon icon={Pen} />
          </div>
        </div>

        <InputText className="w-full" />

        <Card size="md" className="w-full flex justify-between items-center">
          <Text>Olá mundo Autor. JJ joseph</Text>

          <div className="flex sm:gap-10 md:gap-6">
            <Badge variant="primary" className="border-2 border-green-border">
              Disponível
            </Badge>

            <div className="flex gap-2">
              <ButtonIcon icon={Trash} variant="primary" />
              <ButtonIcon icon={Pen} />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
