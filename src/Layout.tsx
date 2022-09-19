import { Container, CssBaseline } from "@mui/material";

export const Layout = ({ children }: React.PropsWithChildren) => (
  <Container maxWidth="xl" sx={{ backgroundColor: "#333" }}>
    <CssBaseline />
    {children}
  </Container>
);
