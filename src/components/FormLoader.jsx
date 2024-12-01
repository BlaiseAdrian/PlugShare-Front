import { Spinner } from "react-bootstrap"


export function FormLoader({ text }){

  return(
    <div className= {`form-loader`} >
      <div className = {`form-loader-content py-4`} >
        <Spinner className = "me-3"  variant="secondary" />
        <span>{text}</span>
      </div>
    </div>
  )
}

