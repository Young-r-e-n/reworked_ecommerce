import { HStack, VStack } from "@chakra-ui/react";
import VRightSection from "./VRightSection";
import VleftSection from "./VLeftSection";

export interface VendorMenu {
  label: string;
  uri: string;
}

export const VendorMenuItems: VendorMenu[] = [
  { label: "Dashboard", uri: "/vendor/dashboard" },
  { label: "Products", uri: "/vendor/products" },
  { label: "Orders", uri: "/vendor/orders" },
  { label: "Wallet", uri: "/vendor/wallet" },
];

const VLoggedIn = () => {
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
        <VleftSection />

        {/* Right Section */}
        <VRightSection items={VendorMenuItems} />
      </HStack>
    </VStack>
  );
};

export default VLoggedIn;
