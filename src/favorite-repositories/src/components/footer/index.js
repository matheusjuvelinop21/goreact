import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Footer = ({ count }) => <p>Você tem {count} favoritos.</p>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default connect((state) => ({
  count: state.favorites.data.length,
}))(Footer);
