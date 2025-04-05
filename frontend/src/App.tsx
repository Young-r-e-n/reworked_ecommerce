import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Grid
      templateAreas={`"nav nav" "sidebar main" "footer footer"`}
      gridTemplateColumns="250px 1fr"
      gridTemplateRows="auto 1fr auto"
      minHeight="100vh"
      overflow="hidden"
    >
      {/* Navbar */}
      <GridItem area="nav" bg="teal.500" zIndex="10" position="relative">
        <NavBar />
      </GridItem>

      {/* Sidebar */}
      <GridItem
        area="sidebar"
        bg="gray.100"
        p={4}
        overflowY="auto"
        position="relative"
        zIndex="1"
      >
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem area="main" p={4}>
        <Box
          p={4}
          borderRadius="md"
          bg="white"
          boxShadow="sm"
          minHeight="100%"
        >
          <Outlet />
        </Box>
      </GridItem>

      {/* Footer */}
      <GridItem area="footer" bg="white" p={4} zIndex="10" position="relative">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default App;
