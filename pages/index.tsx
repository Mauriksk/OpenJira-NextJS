import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />

            <EntryList />
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />

            <EntryList />
          </Card>
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />

            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
