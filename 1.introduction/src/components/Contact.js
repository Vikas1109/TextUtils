import React, { memo } from "react";

export default memo(function Contact() {
  return (
    <div className="container">
      <h3>Contact Us</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="xyz@gmail.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

            <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile
          </label>
          <input
            type="mobile"
            className="form-control"
            placeholder="+91 1234567890"
            id="mobileNumber"
            aria-describedby="mobileHelp"
          />
         
        </div>


        <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
        </div>

        
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Agree
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
});
