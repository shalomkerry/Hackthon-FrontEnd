import { useNavigate,Link,Routes,Route } from "react-router"
import Landing from "./components/Landing"
import SignUp from "./components/SignUp"
import UserServices from "./components/User"
export default function App(){
return (
  
<Routes>
  <Route
  path="/"
  element={
    <Landing/>
  }
  >
  </Route>

  <Route
  path='/loginPage'
  element={
    <SignUp/>
  }>

  </Route>

  <Route
  path='/User'
  element={
    <UserServices/>
  }>

  </Route>
</Routes>
)
}
