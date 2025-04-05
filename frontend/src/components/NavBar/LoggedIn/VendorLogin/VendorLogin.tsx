import { HStack, VStack } from "@chakra-ui/react";
import VendorRightSection from "./VendorRightSection";
import VendorLeftSection from "./VendorLeftSection";

export interface VendorMenu {
  label: string;
  uri: string;
}

export const VendorMenuItems: VendorMenu[] = [
  { label: "Dashboard", uri: "/vendor/dashboard" },
  { label: "My Shop", uri: "/vendor/myshop" },
  { label: "Orders", uri: "/vendor/orders" },
  { label: "Wallet", uri: "/vendor/wallet" },
];

const VendorLogin = () => {
  return (
    <VStack w={"full"} spacing={0} overflow={"visible"}>
      <HStack
        w={"full"}
        h={"auto"}
        alignItems={"center"}
        p={2}
        justifyContent={"space-between"}
        position={"fixed"}
        top={0}
        zIndex={1000}
        bg={"orange"}
        boxShadow={"2xl"}
      >
        {/* Left Section */}
        <VendorLeftSection />

        {/* Right Section */}
        <VendorRightSection items={VendorMenuItems} />
      </HStack>
    </VStack>
  );
};

export default VendorLogin;
