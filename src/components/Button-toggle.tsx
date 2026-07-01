import Button from "../components/Button";
import Book from "../assets/icons/book.svg?react";
import Handshake from "../assets/icons/handshake.svg?react";

interface ButtonToggleOnClick {
  handleIsChanges: () => void;
  currentScreen: string;
}

export default function ButtonToggle({
  handleIsChanges,
  currentScreen,
}: ButtonToggleOnClick) {
  return (
    <div>
      <div className="flex items-center justify-center mb-5 md:mb-0">
        <div className="flex items-center justify-center w-fill md:p-2 gap-3 bg-blue-secondary p-1 rounded-3xl md:rounded-4xl">
          <Button
            className="md:px-10 md:py-6 rounded-3xl"
            onClick={handleIsChanges}
            variant={currentScreen === "ScreenBooks" ? "primary" : "secondary"}
            icon={Book}
          >
            Livro
          </Button>

          <Button
            className="md:px-10 md:py-6 rounded-3xl"
            onClick={handleIsChanges}
            variant={currentScreen === "ScreenLoans" ? "primary" : "secondary"}
            icon={Handshake}
          >
            Empréstimos
          </Button>
        </div>
      </div>
    </div>
  );
}
