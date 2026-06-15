import Text from "./components/Text";
import Badge from "./components/Badge";

export default function App() {
  return (
    <div>
      <Text variant="body-text-base" className="text-blue">
        Olá mundo
      </Text>
      <Text variant="body-text-base" className="text-red-secondary">
        Olá mundo
      </Text>
      <Text className="text-green-secondary">Olá mundo</Text>
      <Text>Olá mundo</Text>
      <div className="bg-blue p-10">oi</div>

      <div>
        <Badge variant="secondary" className="border-2 border-red-border">Emprestado</Badge>
        <Badge variant="primary" className="border-2 border-green-border">Disponível</Badge>
      </div>
    </div>
  );
}
