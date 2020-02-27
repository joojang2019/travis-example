import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Switch } from "@material-ui/core";
import { db } from "../App";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Button, CardMedia } from "@material-ui/core";
import "../styles/AccountPage.scss";



const AccountPage = ({ allItems }) => {
  const currUser = useContext(UserContext).user;
  const history = useHistory();

  if (!Object.keys(currUser).length) history.push("/");

  const myItems = allItems
    .filter(item => item[1].email === currUser.email)
    .map(item => item[1]);

  const handleAvailability = item => {
    db.child(`items/${item.id}`).update({
      ...item,
      isAvailable: !item.isAvailable
    });
  };

  const goBack = () => history.push("/");

  return (
    <Grid container justify="center" className="page-container">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Button
          onClick={goBack}
          variant="contained"
          startIcon={<ArrowBackIcon />}
          className="back-button"
        >
          Back
        </Button>
        {myItems.map(item => (
          <Card className="product-card" key={item.id}>
            <Grid container justify="center">
              <CardMedia className="product-media" image={item.img} />
            </Grid>
            <CardContent className="card-content">
              <Grid container justify="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    className="name-text"
                  >
                    {item.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  Unavailable
                  <Switch
                    onChange={() => handleAvailability(item)}
                    checked={item.isAvailable}
                  />
                  Available
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}

      </Grid>
    </Grid>
  );
};

export default AccountPage;
