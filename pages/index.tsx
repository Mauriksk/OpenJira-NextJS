import { Card, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
