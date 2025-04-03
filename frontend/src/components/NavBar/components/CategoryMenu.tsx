import {
  Box,
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const CategoryMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="gray"
        variant={"solid"}
        w={"50%"}
        rightIcon={<FaChevronDown />}
        // px={4}
        // py={2}
        // display={"flex"}
        // alignItems={"center"}
        // justifyContent={"space-between"}
      >
        Categories & Services
      </MenuButton>
      <MenuList p={4} minW={"400px"}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
          <GridItem>
            <Box fontWeight="bold" mb={2}>
              Products
            </Box>
            <MenuItem>Electronics</MenuItem>
            <MenuItem>Fashion & Apparel</MenuItem>
            <MenuItem>Home & Living</MenuItem>
            <MenuItem>Beauty & Personal Care</MenuItem>
            <MenuItem>Health & Wellness</MenuItem>
            <MenuItem>Sports & Outdoors</MenuItem>
            <MenuItem>Kids & Baby</MenuItem>
            <MenuItem>Automotive</MenuItem>
            <MenuItem>Books & Stationery</MenuItem>
            <MenuItem>Food & Beverages</MenuItem>
            <MenuItem>Handmade & Crafts</MenuItem>
          </GridItem>

          {/* Column 2: Services */}
          <GridItem>
            <Box fontWeight="bold" mb={2}>
              Services
            </Box>
            <MenuItem>Home Cleaning</MenuItem>
            <MenuItem>Beauty & Wellness</MenuItem>
            <MenuItem>Automotive Repairs</MenuItem>
            <MenuItem>Freelancing</MenuItem>
            <MenuItem>Event Planning</MenuItem>
            <MenuItem>Health & Fitness Coaching</MenuItem>
            <MenuItem>Educational Services</MenuItem>
          </GridItem>
        </Grid>
      </MenuList>
    </Menu>
  );
};

export default CategoryMenu;
