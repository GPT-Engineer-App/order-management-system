import React from "react";
import { Box, Heading, Button, Input, VStack, HStack, Text, useToast } from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";

// Imagina que esta es la lista de pedidos simulada
const orders = [
  { id: 1, name: "Margherita", status: "preparing" },
  { id: 2, name: "Pepperoni", status: "delivered" },
  // más pedidos...
];

const Index = () => {
  const toast = useToast();

  const handleOrderSubmit = () => {
    // Funcionalidad para enviar pedido
    // En una aplicación real, aquí conectarías con Firebase

    toast({
      title: "Pedido realizado.",
      description: "Tu pizza está en camino!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4}>
      <Heading>Pizza Tracker</Heading>
      <Box>
        <Text mb={2}>Haz tu pedido</Text>
        <HStack>
          <Input placeholder="Nombre de la pizza" />
          <Button leftIcon={<FaPizzaSlice />} onClick={handleOrderSubmit}>
            Pedir Pizza
          </Button>
        </HStack>
      </Box>
      <Box>
        <Text mb={2}>Pedidos en curso</Text>
        {orders.map((order) => (
          <HStack key={order.id} justify="space-between">
            <Text>{order.name}</Text>
            <Text>{order.status}</Text>
          </HStack>
        ))}
      </Box>
    </VStack>
  );
};

export default Index;
