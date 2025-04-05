import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={`"nav nav" "sidebar main" "footer footer"`}
        gridTemplateColumns="250px 1fr" // Sidebar takes 250px, main content takes remaining space
        gridTemplateRows="auto 1fr auto" // Header, content, and footer rows
        minHeight="100vh"
      >
        {/* Navbar */}
        <GridItem area={"nav"} bg="teal.500">
          <NavBar />
        </GridItem>

        {/* Sidebar */}
        <GridItem area={"sidebar"} bg="gray.100" p={4}>
          <Sidebar /> {/* Imported Sidebar Component */}
        </GridItem>

        {/* Main Content */}
        <GridItem area={"main"} p={4}>
          <Box
            p={4}
            borderRadius="md"
            zIndex="2"
            bg="white"
            boxShadow="sm"
            minHeight="calc(100vh - 160px)" // Ensure the main content takes up the remaining space
          >
            <Outlet />
          </Box>
        </GridItem>

        {/* Footer */}
        <GridItem area={"footer"} bg="white" p={4}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
