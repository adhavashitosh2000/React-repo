import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AllInfo, setAllInfo] = useState([]);

  useEffect(()=>{
    
  },[])
  const handleLoginClick = () => {
    if (email && password) {
      setAllInfo([...AllInfo, { email, password }]);
      setEmail("");
      setPassword("");
    } else {
      alert("Add valid email and password");
    }
  };

  return (
    <>
      <form>
        <div className="container">
          <input
            className="input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container">
          <input
            className="input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button className="submit" onClick={handleLoginClick}>
        Submit
      </button>
      <div>
        {AllInfo.length > 0 ? AllInfo.map((item) => (
          <h2 key={item.email + item.password}>
            {item.email} - {item.password} 
          </h2>
        )): <h2> not give you eamil and password</h2>}
        
      </div>
    </>
  );
}

export default Login;
