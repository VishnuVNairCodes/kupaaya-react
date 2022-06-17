import { NavBar } from "../../components/NavBar";
import "./Login.css";

const Login = () => {
  return (
    <div className="outer-container">
      <NavBar />

      <main className="login-container">
        <h2 className="login-heading">Login</h2>
        <div className="textbox-container">
          <label>Email *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="textbox-container">
          <label>Password *</label>
          <input type="text" className="textbox" />
        </div>
        <div className="login-button-container">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary-outline">
            Login with Test Credentials
          </button>
        </div>
        <p>
          New Customer?
          <a href="/"> Sign Up</a>
        </p>
      </main>
    </div>
  );
};

export { Login };
