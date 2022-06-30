import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageContent from "../../../components/layouts/pageContent";
import NewPostForm from "../../../components/posts/newPostForm";
import { auth } from "../../../firebase/clientApp";

const SubmitPostPage = () => {
  const [user] = useAuthState(auth);

  return (
    <PageContent>
      <>
        <Box padding="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a new Post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <></>
    </PageContent>
  );
};

export default SubmitPostPage;
