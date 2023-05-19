import { Form, Button, Container } from "react-bootstrap";
import style from "@/styles/Style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {register, handleSubmit, formState: { errors }} =useForm();
  const schema = yup.object().shape({
    email:yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
  })
  let Submit = (e: any) => {
    e.preventDefault();
    if (typeof localStorage !== "undefined") {
      const myValue = localStorage.getItem("user");

      if (myValue) {
        const myParsValue = JSON.parse(myValue);
        if (myParsValue.emails == email && myParsValue.passwords == password) {
          router.push("/chat");
        } else {
          alert("your password is incorect or your mail");
        }
      }
    }
  };

  const submitForm = (data:any) =>{
    console.log(data)
  }

  return (
    <>
      <Container className="d-flex justify-content-center p-4">
        <div
          className={`${style.container_form} d-flex align-items-center justify-content-center $purple-400`}
        >
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                ref={register}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name = "password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                ref={register}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={Submit}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
