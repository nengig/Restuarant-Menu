import React from 'react';

function Footer(props) {
  return (
    <footer>
      <p>Call Us To Book An Appointment Today: <a href={"tel:" + props.phone}>{props.phone}</a></p>
      <p>Email Us To Make Group Bookings: <a href={"mailto:" + props.email}>{props.email}</a></p>
      <p>&copy; 2024 DiVici's Restaurant</p>
    </footer>
  );
}

export default Footer;
