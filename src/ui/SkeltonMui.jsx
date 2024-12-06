import React from "react";
import { Skeleton, Typography, Card, CardContent } from "@mui/material";

const SkeletonMui = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "16px auto" }}>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Typography variant="h5">
          <Skeleton width="80%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton width="90%" />
          <Skeleton width="70%" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkeletonMui;
