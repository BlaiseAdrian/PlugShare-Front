import { Spinner, Alert } from "react-bootstrap"


export function FormErrorAlert({errorTitle, msg, setError}){
  return(
    <div className = {`form-error-backdrop px-3`} >
      <Alert
        variant="danger"
        onClose = {() => setError(null)}
        dismissible
        className = {`form-error-content`}
      >
        <Alert.Heading className="mb-3"> {errorTitle} </Alert.Heading>
        <p>
          { msg }
        </p>
      </Alert>
    </div>

  )
}