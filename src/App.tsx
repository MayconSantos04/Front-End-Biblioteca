import Text from "./components/Text";
import Badge from "./components/Badge";
import Search from "./assets/icons/Search.svg?react";
import Icon from "./components/Icon";
import Plus from "./assets/icons/plus.svg?react"
import Pen from "./assets/icons/pen.svg?react"

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

      <Icon svg={Search} />
      <Icon svg={Plus} />
      <Icon svg={Pen} />
    </div>
  );
}
