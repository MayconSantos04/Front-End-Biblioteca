import Container from "../../components/Container";
import InputText from "../../components/Input-text";
import Search from "../../assets/icons/search.svg?react"

export default function InputSearch() {
  return (
    <div>
      <Container>
        <InputText placeholder="Buscar Livros..." icon={Search} className="w-full"/>
      </Container>
    </div>
  );
}
  