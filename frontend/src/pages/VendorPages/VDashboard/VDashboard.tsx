import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

type SalesData = {
  name: string;
  sales: number;
};

type CategoryData = {
  name: string;
  value: number;
};

type StatCardProps = {
  label: string;
  value: string | number;
};

// Sample data (replace with actual API data from Prisma MongoDB)
const monthlySales: SalesData[] = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 700 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 1000 },
  { name: "May", sales: 800 },
];

const categoryDistribution: CategoryData[] = [
  { name: "Electronics", value: 300 },
  { name: "Fashion", value: 200 },
  { name: "Home", value: 100 },
];

const COLORS = ["#3182ce", "#63b3ed", "#90cdf4"];

const VDashboard: React.FC = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const [selectedMonth, setSelectedMonth] = useState<string>("May");

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <Box p={5}>
      <Heading mb={6}>Vendor Dashboard</Heading>

      {/* Filters */}
      <Flex justify="flex-end" mb={4}>
        <Select w="200px" value={selectedMonth} onChange={handleMonthChange}>
          {monthlySales.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </Select>
      </Flex>

      {/* Summary Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <StatCard label="Total Orders" value="1,245" />
        <StatCard label="Revenue" value="$52,400" />
        <StatCard label="Products Listed" value="68" />
      </SimpleGrid>

      {/* Sales Chart */}
      <Box bg={cardBg} p={5} borderRadius="2xl" shadow="md" mb={8}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Monthly Sales
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3182ce"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Pie Chart */}
      <Box bg={cardBg} p={5} borderRadius="2xl" shadow="md" mb={8}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Category Distribution
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {categoryDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Recent Orders Table */}
      <Box bg={cardBg} p={5} borderRadius="2xl" shadow="md">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Recent Orders
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer</Th>
              <Th>Status</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#1001</Td>
              <Td>John Doe</Td>
              <Td>Delivered</Td>
              <Td isNumeric>$250</Td>
            </Tr>
            <Tr>
              <Td>#1002</Td>
              <Td>Jane Smith</Td>
              <Td>Pending</Td>
              <Td isNumeric>$180</Td>
            </Tr>
            <Tr>
              <Td>#1003</Td>
              <Td>Mike Johnson</Td>
              <Td>Shipped</Td>
              <Td isNumeric>$320</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box p={5} shadow="md" borderRadius="2xl" bg={bg}>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
};

export default VDashboard;
