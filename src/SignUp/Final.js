import React from "react";
import { withRouter } from "react-router";
import store from "../redux/rootReducer";
import classes from "../styles/Final.module.css";
import btn from "../styles/Buttons.module.css";

let Final = props => {
  let show = () => {
    console.log(store.getState().UserData.userData);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Img}>
        <i className="fas fa-check-circle" />
      </div>
      <div className={btn.DashboardContainer}>
        <button className={btn.Dashboard} onClick={show}>
          Go to dashboard
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default withRouter(Final);
