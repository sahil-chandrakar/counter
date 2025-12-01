import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <Box
      sx={{
        ...flexCenter,
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)",

        color: "#1a1a1a",
      }}
    >
      <Box
        sx={{
          ...flexCenter,
          flexDirection: "column",
          gap: "24px",
          padding: "30px",
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",

          width: "320px", 
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            ...flexCenter,
            gap: "20px",
          }}
        >

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3B82F6",
              "&:hover": { backgroundColor: "#2563EB" },
            }}
            onClick={() => setCount((count) => count - 1)}
          >
            –
          </Button>

          <Typography sx={{ fontSize: "32px", fontWeight: "600" }}>
            {count}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EF4444",
              "&:hover": { backgroundColor: "#DC2626" },
            }}
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </Button>
        </Box>

        <Button
          variant="outlined"
          sx={{
            width: "140px",
            borderColor: "#6B7280",
            color: "#374151",
            "&:hover": {
              borderColor: "#374151",
              backgroundColor: "rgba(0,0,0,0.05)",
            },
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default App;

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
