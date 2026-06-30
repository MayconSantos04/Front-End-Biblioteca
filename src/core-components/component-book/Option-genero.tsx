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
        className="border text-sm text-gray-300 border-gray-300 rounded-2xl py-2 px-2 w-full cursor-pointer"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="">Selecione um gênero</option>
        {availableGenres.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
