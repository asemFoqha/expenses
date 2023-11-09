import { Box } from "@chakra-ui/react";
import AddGroup from "../../components/home/AddGroup";
import useGroups from "../../hooks/useGroups";
import GroupGrid from "../../components/home/GroupGrid";
import { Group } from "./services/homeService";

const Home = () => {
  const { data, error, setData } = useGroups();

  return (
    <Box padding={2}>
      <AddGroup
        onAddGroup={(group: Group) => {
          console.log(group);
          setData([group, ...(data as Group[])]);
        }}
      />
      <GroupGrid error={error} data={data} />
    </Box>
  );
};
export default Home;
