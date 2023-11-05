import { Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const GroupCard: FC<Props> = ({ title }) => {
  return (
    <Link to={""}>
      <Card>
        <CardBody>
          <Text>{title}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};
export default GroupCard;
