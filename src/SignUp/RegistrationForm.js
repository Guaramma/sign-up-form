import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { Route } from "react-router-dom";
import classes from "../styles/RegistrationFrom.module.css";
import { connect } from "react-redux";
import Final from "./Final";

function mapStateToProps(state) {
  return {
    userData: state.UserData.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handlerFirst: formData =>
      dispatch({ type: "firstStep", payload: formData }),
    handlerSecond: formData =>
      dispatch({ type: "secondStep", payload: formData })
  };
}

function RegistrationForm(props) {
  const { handlerFirst, handlerSecond } = props;

  const [filler, setFiller] = useState(classes.Filler1);

  const onSubmitFirst = formData => {
    handlerFirst(formData);
    setFiller(classes.Filler2);
  };

  const onSubmitSecond = formData => {
    handlerSecond(formData);
    setFiller(classes.Filler3);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.Title}>
        Sign up
        <div className={classes.Line}>
          <div className={filler} />
        </div>
      </div>
      <Route
        exact
        path="/"
        render={routeProps => <FirstStep onSubmit={onSubmitFirst} />}
      />
      <Route
        exact
        path="/registerSecondStep"
        render={routeProps => <SecondStep onSubmit={onSubmitSecond} />}
      />
      <Route exact path="/final" render={routeProps => <Final />} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
