import { Button, HStack, useDisclosure } from "@chakra-ui/react";
import CategoryMenu from "../../components/CategoryMenu";
import SearchBar from "../../components/SearchBar";
import LoginModal from "./modalForms/LoginModal";
import CartButton from "../../components/CartButton";

const RightSection = () => {
  const cartCount = 2;
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  return (
    <HStack w={"80%"} gap={4}>
      {/* category menu */}
      <CategoryMenu />

      {/* search bar */}
      <SearchBar />

      {/* Auth Buttons */}
      <HStack spacing={{ base: 2, md: 4 }}>
        <Button colorScheme="blue" variant={"outline"} onClick={onLoginOpen}>
          Login
        </Button>
        <Button colorScheme="blue" variant={"outline"}>
          Signup
        </Button>
      </HStack>

      {/* login button */}
      <LoginModal isLoginOpen={isLoginOpen} onLoginClose={onLoginClose} />

      {/* cart button */}
      <CartButton cartCount={cartCount} />
    </HStack>
  );
};

export default RightSection;
