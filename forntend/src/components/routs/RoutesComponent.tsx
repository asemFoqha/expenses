import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import SiginUp from "../../pages/login/SiginUp";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../../state/authContext";
import Home from "../../pages/home/Home";

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
