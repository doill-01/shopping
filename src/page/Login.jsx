import React from 'react'
import {Form,Button,Container} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
	const navigate = useNavigate()
	
	const loginUser = (event) => {
		event.preventDefault(); //refresh 안함
		console.log("aa")
		setAuthenticate(true)
		navigate("/")
	}


  return (
	<Container className='container'>
		<Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
	  <div className='bootbutton'>
      <Button variant="danger" type="submit" className='bootbutton'>
        login
      </Button>
	  </div>
    </Form>
	</Container>
  )
}

export default Login