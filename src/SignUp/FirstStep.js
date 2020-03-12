import React from "react";
import classes from "../styles/FirstStep.module.css";
import btn from "../styles/Buttons.module.css";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import {
  required,
  minLengthCreator,
  passConf,
  emailValid
} from "../validator/validator";
import { Input } from "../FormsControls/Input";

let minLength = minLengthCreator(6);

let FirstStep = props => {
  const nextPage = e => {
    e.preventDefault();
    props.handleSubmit();
    if (props.handleSubmit() === undefined) {
      props.history.push("/registerSecondStep");
    }
  };

  return (
    <form className={classes.Form} onSubmit={nextPage}>
      <Field
        validate={[required, emailValid]}
        component={Input}
        className={classes.Input}
        type="email"
        name="email"
        label="email"
      />
      <Field
        validate={[required, minLength]}
        component={Input}
        className={classes.Input}
        type="password"
        name="password"
        label="password"
      />
      <Field
        validate={passConf}
        component={Input}
        className={classes.Input}
        type="password"
        name="confPassword"
        label="confirm password"
      />

      <hr />

      <div className={btn.OneBtn}>
        <input className={btn.NextButton} type="submit" value="Next" />
        <i className="fas fa-arrow-right" />
      </div>
    </form>
  );
};

FirstStep = reduxForm({
  form: "FirstStep"
})(FirstStep);

export default withRouter(FirstStep);
