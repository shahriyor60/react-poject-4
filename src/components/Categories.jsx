import React from "react";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
export default function () {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "700" }}
      >
        Popular Categories
      </Typography>
      <Typography
        variant="h6"
        component="div"
        
        sx={{ textAlign: "center", fontWeight: "700",color:"#8d99af" }}
      >
        CHECK THEM OUT
      </Typography>
        <Container >

      <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
            <Item>xs=2</Item>
          </Grid>
      </Grid>
    </Box>
        </Container>
    </div>
  );
}
