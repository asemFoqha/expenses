import { SimpleGrid } from "@chakra-ui/react";
import { Group } from "../../pages/home/services/homeService";
import GroupCard from "./GroupCard";
import { AxiosError } from "axios";

interface Props {
  data?: Group[] | null;
  error?: AxiosError;
}

const GroupGrid = ({ data, error }: Props) => {
  if (error) return null;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {data?.map((group) => (
        <GroupCard group={group} key={group._id} />
      ))}
    </SimpleGrid>
  );
};
export default GroupGrid;
