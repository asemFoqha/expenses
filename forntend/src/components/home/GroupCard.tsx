import { Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
}

const GroupCard: FC<Props> = ({ title }) => {
  return (
    <Card>
      <CardBody>
        <Text>{title}</Text>
      </CardBody>
    </Card>
  );
};
export default GroupCard;
