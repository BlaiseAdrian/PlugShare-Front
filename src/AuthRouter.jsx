import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function AuthRouter(){
  return(
    <Router>
      <Routes>
        <Route path="/signin" element = {<SignIn/>} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/" element = {<SignIn/>} />
      </Routes>
    </Router>
  )
}

export default AuthRouter