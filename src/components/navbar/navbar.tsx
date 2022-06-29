import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import RightContent from "./rightContent/rightContent";
import SearchInput from "./searchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          src="/images/redditFace.svg"
          height="30px"
          alt="Reddit Face Logo"
        />
        <Image
          src="/images/redditText.svg"
          height="46px"
          alt="Reddit Text Logo"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      {/* <Directory/>
       */}
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
