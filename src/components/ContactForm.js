import React, { useRef, useState } from "react";

const ContactForm = () => {
  // return (
  //   <div>
  //     <p className="email">Email: boyofpopsicle@gmail.com</p>
  //     <p className="phone">Phone: 703-472-8000</p>

  //   </div>
  // );
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="contactForm" style={{width: "30%", paddingLeft: "1.5rem"}}>
      <form
        ref={formRef}
        action={`https://formsubmit.co/edhchang1@gmail.com`}
        method="POST"
      >
        <div style={{ padding: "0.5rem", width: "100%" }}>
          <div style={{ position: "relative" }}>
            <label>Your Name</label>
            <input
              placeholder={"Name"}
              onChange={handleChange}
              value={form.name}
              required
              type="text"
              id="name"
              name="name"
              style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "0.25rem",
                borderWidth: "1px",
                outlineStyle: "none",
                width: "100%",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>

        <div style={{ padding: "0.5rem", width: "100%" }}>
          <div style={{ position: "relative" }}></div>
          <label>Your Email</label>
          <input
            placeholder={"Email"}
            onChange={handleChange}
            value={form.email}
            required
            type="email"
            id="email"
            name="email"
            style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "0.25rem",
                borderWidth: "1px",
                outlineStyle: "none",
                width: "100%",
                fontSize: "1rem",
              }}
          />
        </div>

        <div style={{ padding: "0.5rem", width: "100%" }}>
          <div style={{ position: "relative" }}></div>
          <label>Your Phone</label>
          <input
            placeholder={"Phone"}
            onChange={handleChange}
            value={form.phone}
            required
            type="text"
            id="phone"
            name="phone"
            style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "0.25rem",
                borderWidth: "1px",
                outlineStyle: "none",
                width: "100%",
                fontSize: "1rem",
              }}
          />
        </div>

        <div style={{ padding: "0.5rem", width: "100%" }}>
          <div style={{ position: "relative" }}></div>
          <label>Your Messsage</label>
          <textarea
            placeholder={"Message"}
            onChange={handleChange}
            value={form.message}
            required
            type="text"
            id="message"
            name="message"
            style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "0.25rem",
                borderWidth: "1px",
                outlineStyle: "none",
                width: "100%",
                fontSize: "1rem",
              }}
          />
        </div>

        <div style={{ padding: "0.5rem", width: "100%" }}>
          <button
            type="submit"
            style={{
              display: "flex",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              borderWidth: "1px",
              
              outlineStyle: "none",
              marginLeft: "0",
              marginRight: "0",
              flexDirection: "column",
              borderRadius: "0.25rem",
              background: "#ffffff",
              fontSize: "1rem",
              
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
