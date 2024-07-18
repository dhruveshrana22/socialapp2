// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Screen/Home/Home";
import BottomNavigationbar from "./app/Component/BottomNavigation.js/BottomNavigation";
import { Grid } from "@mui/material";
import { BaseColor } from "./app/util/them";

function App() {
  return (
    <>
      {/* <Grid style={{zIndex:1, backgroundColor:'red'}}> 
        <BottomNavigationbar />
      </Grid> */}
      <Grid
        container
        style={{ backgroundColor: BaseColor.Primary, }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Grid>
    </>
  );
}

export default App;
