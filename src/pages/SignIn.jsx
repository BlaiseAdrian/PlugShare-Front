import { Button, Form, Spinner, Alert, Offcanvas } from "react-bootstrap";
import {useState, useEffect} from "react"
import styles from "./css/page-signin.module.css"
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useSubmitForm } from "../hooks/useSubmitForm";
import { FormLoader } from "../components/FormLoader";
import { FormErrorAlert } from "../components/FormErrorAlert";
import { useSearchParams } from "react-router-dom";


const API = "https://api-plugshare.growthspringers.com"

export function SignIn(){
  const [searchParams] = useSearchParams();
  const newAccount = searchParams.get('newAccount');

  return(
    <>
      { newAccount == 1 && <NewAccountAlert/>}
      <div className= {`${styles["page"]}`}>
        <div className= {styles["container"]}>
          <Header/>
          <h4 className="text-center fw-light mb-2">Sign In</h4>
          <SignInForm/>
          <Link className="d-block mt-3 w-100 text-center" to="/signup" >Don't have an account?</Link>
        </div>
      </div>
    </>

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
  const { setUser } = useUser()

  function handleFormSuccess(data){
    setUser(data.user_id)
    localStorage.setItem("jwt", data.access_token)
    localStorage.setItem("user", data.user_id)
  }
  const {
    isLoading,
    data,
    error,
    setError,
    handleSubmit
  } = useSubmitForm({url: API + "/users", method: "POST", onSuccess: handleFormSuccess})

  return(
    <>
      { isLoading && <FormLoader text = "Signing in" />}
      { error && <FormErrorAlert errorTitle = "Signin Failed" setError = {setError} msg = {error.message} />}

      <Form
        onSubmit = { handleSubmit }
        className="px-3 px-md-5"
      >
        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" required type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="password">
          <div className="d-flex">
            <Form.Label>Password</Form.Label>
            <a href="#" className="ms-auto" >Forgot Password</a>
          </div>

          <Form.Control name="password" required type="password" placeholder="" />
        </Form.Group>
        <Button type = "submit" variant="secondary" className="w-100">
          Sign In
        </Button>
      </Form>
    </>

  )
}

function NewAccountAlert(){
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(()=>{
    let timeoutId = setTimeout(()=>{
      handleClose()
    }, 3000)

    return ()=>clearTimeout(timeoutId)
  })

  return(
    <Offcanvas
      style = {{height: "90px"}}
      className="text-center"
      show={show}
      onHide={handleClose}
      placement="top"
      onExited={() => {
        const lingeringBackdrop = document.querySelector(".offcanvas-backdrop");
        if (lingeringBackdrop) lingeringBackdrop.remove();
      }}
    >
      <Offcanvas.Header  className="mb-0 py-0 mt-3" closeButton>
        <Offcanvas.Title className="text-success ms-auto fw-bold" >Account Created Successfully</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="mb-1 py-0" >
        Sign in to continue
      </Offcanvas.Body>
    </Offcanvas>
  )
}
