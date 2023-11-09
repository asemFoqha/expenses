import { FC } from "react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import { HStack } from "@chakra-ui/react";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-height">
        <HStack>
          <ColorModeSwitch />
        </HStack>
      </nav>
    </>
  );
};
export default Navbar;
