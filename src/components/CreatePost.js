import { Flex, Button, Box, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addText, addName, addUrl, addPost } from "../redux/action";
import { useState } from "react";
import { POSTS } from "../redux/reducer";

function CreatePost() {
  const [text, getText] = useState("");
  const [name, getName] = useState("");
  const [urlLink, getUrlLink] = useState("");
  const dispatch = useDispatch();
  dispatch(addText(text));
  dispatch(addName(name));
  dispatch(addUrl(urlLink));

  const chagePost = () => {
    dispatch(addPost());
    getText("");
    getName("");
    getUrlLink("");
  };

  return (
    <Flex
      background={"#efecb8"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      p={"15px"}
    >
      <Input
        placeholder="Text...."
        w={"570px"}
        h={"70px"}
        margin={"10px"}
        background={"white"}
        value={text}
        onChange={(e) => {
          getText(e.target.value);
        }}
      ></Input>

      <form>
        <label>Authors: </label>
        <select
          value={name}
          onChange={(e) => {
            getName(e.target.value);
          }}
        >
          <option></option>
          {POSTS.map((el, i) => (
            <option key={i} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </form>
      <Input
        placeholder="URL image"
        w={"570px"}
        h={"30px"}
        margin={"10px"}
        background={"white"}
        value={urlLink}
        onChange={(e) => {
          getUrlLink(e.target.value);
        }}
      ></Input>

      <Button onClick={chagePost}>Click</Button>
    </Flex>
  );
}

export default CreatePost;
