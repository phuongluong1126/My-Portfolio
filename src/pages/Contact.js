import { React, useState } from "react";
import { Button } from "../components/Button";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_akttd3o",
        "template_s1ritro",
        e.target,
        "user_9g7MxE5EO93CDrQ4n6Rui"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="page contact--page">
      {/* <div className="heading medium--text">Contact</div> */}
      <div className="container hero--section">
        <div className="right--container contact--info">
          <div className="contact--item">
            <h3>My full name:</h3>
            <p>Luong Kim Phuong</p>
          </div>
          <div className="contact--item">
            <h3>Location:</h3>
            <p>District 3, Ho Chi Minh City</p>
          </div>
          <div className="contact--item">
            <h3>Email:</h3>
            <p>phuongluong1126@gmail.com</p>
          </div>
          <div className="contact--item">
            <h3>Phone:</h3>
            <p>+84 978 927 104</p>
          </div>
          <div className="contact--item">
            <h3>Follow me</h3>
            <div className="social--links">
              <a
                href="https://www.facebook.com/phuongluong1126"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/phuongluong1126/"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/phuongluong1126" target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="left--container">
          <div className="contact--form">
            <form onSubmit={sendEmail}>
              <div className="input--group">
                <input
                  className="input--control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="input--group">
                <input
                  className="input--control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="input--group">
                <input
                  className="input--control"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="input--group">
                <textarea
                  className="input--control"
                  type="text"
                  placeholder="Message"
                  name="message"
                  required
                />
              </div>
              <Button type="submit">SendMessage</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
