import React from "react"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';



const SignInForm = () => {
    // const [user, setMusicianName] = useState("")
    // const [instrument_playing, setInstrument] = useState("")


    return (

        <div>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    <h1>Duet User Login</h1>
                    <p>
                       Welcome
    </p>
                </Container>
            </Jumbotron>

            <Form className="UserForm" action="/loginuser" method="POST">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Confirm User Password</Form.Label>
                    <Form.Control type="password" placeholder="re-enter password" />
                </Form.Group>

                <Button href="/Dashboard" className="UserBtn" variant="primary" type="submit">
                    User Sign-in
  </Button>
                <br></br>
                <br></br>
                <Button href="/newuser" className="UserBtn" variant="primary" type="submit">
                  No Account? Register Now
  </Button>
            </Form>

        </div>
    )
}





export default SignInForm;