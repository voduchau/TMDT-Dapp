import React from "react";
import { Box, Heading } from "rimble-ui";

class Header extends React.Component {
  render() {
    return (
      <Box bg="primary" p={3} justifyContent="center" flexDirection="column">
        <Box maxWidth="600px" mx="auto">
          <Heading fontSize={4} color={"white"}>App Demo - Nguyễn Minh Nhựt - Võ Đức Hậu</Heading>
        </Box>
      </Box>
    );
  }
}

export default Header;
