import AdminLeftSection from "./AdminLeftSection";
import AdminRightSection from "./AdminRightSection";
import { HStack, VStack } from "@chakra-ui/react";

export interface AdminMenu {
  label: string;
  uri: string;
}

export const AdminMenuItems: AdminMenu[] = [
  { label: "Dashboard", uri: "/admin/dashboard" },
  { label: "Payments", uri: "/admin/payments" },
  { label: "Marketing", uri: "/admin/marketing" },
];

const AdminLogin = () => {
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
        <AdminLeftSection />

        {/* Right Section */}
        <AdminRightSection items={AdminMenuItems} />
      </HStack>
    </VStack>
  );
};

export default AdminLogin;
