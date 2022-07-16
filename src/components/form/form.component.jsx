import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./form.style.scss";

function FeedbackForm() {
  const [profile, setProfile] = useState({
    name: "",
    date: "",
    feedbackTitle: "",
    msgBox: "",
    category: [],
    gender: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const changeHandle = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      if (profile.category.includes(value)) {
        const index = profile.category.indexOf(value);
        profile.category.splice(index, 1);
        return;
      }
      profile.category.push(value);
      return;
    }
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <div className="container-form">
      <h3 className="form-title">FEEDBACK FORM</h3>
      <div className="out-form">
        <form onSubmit={submitHandle}>
          <div className="each">
            <p>Name : </p>
            <input type="text" name="name" onChange={changeHandle} />
          </div>
          <div className="each">
            <p>Date : </p>
            <input type="date" name="date" onChange={changeHandle} />
          </div>
          <div className="each">
            <p>Feedback Title : </p>
            <input type="text" name="feedbackTitle" onChange={changeHandle} />
          </div>
          <div className="each">
            <p>Message Box : </p>

            <textarea rows="4" cols="50" name="msgBox" onChange={changeHandle} />
          </div>
          <div className="each duo">
            <p>Category : </p>
            <div className="sub">
              <p>c# </p>
              <input type="checkbox" name="category" value={"c#"} onChange={changeHandle} />
            </div>
            <div className="sub">
              <p>React </p>
              <input type="checkbox" name="category" value={"React"} onChange={changeHandle} />
            </div>
          </div>
          <div className="each duo">
            <p>Gender : </p>
            <div className="sub">
              <p>Male </p>
              <input type="radio" name="gender" value={"male"} onChange={changeHandle} />
            </div>
            <div className="sub">
              <p>Female </p>
              <input type="radio" name="gender" value={"female"} onChange={changeHandle} />
            </div>
          </div>
          <div className="each form-btn">
            <Button type="submit" className="btn" variant="secondary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
