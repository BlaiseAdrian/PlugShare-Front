import { Button, Form } from "react-bootstrap";
import styles from "./page-signin.module.css"
import { Link } from "react-router-dom";

export function SignIn(){
  return(
    <div className= {`${styles["page"]}`}>
      <div className= {styles["container"]}>
        <Header/>
        <h4 className="text-center fw-light mb-2">Sign In</h4>
        <SignInForm/>
        <Link className="d-block mt-3 w-100 text-center" to="/signup" >Don't have an account?</Link>
      </div>
    </div>
  )

}

function Header(){
  return(
    <header className="py-4 mb-3 text-center">
      <h1>PlugShare</h1>
      <p className="text-muted" >Community Driven Product Discovery</p>
    </header>
  )
}

function SignInForm(){
  return(
    <Form className="px-3 px-md-5">
      <Form.Group className="mb-4" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="password">
        <div className="d-flex">
          <Form.Label>Password</Form.Label>
          <a href="#" className="ms-auto" >Forgot Password</a>
        </div>

        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Button variant="secondary" className="w-100">
        Sign In
      </Button>
    </Form>
  )
}
