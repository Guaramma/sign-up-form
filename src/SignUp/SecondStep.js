import React from "react";
import { Link } from "react-router-dom";
import btn from "../styles/Buttons.module.css";
import classes from "../styles/SecondStep.module.css";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { Data } from "../FormsControls/Data";
import {
  required,
  dataCheckerCreator,
  validate,
  yearChecker
} from "../validator/validator";

let dayCheck = dataCheckerCreator(1, 31);
let monthCheck = dataCheckerCreator(1, 12);
let yearCheck = dataCheckerCreator(1900, 2010);

let SecondStep = props => {
  const nextPage = e => {
    console.log(props.handleSubmit());

    e.preventDefault();
    props.handleSubmit();
    if (props.handleSubmit() === undefined) {
      props.history.push("/final");
    }
  };

  return (
    <React.Fragment>
      <form className={classes.Form} onSubmit={nextPage}>
        <div className={classes.SectionTitle}>date of birthd</div>
        <div className={classes.SectionDate}>
          <Field
            validate={[required, dayCheck]}
            component={Data}
            id="day"
            name="day"
            placeholder="DD"
          />
          <Field
            validate={[required, monthCheck]}
            component={Data}
            id="month"
            name="month"
            placeholder="MM"
          />
          <Field
            validate={[required, yearCheck, yearChecker]}
            component={Data}
            id="year"
            name="year"
            placeholder="YYYY"
          />
        </div>

        <div className={classes.SectionTitle}>gender</div>
        <div className={classes.SectionGender}>
          <Field
            component="input"
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <label htmlFor="male">MALE</label>
          <Field
            component="input"
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          <label htmlFor="female">FEMALE</label>
          <Field
            component="input"
            type="radio"
            id="unspecified"
            name="gender"
            value="unspecified"
          />
          <label htmlFor="unspecified">UNSPECIFIED</label>
        </div>
        <div className={btn.TwoBtn}>
          <Link to="/" className={btn.PrevButton}>
            back
          </Link>
          <div>
            <input type="submit" className={btn.NextButton} value="Next" />
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

SecondStep = reduxForm({
  form: "SecondStep",
  validate
})(SecondStep);

export default withRouter(SecondStep);
