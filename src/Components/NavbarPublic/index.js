import React, { Component } from "react";
import ButtonLink from '../ButtonLink';
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const NavbarPublic = () =>  {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <CssBaseline/>
            <Toolbar>
            <Typography variant="h4" className={classes.logo}>Greenbook</Typography>
                <ButtonLink text="SignUp" endpoint="/signup"/>
                <ButtonLink text="LogIn"  endpoint="/login"/>
            </Toolbar>
        </AppBar>
    );
};

export default NavbarPublic;