import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router";

const LoadingText = styled(Typography)`
  text-align: center;
  margin-top: 20px;
`;
const PostCard = ({ posts, loading }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const renderPost = (post) => {
    const { id, title } = post;

    const handleClick = () => {
      navigate(`post/${id}`);
    };

    return (
      <Card
        key={id}
        onClick={handleClick}
        sx={{
          margin: 2,
          cursor: "pointer",
          marginTop: 2,
          marginBottom: 2,
          borderRadius: 3,
          paddingRight: 2,
          backgroundColor: theme.palette.background.new,
          border: `1px solid ${theme.palette.background.divider}`,
        }}
        elevation={0}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
            <CardContent sx={{ flex: "1 0 auto", padding: 0 }}>
              <Chip
                label={
                  post?.yoast_head_json?.schema?.["@graph"][0]
                    ?.articleSection[0] || "Lawctopus"
                }
                sx={{
                    flexWrap:"wrap",
                    maxWidth:"80%",
                    minHeight:"40px",
                    height:"fit-content",
                    '& .MuiChip-label': { overflowWrap: 'break-word', whiteSpace: 'normal', textOverflow: 'clip' },
                    [theme.breakpoints.up('xs')]: {
                      maxWidth: "120px", // Change max width for small screens and up
                    },
                    [theme.breakpoints.up('sm')]: {
                      // Change max width for small screens and up
                      maxWidth: "400px",
                    },
                    [theme.breakpoints.up('md')]: {
                      maxWidth: "400px", // Change max width for medium screens and up
                    },
                }}
                style={{
                  backgroundColor: "#FFCF8526",
                  color: "#FFAE31",
                  borderRadius: 9,
                  fontSize: "0.7rem",
                   flexWrap:"wrap"
                }}
              />
              <Typography
                variant="subtitle1"
                fontSize={"18px"}
                component="div"
                color={theme.palette.primary.text}
                sx={{ marginTop: 1.5 }}
              >
                {title?.rendered || "Test Title"}
              </Typography>
              {post?.post_deadline[0] && (
                <Chip
                  label={`Deadline: ${deadlineFormatTimestamp(
                    post?.post_deadline[0]
                  )}`}
                  variant="outlined"
                  style={{
                    borderColor: "rgba(223, 144, 23, 0.2)",
                    color: "#FFAE31",
                    borderRadius: 4,
                    padding: "10px px",
                    fontWeight: "700",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                />
              )}
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: "20vw",
              height: "20vw",
              maxHeight: 130,
              maxWidth: 130,
              borderRadius: 3,
              backgroundColor: "#000",
              objectFit: "contain",
              marginTop: "16px",
              marginBottom: "16px",
            }}
            image={
              "https://www.lawctopus.com/wp-content/uploads/2022/01/Lawctopus-logo-footer.svg"
            }
          />
        </Box>
        <Typography
          variant="subtitle1"
          fontSize={"12px"}
          fontWeight={400}
          component="div"
          color="rgb(154, 152, 152)"
          sx={{ padding: 2, paddingTop: 0 }}
        >
          By {post?.author_name} | {formatDate(post?.date)}
        </Typography>
      </Card>
    );
  };

  return (
    <Box sx={{ maxWidth: "900px", marginBottom: "50px" }}>
      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        posts?.map((post) => renderPost(post))
      )}
    </Box>
  );
};
function deadlineFormatTimestamp(timestamp) {
  // Create a new Date object by multiplying the timestamp by 1000 (to convert from seconds to milliseconds)
  var date = new Date(timestamp * 1000);

  // Define an array of month abbreviations
  var monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the month and year components of the date
  var month = monthAbbreviations[date.getMonth()];

  var day = date.getDate();
  // Return the formatted date
  return `${day} ${month}`;
}
function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
export default PostCard;
