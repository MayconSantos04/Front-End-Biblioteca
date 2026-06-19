import Text from "../components/Text";
import Button from "../components/Button";
import Book from "../assets/icons/book.svg?react";
import Logo from "../assets/imagens/Logo.png";
import Handshake from "../assets/icons/handshake.svg?react";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue rounded-b-4xl h-auto">
      <div className="m-5">
        <img src={Logo} width={110} alt="Logo" />
      </div>

      <div className="flex items-center justify-center mb-5">
        <div className="flex items-center justify-center w-fill md:p-2 gap-3 bg-blue-secondary p-1 rounded-3xl md:rounded-4xl">
          <Button className="md:px-10 md:py-6 rounded-3xl" icon={Book}>
            <Text variant="body-text-name">Livro</Text>
          </Button>

          <Button className="md:px-10 md:py-6 rounded-3xl" icon={Handshake}>
            <Text variant="body-text-name">Empréstimos</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
