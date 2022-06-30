import React from "react";
import { Post } from "../../atoms/postsAtom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Flex } from "@chakra-ui/react";

type Props = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: () => void;
  onDeletePost: () => void;
  onSelectPost: () => void;
};

const PostItem = ({
  post,
  userIsCreator,
  userVoteValue,
  onDeletePost,
  onSelectPost,
  onVote,
}: Props) => {
  return <Flex border="1px solid">{post.title}</Flex>;
};

export default PostItem;
