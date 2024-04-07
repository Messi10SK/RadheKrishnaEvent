import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/v1/message/send",
          {
            name,
            email,
            subject,
            message,
          },
        )
        .then((res) => {
         toast.success(res.data.message);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
  
    return (
      <>
        <div className="contact container">
          <div className="banner">
            <div className="item">
              <h4>Address</h4>
              <p>Any where, Any City, 4521</p>
            </div>
            <div className="item">
              <h4>Call Us</h4>
              <p>Call Us: +92-321-1111111</p>
            </div>
            <div className="item">
              <h4>Mail Us</h4>
              <p>RadhaKrishna@gmail.com</p>
            </div>
          </div>
          <div className="banner">
            <div className="item">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.20871134838572!2d78.56656000549141!3d25.426914829349485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397777cbe5101c8f%3A0xb316c208ba807e13!2sRadhe%20Krishna%20Events%20%7C%7C%20Best%20Event%20Planner%20in%20Jhansi%20%7C%7C%20Best%20Ballon%20Decorator%20in%20Jhansi%20%7C%7C%20Best%20Event%20Management%20in%20Jhansi!5e0!3m2!1sen!2sus!4v1712496649612!5m2!1sen!2sus" 
                style={{ border: 0, width: "100%", height: "450px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="item">
              <form onSubmit={handleSendMessage}>
                <h2>CONTACT</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  rows={10}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button  type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;    