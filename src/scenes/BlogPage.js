import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../utils/apiCalls";
import { useEffect } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
const LoadingText = styled(Typography)`
  text-align: center;
  padding: 100px;
`;

const BlogPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state.slice.data.singlePost);
  const isLoading = useSelector((state) => state.slice.loading.singlePost);
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "center",
          borderRadius: 3,
          width: { xs: "100%", sm: "80%", md: "70%" },
          backgroundColor: theme.palette.background.new,
          border: `1px solid ${theme.palette.background.divider}`,
          marginTop: "20px",
        }}
        elevation={0}
      >
        {isLoading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <Box sx={{ display: "grid", padding: 2, paddingTop: 0 }}>
            <CardHeader title={post?.title?.rendered || ""} />

            <Typography
              variant="subtitle1"
              fontSize={"12px"}
              fontWeight={400}
              component="div"
              color="rgb(154, 152, 152)"
              sx={{
                padding: 2,
                paddingTop: 0,
                display: "flex",
                flexDirection: "row",
                color: "rgb(87, 87, 87)",
                justifyContent: "flex-end",
                marginTop: 1,
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  alignItems: "flex-start", // Align items to the end in column direction
                },
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  marginRight: 2,
                  display: "flex",
                }}
              >
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 18, marginRight: 0.5 }}
                />
                {`${post?.author_name}`}{" "}
              </Box>
              <Box
                sx={{ alignItems: "center", marginRight: 2, display: "flex" }}
              >
                <DateRangeIcon
                  sx={{ fontSize: 18, marginRight: 0.5, marginLeft: 0.2 }}
                />{" "}
                {`${formatDate(post?.date)}`}
              </Box>
            </Typography>

            <CardContent sx={{ paddingTop: 0 }}>
              {parse(post?.content?.rendered || "")}
            </CardContent>
          </Box>
        )}
      </Card>
    </Box>
  );
};
function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
export default BlogPage;
