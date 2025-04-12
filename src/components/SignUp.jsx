export default function SignUp(){
    
return (
    <>
    <div class="page">
      <div class="form-box">
        <div class="button">
          <div id="btn"></div>
          <button type="button" class="toggle-btn " onclick="login()">
            Login
          </button>
          <button type="button" class="toggle-btn" onclick="signup()">
            Signup
          </button>
        </div>


        <form class="input-group" id="login">
          <input
            type="email"
            class="input-field"
            placeholder="Email"
            name="email"
            required/>
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            name="password"
            required/>
          <button id="login-btn" type="submit" class="submit-btn">Login</button>
        </form>


        <form class="input-group" id="signup">
          <input
            type="text"
            class="input-field"
            placeholder="Name"
            name="name"
            required/>

          
          <input
            type="email"
            class="input-field"
            placeholder="Email"
            name="email"
            required/>
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            name="password"
            required/>
          <input
            type="password"
            class="input-field"
            placeholder="Confirm Password"
            name="confirmPassword"
            required/>
          <button type="submit" id="signup-btn" class="submit-btn">Signup</button>
        </form>
        
      </div>
      <button onclick="window.location.href='index.html'" class="back-to-home">Back to Home</button>
    </div>
    </>
)
}