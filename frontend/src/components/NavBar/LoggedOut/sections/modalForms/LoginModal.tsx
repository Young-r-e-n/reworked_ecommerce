import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../../services/api-client";
import { USER_DATA } from "../../../../../constants/constants";

interface Props {
  isLoginOpen: boolean;
  onLoginClose: () => void;
}

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type FormData = z.infer<typeof schema>;

const LoginModal = ({ isLoginOpen, onLoginClose }: Props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const onSubmit = (data: FormData) => console.log(data);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const res = await api.post("auth/login", {
        email: data.email,
        password: data.password,
      });

      if (res.status === 200) {
        try {
          localStorage.setItem(USER_DATA, JSON.stringify(res.data));

          setSuccessMessage("Login Successful!");

          setTimeout(() => {
            onLoginClose();
            navigate(0);
          }, 1500);
        } catch (storageErr) {
          setErrorMessage("Error storing user data.");
        }
      } else {
        setErrorMessage("Invalid login credentials.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
      <ModalOverlay />
      <ModalContent w={{ base: "90vw", md: "40vw" }} maxW={"80"}>
        <ModalHeader color="blue.600" fontWeight={"extrabold"}>
          LOGIN
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {errorMessage && (
            <Alert status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert status="success">
              <AlertIcon />
              {successMessage}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor="email">email</FormLabel>
              <Input
                id="email"
                type="text"
                {...register("email")}
                placeholder="example@example.com"
              />
              {errors.email && (
                <Text color={"red.600"}>{errors.email.message}</Text>
              )}
            </FormControl>

            <FormControl mt={2}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="enter your password"
              />
              {errors.password && (
                <Text color={"red.600"}>{errors.password.message}</Text>
              )}
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              w="100%"
              isDisabled={!isValid}
              isLoading={isLoading}
              mt={4}
              mb={4}
            >
              Login
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
