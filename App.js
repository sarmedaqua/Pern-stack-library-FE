import React, { Fragment } from "react";


import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import './App.css';
import { Switch, Route, Link, renderMatches } from "react-router-dom";

import Liststudents from "./components/Liststudents";
import List_books from "./components/List_books";

function App() {
  return (
    <Fragment>
      <AppBar position="static">
  <Toolbar>
    
    <Typography>
      Students
      <Liststudents/>
    </Typography>
    <Typography>
      Books
      <List_books/>
    </Typography>
  </Toolbar>
 
</AppBar>
    </Fragment>
  );

}

export default App;
