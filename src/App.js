import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, <span>Eric Nyakangwa!</span></h1>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        <h1>Hello, Please Click the Button to Login</h1>
        <button className="btn-login" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
