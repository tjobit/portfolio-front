import React from "react";
import { Colors } from "../assets/color.js";
import { TextField, Button } from "@mui/material";

const style = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
  },
};

function ContactForm() {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubjectChange(e) {
    setSubject(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form style={style.form}>
      <div style={style.textContainer}>
        <TextField
          id="subject"
          label="Subject"
          variant="outlined"
          style={{ width: "50%" }}
          margin="normal"
          required
          value={subject}
          onChange={handleSubjectChange}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          style={{ width: "50%" }}
          margin="normal"
          multiline
          rows={4}
          required
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <Button
        style={{
          backgroundColor: Colors.button,
          color: Colors.font,
          width: "20%",
          margin: "20px 0",
        }}
        variant="contained"
        type="submit"
        href={
          "mailto:tommjobit@live.fr?subject=" + subject + "&body=" + message
        }
      >
        Send
      </Button>
    </form>
  );
}

export default ContactForm;
