import { Flex, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CreatePost from "./components/CreatePost";
import ItemPost from "./components/ItemPost";

function App() {
  const posts = useSelector((state) => state.posts);

  return (
    <Flex
      background={"#efecb8"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      p={"15px"}
    >
      <CreatePost />
      <Box>
        {posts.map((post, i) => (
          <ItemPost key={i} {...post} />
        ))}
      </Box>
    </Flex>
  );
}

export default App;
