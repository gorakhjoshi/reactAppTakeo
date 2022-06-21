import PropTypes from "prop-types";

function Header({ textColor = "green", bgColor = "red" }) {
  return (
    <header>
      <div>
        <h2 style={{ color: textColor }}>Hello</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Header;
