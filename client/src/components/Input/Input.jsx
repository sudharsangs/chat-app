import React from "react";

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <form className="form">
      <input
        className="input"
        placeholder="Type a message"
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
