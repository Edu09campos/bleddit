import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Community } from "../../atoms/communitiesAtom";
import { Post } from "../../atoms/postsAtom";
import { auth, firestore } from "../../firebase/clientApp";
import usePosts from "../../hooks/usePosts";
import PostItem from "./postItem";

type Props = {
  communityData: Community;
};

const Posts = ({ communityData }: Props) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    postStateValue,
    setPostStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
  } = usePosts();

  const getPosts = async () => {
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log("[getPosts] ERROR >>> ", error.message);
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {postStateValue.posts.map((item) => (
        <PostItem
          key={item.id}
          onDeletePost={onDeletePost}
          onSelectPost={onSelectPost}
          onVote={onVote}
          post={item}
          userIsCreator={user?.uid === item.creatorId}
          userVoteValue={undefined}
        />
      ))}
    </>
  );
};

export default Posts;
