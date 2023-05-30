import { Button, ChakraProvider } from "@chakra-ui/react";
import s from "./index.module.scss";

export const App = () => {
  return (
    <ChakraProvider>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Button colorScheme="teal" size="lg">
            Start
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
};
