import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yago vela</Text>
          <Text color="gray.300" fontSize="small">
            yagovela@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Yago Vela"
        src="https://github.com/yagovela.png"
      />
    </Flex>
  );
}
