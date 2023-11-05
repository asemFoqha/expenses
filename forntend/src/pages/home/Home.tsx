import { Box } from "@chakra-ui/react";
import AddGroup from "../../components/home/AddGroup";
import useGroups from "../../hooks/useGroups";
import GroupGrid from "../../components/home/GroupGrid";

const Home = () => {
  const { data } = useGroups();

  return (
    <Box padding={2}>
      <AddGroup />
      <GroupGrid />
    </Box>
  );
};
export default Home;
