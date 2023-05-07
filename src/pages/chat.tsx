import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Style.module.css";
export default function Chat() {
  return (
    <>
      <Container className="p-2">
        <nav className="nav bg-light">
          <a className="nav-link active" aria-current="page" href="#">
            Welcome
          </a>
        </nav>
        <div className="chat"></div>
      </Container>
    </>
  );
}
