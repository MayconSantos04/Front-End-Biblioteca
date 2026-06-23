import Text from "../../components/Text";
import Card from "../../components/Card";
import Button from "../../components/Button";
import InputLabel from "../../components/Input-label";

interface ModalRegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalRegister({ isOpen, onClose }: ModalRegisterProps) {
  if (!isOpen) return null;
  return (
    <div className="absolute">
      <div>
        <Card className="p-5 bg-base-primary shadow-xl">
          <form className="flex flex-col gap-4">
            <div>
              <Text variant="body-text-name" className="text-gray-100">
                Novo Livro
              </Text>
            </div>
            <div>
              <InputLabel
                label="Título"
                placeholder="Título do livro..."
                id="título"
              />
            </div>
            <div>
              <InputLabel label="Autor" placeholder="Autor..." id="autor" />
            </div>
            <div>
              <InputLabel
                label="Gênero"
                placeholder="Gênero do livro..."
                id="genero"
              />
            </div>
            <div className="flex gap-3 items-center">
              <Button>Cadastrar</Button>
              <Button variant="secondary">
                <Text className="text-gray-300">Cancelar</Text>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
