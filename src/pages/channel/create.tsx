import { Button, Container, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/Style.module.css";
import { useState } from "react";
import { User, getAllUsers } from "@/lib/api/user";
import { createChannel } from "@/lib/api/channel";

export default function CreateChannelAndAddUser() {
  const [nameChannel, setNameChannel] = useState("");
  const [listUser, setListUser] = useState<String[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [token, setToken] = useState();
  setToken(localStorage.getItem("token"));
  const handleSubmit = (e: any) => {
    e.preventDefault();
    return "hello";
  };
  const initModal = () => {
    setIsShow(!isShow);
  };
  const sender = () => {
    if (token) {
      createChannel(token, { name: nameChannel, type: "groupe", member: 2 });
    }
    setIsShow(!isShow);
  };
  const add = () => {
    initModal();
    if (token) {
      const f = async () => {
        const users = await getAllUsers(token);
        const usersArray: String[] = users.users.map((e: User) => {
          return e.name;
        });
        setListUser(usersArray);
      };
      f();
    }
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
            <h3 onClick={add}>+</h3>
            <Modal show={isShow}>
              <Modal.Header closeButton onClick={initModal}>
                <Modal.Title>Create Channel</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <select name="type">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>

                <div className="row">
                  <div className="col-6">
                    <ul className="list-group ">
                      {listUser.map((value, id) => (
                        <li className="list-group-item p-3" key={id}>
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckbox"
                          ></input>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={initModal}>
                  Close
                </Button>
                <Button variant="dark" onClick={sender}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Container>
  );
}
