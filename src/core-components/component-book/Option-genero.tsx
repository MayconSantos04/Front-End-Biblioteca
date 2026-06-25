import { books } from "./Body-books";

export default function OptionGenero() {
  return (
    <div>
      <select
        name="Genêros"
        id="genero"
        className="border-1 text-sm text-gray-300 border-gray-300 rounded-2xl py-2 px-2 w-full cursor-pointer"
      >
        <option value="">Selecione um gênero</option>
        {books.map((item) => (
          <option key={item.id}>{item.genero}</option>
        ))}
      </select>
    </div>
  );
}
