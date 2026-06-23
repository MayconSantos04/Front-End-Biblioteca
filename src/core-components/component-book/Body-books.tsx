import Card from "../../components/Card";
import Text from "../../components/Text";
import Pen from "../../assets/icons/pen.svg?react";
import Trash from "../../assets/icons/trash.svg?react";
import ButtonIcon from "../../components/Button-icon";
import Badge from "../../components/Badge";

interface Book {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

const books: Book[] = [
  {
    id: "1717005420000000",
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: true,
  },
  {
    id: "1718787000000",
    titulo: "Crime e Castigo",
    autor: "Dostoiévisk",
    genero: "Romance",
    disponivel: false,
  },
  {
    id: "3894240000000",
    titulo: "Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Ficção",
    disponivel: true,
  },
];

export default function BodyBooks() {
  function bookRegister() {
    if (books.length === 0) {
      return <Text className="text-center text-gray-300 mt-8" variant="body-text-sm">Não há livros cadastrados.</Text>;
    }
  }
  return (
    <>
      <div className="flex flex-col gap-3">
        {bookRegister()}
        {books.map(({ id, titulo, autor, genero, disponivel }) => (
          <Card className="flex p-3 border-l-4 border-blue" key={id}>
            <div className="flex justify-between items-center w-full">
              <div>
                <div>
                  <Text variant="body-text-name" className="text-gray-100">
                    {titulo}
                  </Text>
                </div>
                <div className="flex gap-1 items-center">
                  <Text variant="body-text-sm" className="text-gray-300">
                    {`${autor}  `}
                  </Text>
                  <span className="text-gray-300 text-base">/</span>
                  <Text className="text-gray-300">{`  ${genero}`}</Text>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  {disponivel ? (
                    <Badge
                      variant="primary"
                      className="border-2 border-green-border"
                    >
                      Disponível
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="border-2 border-red-border"
                    >
                      Emprestado
                    </Badge>
                  )}
                </div>
                <ButtonIcon icon={Pen} />
                <ButtonIcon icon={Trash} variant="primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
