import { Form, Button, Container } from "react-bootstrap";
import style from "@/styles/Style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { createUsers } from "@/lib/api/user";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();
  const schema = yup.object().shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    bio: yup.string().required(),
    password: yup.string().min(6).max(15).required(),
    passwordConfirmed: yup.string().min(6).max(15).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = () => {
    createUsers({
      email,
      password,
      name,
      bio,
    });

    if (passwordConfirmed === password) {
      const data = JSON.stringify({
        email,
        password,
      });
      localStorage.setItem("user", data);
      router.push("/chat");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center p-2">
        <div
          className={`${style.container_form} d-flex align-items-center justify-content-center `}
        >
          <Form onSubmit={handleSubmit(submitForm)}>
            <div className="d-flex">
              <Form.Group className="mb-3 px-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  {...register("firstName")}
                />
              </Form.Group>

              <Form.Group className="mb-3 px-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  {...register("lastName")}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email")}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 px-5">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter bio"
                {...register("bio")}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </Form.Group>

            <div className="d-flex">
              <Form.Group className="mb-3 px-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("Password")}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 px-2">
                <Form.Label>Password confirmed</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password confirm"
                  {...register("passwordConfirmed")}
                  onChange={(e) => {
                    setPasswordConfirmed(e.target.value);
                  }}
                />
                {error && (
                  <p className="text-danger">your password is invalid</p>
                )}
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
