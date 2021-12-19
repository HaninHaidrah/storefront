import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <AppBar
      position="static"
      color="primary"
      style={{ position: "fixed", left: "0", bottom: "0", width: "100%" }}
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ margin: "auto" }}
          >
            SAFE STORY© Hanin Haidrah
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
