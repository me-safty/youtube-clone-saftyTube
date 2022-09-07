import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ChannelCardRow = ({ channel, styles }) => {
  const { img, title, subNum } = channel;

  const subNun = parseInt(subNum || "100000000").toLocaleString();

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#0000",
        borderRadius: 0,
        boxShadow: "none",
        m: styles?.m || "30px",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={
          img || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"
        }
        alt={title || "img"}
        sx={{
          width: styles?.width || "90px",
          height: styles?.width || "90px",
          borderRadius: "50%",
        }}
      />
      <CardContent
        sx={{
          marginInlineStart: "10px",
          p: styles?.p,
          mt: styles?.mt,
          pb: `${styles?.p} !important`,
        }}
      >
        <Typography
          variant={styles?.variant || "h6"}
          fontWeight="bold"
          color="#fff"
          mt={0}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {title || "img"}
          <CheckCircle
            sx={{ color: "gray", fontSize: "16px", ml: "5px", mt: "1px" }}
          />
        </Typography>
        {subNum && (
          <Typography variant="body2" color="gray" mt={0.5}>
            {`${subNun} Subscriber`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ChannelCardRow;
