import { Flex } from "@chakra-ui/react";
import HamburgerMenu from "../../components/HamburgerMenu";
import Logo from "../../components/Logo";

const VendorLeftSection = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <HamburgerMenu />
      <Logo />
    </Flex>
  );
};

export default VendorLeftSection;
