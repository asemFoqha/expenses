import { Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Group } from "../../pages/home/services/homeService";

interface Props {
  group: Group;
}

const GroupCard: FC<Props> = ({ group: { title } }) => {
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
