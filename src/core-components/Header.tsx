import Button from "../components/Button";
import Book from "../assets/icons/book.svg?react";
import Logo from "../assets/imagens/Logo.png";
import Handshake from "../assets/icons/handshake.svg?react";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("livro");

  return (
    <div>
      <div className="bg-blue rounded-b-4xl h-auto">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-5">
          <div className="m-5">
            <img src={Logo} width={110} alt="Logo" />
          </div>

          <div className="flex items-center justify-center mb-5 md:mb-0">
            <div className="flex items-center justify-center w-fill md:p-2 gap-3 bg-blue-secondary p-1 rounded-3xl md:rounded-4xl">
              <Button
                className="md:px-10 md:py-6 rounded-3xl"
                onClick={() => setActive("livro")}
                variant={active === "livro" ? "primary" : "secondary"}
                icon={Book}
              >
                Livro
              </Button>

              <Button
                className="md:px-10 md:py-6 rounded-3xl"
                onClick={() => setActive("emprestimos")}
                variant={active === "emprestimos" ? "primary" : "secondary"}
                icon={Handshake}
              >
                Empréstimos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
