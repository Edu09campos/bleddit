import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../modal/auth/authModal";
import AuthButtons from "./authButtons";
import { signOut, User } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import Icons from "./icons";
import UserMenu from "./userMenu";

type Props = {
  user?: User | null;
};

function RightContent({ user }: Props) {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
}

export default RightContent;
