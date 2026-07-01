import Text from "../../components/Text";
import Button from "../../components/Button";
import Plus from "../../assets/icons/plus.svg?react";

export default function TitleLoans() {
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <div>
          <Text className="text-gray-100" variant="body-md-base">
            Empréstimo
          </Text>
        </div>
      </div>

      <div>
        <Button icon={Plus}>Emprestar</Button>
      </div>
    </div>
  );
}
