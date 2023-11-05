import apiClient from "../../../services/api-client/api-client";
import Path from "./endpoints";

 class HomeService {
  getGroups = () => {
    return apiClient.get(Path.GetGroups);
  };
}
export default new HomeService()