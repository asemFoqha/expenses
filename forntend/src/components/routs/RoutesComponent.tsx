import { Grid, GridItem } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { AuthContext } from "../../state/authContext";
import Navbar from "../navbar/Navbar";

interface Props {}

const RoutesComponent: FC<Props> = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      {/* provide the user when they login */}
          <Navbar />
        <Routes>
          {/* {auth?.currentUser !== null ? (
          <Route path="siginup" element={<SiginUp />} />
        ) : null}
        <Route path="siginup" element={<SiginUp />} /> */}
          <Route path="" element={<Home />} />
        </Routes>
    </>
  );
};
export default RoutesComponent;
