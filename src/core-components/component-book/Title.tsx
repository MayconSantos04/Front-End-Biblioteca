import { useState } from "react";
import Text from "../../components/Text";
import Button from "../../components/Button";
import ModalRegister from "./Modal-register-book";
import Plus from "../../assets/icons/plus.svg?react";

export default function Title() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <div>
          <Text className="text-gray-100" variant="body-md-base">
            Livro
          </Text>
        </div>
      </div>

      <div>
        <Button onClick={() => setOpenModal(true)} icon={Plus}>
          Novo Livro
        </Button>
        <div className="relative z-10 right-42">
          <ModalRegister
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>
    </div>
  );
}
