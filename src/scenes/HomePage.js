import React, { useEffect } from "react";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../utils/apiCalls";

const HomePage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.slice.data.posts);
  const isLoading = useSelector((state) => state.slice.loading.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: 0,
        maxWidth: "100%",
        display: "grid",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PostCard posts={posts} loading={isLoading} />
    </Box>
  );
};

export default HomePage;
