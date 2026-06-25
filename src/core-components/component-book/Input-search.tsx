import InputText from "../../components/Input-text";
import Search from "../../assets/icons/search.svg?react";

export default function InputSearch() {
  return (
    <div>
      <InputText
        placeholder="Buscar Livros..."
        icon={Search}
        className="w-full"
      />
    </div>
  );
}
