import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    good: props.good,
  };
}
render() {
    return (
      <figure className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        <div>
        <div className="name">{this.props.name}</div>
        <div className="status">
        <div
         className={this.state.good ? 'status-online' : 'status-offline'}
          onClick={event => {
            const newGood = !this.state.good;
            this.setState({ good: newGood });
          }}
          >
        </div>
        <var>{this.props.texte}</var>
        </div>
        </div>
      </figure>
    );
  }
}

  Contact.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    texte: PropTypes.string,
    good: PropTypes.bool,
  };

  export default Contact;