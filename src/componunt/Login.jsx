import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AllInfo, setAllInfo] = useState([]);

  const handleLoginClick = () => {
    if (email && password) {
      setAllInfo([...AllInfo, { email, password }]);
      setEmail("")
      setPassword("")
    } else {
      alert("Add valid email and password");
    }
  };

  return (
    <>
      <form>
        <div className="container">
          <input  className="input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container">
          <input className="input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button className="Submit" onClick={handleLoginClick}>
        Submit
      </button>
      <div>
        {AllInfo.map((item, index) => (
          <h2 key={index}>
            {item.email} - {item.password}
          </h2>
        ))}
      </div>
    </>
  );
}

export default Login;
