import apiClient from "../../../services/api-client/api-client";
import Path from "./endpoints";

export interface Group {
  _id: string | null | undefined;
  title: string | null | undefined;
  __v: string | null | undefined;
}

export interface FetchResponsePost<T> {
  success: boolean;
  data: T | null;
}

class HomeService {
  getGroups = () => {
    return apiClient.get(Path.GetGroups);
  };
  addGroup = (title: string) => {
    return apiClient.post<FetchResponsePost<Group>>(Path.AddGroup, { title });
  };
}
export default new HomeService();
