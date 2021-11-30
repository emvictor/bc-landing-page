import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#000000",
    500: "#E5E5E5",
    600: "#E4E4E4",
    900: "#FFFFFF",
  },
  font: {
    100: "#000000",
    600: "#656565",
    900: "#FFFFFF",
  },
};

const fonts = { body: "Roboto", title: "Poppins" };

export const theme = extendTheme({ colors, fonts });
