import { GridItem, SimpleGrid } from "@chakra-ui/react";
import GroupCard from "./GroupCard";

const GroupGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      <GroupCard />
    </SimpleGrid>
  );
};
export default GroupGrid;
