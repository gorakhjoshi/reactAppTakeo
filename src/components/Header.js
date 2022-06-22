import PropTypes from "prop-types";
import "./Header.css";

function Header({ textColor, bgColor, text }) {
  const headerStyles = { color: textColor };

  return (
    <header style={headerStyles}>
      <div>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  bgColor: "white",
  textColor: "#ff6a87",
};

Header.propTypes = {
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
