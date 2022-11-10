import { Flex, Button, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUrl } from "../redux/action";

function UrlImage() {
  const [urlLink, getUrlLink] = useState("");
  const dispatch = useDispatch();

  dispatch(addUrl(urlLink));

  return (
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
  );
}

export default UrlImage;
