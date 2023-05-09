import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Style.module.css";
import { useRouter } from "next/router";
export default function Chat() {
  const [name, setName] = useState("");
  const route = useRouter();
  const signOut = () => {
    route.push("/login");
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (typeof user !== undefined) {
      setName(() => {
        if (user) {
          const value = JSON.parse(user);

          return value.emails;
        }
      });
    }
  }, []);
  return (
    <>
      <Container className="p-2">
        <nav className="nav bg-light d-flex justify-content-between">
          <a
            className="nav-link active d-flex justify-content-between"
            aria-current="page"
            href="#"
          >
            Welcome {name}
          </a>
          <Button variant="secondary" className="mx-2" onClick={signOut}>
            Sign out
          </Button>
          {""}
        </nav>
        <div className="chat"></div>
      </Container>
    </>
  );
}
