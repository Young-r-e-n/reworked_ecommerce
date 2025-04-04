import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { api } from "../../../services/api-client";
import { productRes } from "../../HomePage/HomePage";

const VProducts = () => {
  const [products, setProducts] = useState<productRes[]>([]);

  useEffect(() => {
    api
      .get<productRes[]>("products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Box mt={"65px"}>
      <Heading size="lg" mb={4}>
        My Products
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Image src={product.image} alt={product.name} boxSize="50px" />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.price}</Td>
              {/* <Td>{product.stock}</Td> */}
              <Td>
                <Button size="sm" colorScheme="blue" mr={2}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default VProducts;
