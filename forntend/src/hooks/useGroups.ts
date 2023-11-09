import { Group } from "../pages/home/services/homeService";
import useData from "./useData";

const useGroups = () => useData<Group>("/groups");

export default useGroups;
