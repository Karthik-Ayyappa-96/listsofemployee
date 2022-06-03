import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AddCandidateTable from "../AddCandidateTable/AddCandidatetable";

const Home = () => {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AddCandidateTable />
          </Grid>
        </Grid>
      </Container>
    );
}
        
export default Home