import { GridItem, SimpleGrid } from "@chakra-ui/react";
import GroupCard from "./GroupCard";
import useGroups from "../../hooks/useGroups";

const GroupGrid = () => {
  const { data, error } = useGroups();

  if (error) return null;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {data?.map((group) => (
        <GroupCard key={group._id} />
      ))}
    </SimpleGrid>
  );
};
export default GroupGrid;
