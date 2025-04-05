import { Button, Flex, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { VendorMenu } from "./VendorLogin";

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
              colorScheme="teal"
              variant="ghost"
              _hover={{ textDecoration: "underline" }}
              _activeLink={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default VendorRightSection;
