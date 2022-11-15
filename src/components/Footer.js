import React from "react";
import { Link } from "gatsby";
import { Form } from "./form";

export function Footer() {
  return (
    <div className="footer">
      <section>
        <Form />
      </section>
      <section className="footer-links">
        <div className="item">
          <Link to="/" title="Ir para home">
            Home
          </Link>
        </div>
        <div className="item" title="Acessar formulário de contato">
          <Link to="/#contato">Contato</Link>
        </div>
      </section>
      </div>
  )  
    }