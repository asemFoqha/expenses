import useData from "./useData";

interface Group {
  _id: "65440a21a832333dd9342047";
  title: "Florida Trip";
  __v: 0;
}

const useGroups = () => useData<Group>("/groups");

export default useGroups;
