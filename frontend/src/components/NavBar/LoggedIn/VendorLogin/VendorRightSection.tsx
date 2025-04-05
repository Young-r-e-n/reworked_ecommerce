import { Button, Flex, List, ListItem } from "@chakra-ui/react";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { VendorMenu } from "./VendorLogin";
import { MdAdd } from "react-icons/md";

interface props {
  items: VendorMenu[];
}

const VendorRightSection = ({ items }: props) => {
  return (
    <Flex alignItems="center" gap={2}>
      <List gap={2} display={{ base: "none", md: "flex" }}>
        {items.map((item) => (
          <ListItem key={item.label} listStyleType={"none"}>
            <Button
              as={NavLink}
              to={item.uri}
              variant="ghost"
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Add Button */}
      <Button
        colorScheme="green"
        variant={"solid"}
        rightIcon={<MdAdd size={24} />}
      >
        Add
      </Button>

      {/* Setting Button */}
      <Button variant={"ghost"} colorScheme="grey">
        <IoSettingsOutline size={25} />
      </Button>
    </Flex>
  );
};

export default VendorRightSection;
