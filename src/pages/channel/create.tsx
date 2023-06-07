import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/Style.module.css";
import { useState } from "react";

export default function CreateChannelAndAddUser() {
  const [nameChannel, setNameChannel] = useState("");
  const [user, setUser] = useState("");
  const [listUser, setListUser] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return "hello";
  };

  return (
    <Container className="d-flex justify-content-center p-4">
      <div
        className={`${style.container_form} d-flex align-items-center justify-content-center $purple-400`}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Channel Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Channel name"
              onChange={(e) => {
                setNameChannel(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              add some user for your channel.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Add Users</Form.Label>
            <Form.Control
              type="text"
              placeholder="add user"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Container>
  );
}
