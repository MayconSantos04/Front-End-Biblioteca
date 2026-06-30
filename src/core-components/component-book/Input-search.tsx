import InputText from "../../components/Input-text";
import Search from "../../assets/icons/search.svg?react";

interface Search {
  searchesBy: string;
  onSearchesChange: (value: string) => void;
}

export default function InputSearch({ searchesBy, onSearchesChange }: Search) {
  return (
    <div>
      <InputText
        placeholder="Buscar Livros..."
        icon={Search}
        value={searchesBy}
        onChange={(e) => onSearchesChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
