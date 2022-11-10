import { Flex, Button, Box } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import CreatPost from "../src/components/CreatPost";
import CreatText from "./components/CreatTeaxt";
import SelectAuthor from "./components/SelectAuthor";
import UrlImage from "./components/UrlImage";

import { addPost } from "./redux/action";

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const chagePost = () => {
    dispatch(addPost());
  };

  return (
    <Flex
      background={"#efecb8"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      p={"15px"}
    >
      <CreatText />
      <SelectAuthor />
      <UrlImage />

      <Button onClick={chagePost}>Click</Button>

      <Box>
        {posts.map((post, i) => (
          <CreatPost key={i} {...post} />
        ))}
      </Box>
    </Flex>
  );
}

export default App;
