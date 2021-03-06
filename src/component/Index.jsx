import React, { Component } from 'react';
import {Link} from 'react-router';

const styles = {
  ul: {
    listStyleType: "none",
    backgroundColor: "#f1f1f1",
    margin: 0,
    padding: 0,
  },
  li: {
    display: "inline" 
  },
  link: {
    color: "#000",
    padding: "8px 16px",
    textDecoration: "none"
  },
  active: {
    color: "blue"
  }
}

class Index extends Component {
  render() {
    return ( 
      <div>
        <h1><Link style={styles.link} to="/">App Store</Link></h1>
        <ul style={styles.ul}>
          <li style={styles.li}><Link activeStyle={styles.active} style={styles.link} to="/home">Home</Link></li>
          <li style={styles.li}><Link activeStyle={styles.active} style={styles.link} to="/contact">Contact</Link></li>
          <li style={styles.li}><Link activeStyle={styles.active} style={styles.link} to="/counter">Counter App</Link></li>
          <li style={styles.li}><Link activeStyle={styles.active} style={styles.link} to="/todo">Todo App</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Index;