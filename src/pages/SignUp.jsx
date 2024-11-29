import { Button, Form } from "react-bootstrap";
import styles from "./css/page-signup.module.css"
import { Link } from "react-router-dom";
import { useSubmitForm } from "../hooks/useSubmitForm";
import { FormErrorAlert } from "../components/FormErrorAlert";
import { FormLoader } from "../components/FormLoader";

const API = "https://api-plugshare.growthspringers.com"

export function SignUp(){
  return(
    <div className= {`${styles["page"]}`}>
      <div className= {styles["container"]}>
        <Header/>
        <h4 className="text-center fw-light mb-2">Sign Up</h4>
        <SignInForm/>
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

  const {
    isLoading,
    data,
    error,
    setError,
    handleSubmit
  } = useSubmitForm({url: API + "/users/signup", onSuccess: handleSuccess})

  function handleSuccess(data){
    
  }

  return(
    <>
     { isLoading && <FormLoader text = "Creating account" />}
     { error && <FormErrorAlert errorTitle = "Account Creation Failed" setError = {setError} msg = {error.message} />}
      <Form onSubmit={handleSubmit} className="px-3 px-md-5">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="confirm-password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Button type="submit" variant="secondary" className="w-100 mb-3">
          Sign Up
        </Button>
        <Link className="d-block w-100 text-center" to="/signin" >Already have an account?</Link>
      </Form>
    </>

  )
}
