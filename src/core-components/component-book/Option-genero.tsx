import { books } from "./Body-books";

interface OptionGeneroProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export default function OptionGenero({
  selectedGenre,
  onGenreChange,
}: OptionGeneroProps) {
  const availableGenres = [...new Set(books.map((book) => book.genero))];
  return (
    <div>
      <select
        name="Genêros"
        id="genero"
        className="border-1 text-sm text-gray-300 border-gray-300 rounded-2xl py-2 px-2 w-full cursor-pointer"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">Selecione um gênero</option>
        {books.map((item) => (
          <option key={item.id}>{item.genero}</option>
        ))}
      </select>
    </div>
  );
}
