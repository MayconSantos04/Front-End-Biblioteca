import { useState } from "react";
import ScreenBooks from "./Screen-books";
import Logo from "../assets/imagens/Logo.png";
import ScreenLoans from "./Screen-loans";
import ButtonToggle from "../components/Button-toggle";

export default function Header() {
  const [screen, setScreen] = useState("ScreenBooks");

  const handleIsChange = () => {
    setScreen(screen === "ScreenBooks" ? "ScreenLoans" : "ScreenBooks");
  };

  return (
    <div>
      <div className="bg-blue rounded-b-4xl h-auto">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-5">
          <div className="m-5">
            <img src={Logo} width={110} alt="Logo" />
          </div>
          <ButtonToggle
            handleIsChanges={handleIsChange}
            currentScreen={screen}
          />
        </div>
      </div>
      {screen === "ScreenBooks" ? <ScreenBooks /> : <ScreenLoans />}
    </div>
  );
}
