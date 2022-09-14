import { Button } from "react-bootstrap"


const ButtonNav =(props) =>{
    return(
        <>
            <Button variant="light" className="mx-3 align-items-center text-muted lh-lg d-flex">
                {props.children}
            </Button>
        </>
    )
}

export default ButtonNav