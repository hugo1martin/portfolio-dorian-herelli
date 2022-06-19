import React from "react";

import Layout from "../components/layout/layout";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    // Need backend or 3rd party to integrate email handling
    console.log(formData);
  };
  render() {
    return (
      <Layout>
        <div className="content">
          {" "}
          <form onSubmit={this.handleSubmit} className="flex column">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Nom"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <label>Message</label>
            <textarea
              placeholder="Bonjour,"
              value={this.state.message}
              onChange={this.handleMessageChange}
              rows="10"
            />
            <input
              type="submit"
              value="Envoyer"
              className="button primary align-self end"
            />
          </form>
        </div>
      </Layout>
    );
  }
}

export default Contact;
