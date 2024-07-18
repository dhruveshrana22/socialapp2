import * as React from "react";

import { Image } from "../../util/them";
import ProductCard from "../../Component/CCard/ProuctCard";
import { Box, Grid } from "@mui/material";
import { data } from "../../util/StaticData";
import BottomNavigationbar from "../../Component/BottomNavigation.js/BottomNavigation";

export default function Home() {
  return (
    <Grid>
      <Box p={2}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent={"center"}
          style={{ flexGrow: 1, marginBottom:100}}
        >
          {data.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              off={item?.off || null}
              onClick={()=>alert("item Clicked")}
              description={item.description}
              Price={item.Price}
              comboOffer={item?.Combo}
            />
          ))}
        </Grid>
      </Box>
      <Grid style={{ backgroundColor: "red" }}>
        <BottomNavigationbar />
      </Grid>
    </Grid>
  );
}
