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

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Text variant="body-text-base" className="text-blue">
        Olá mundo
      </Text>
      <Text variant="body-text-base" className="text-red-secondary">
        Olá mundo
      </Text>
      <Text className="text-green-secondary">Olá mundo</Text>
      <Text>Olá mundo</Text>
      <div className="bg-blue p-10">oi</div>

      <div>
        <Badge variant="secondary" className="border-2 border-red-border">
          Emprestado
        </Badge>
        <Badge variant="primary" className="border-2 border-green-border">
          Disponível
        </Badge>
      </div>

      <Icon svg={Search} />
      <Icon svg={Plus} />

      <div className="flex items-center gap-3 bg-blue-secondary p-2.5 rounded-3xl">
        <div>
          <Button icon={Book}>Livro</Button>
        </div>

        <div>
          <Button icon={Handshake}>Empréstimos</Button>
        </div>
      </div>

      <div>
      <ButtonIcon icon={Trash} variant="primary"/>
      <ButtonIcon icon={Pen} />
      </div>

    </div>
  );
}
