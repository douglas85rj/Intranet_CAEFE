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
       
      </section>
      <style jsx>{`
        .footer {
          padding: 32px 0;
        }
        .footer-links {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item a {
          color: #000;
          font-size: 20px;
        }
        .item:not(first-child) {
          margin-left: 16px;
        }
      `}</style>

      </div>
  )  
    }