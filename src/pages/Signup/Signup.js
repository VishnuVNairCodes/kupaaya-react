import { NavBar } from "../../components/NavBar";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="outer-container">
      <NavBar />
      <main className="signup-container">
        <h2 className="signup-heading">Signup</h2>
        <div className="textbox-container">
          <label>First Name *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="textbox-container">
          <label>Last Name *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="textbox-container">
          <label>Email *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="textbox-container">
          <label>Password *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="textbox-container">
          <label>Confirm Password *</label>
          <input type="text" className="textbox" />
        </div>
        <button className="btn btn-primary">Signup</button>
      </main>
    </div>
  );
};

export { Signup };
