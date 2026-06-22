import Card from "../../components/Card";
import Text from "../../components/Text";

const books = [
  {
    id: 1717005420000000,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: true,
  },
  {
    id: 1718787000000,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: true,
  },
  {
    id: 3894240000000,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: true,
  },
];

export default function BodyBooks() {
  return (
    <>
      <div className="flex flex-col gap-3">
        {books.map((book) => (
          <Card className="flex flex-col p-2" key={book.id}>
            <div>
              <Text variant="body-text-base"> {book.titulo} </Text>•{" "}
              <Text>{book.autor}</Text>
            </div>
            <div>
              <Text>{book.genero}</Text>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
