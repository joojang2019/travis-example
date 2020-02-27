import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo_item_share from "..//logo_item_share.png";
import { Button, Toolbar, AppBar, Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "../styles/Banner.scss";

const Banner = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Successfully signed out.");
      })
      .catch(() => {
        alert("Couldn't log out. Try again.");
      });
  };

  return (
    <AppBar position="sticky" className="nav-bar">
      <Toolbar>
        <Grid
          justify="space-between" // Add it here :)
          container
          spacing={12}
        >
          <Link to="/">
            <img src={logo_item_share} alt="" />
          </Link>
          <div>
            {location.pathname === "/login" ? (
              <div></div>
            ) : Object.entries(user).length === 0 ? (
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button
                  variant="contained"
                  color="primary"
                  className="login"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <div className="button-container">
                <Link
                  to="/account"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className="account-button"
                  >
                        My Account
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="primary"
                  className="logout"
                  onClick={handleLogOut}
                >
                      Logout
                </Button>
              </div>
            )}
          </div>
        </Grid>
      </Toolbar>
    </AppBar >
  );
};

export default Banner;
