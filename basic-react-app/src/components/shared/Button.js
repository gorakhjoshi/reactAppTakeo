import { PropTypes } from "prop-types";

function Button({ children, version, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  isDisabled: false,
  type: "button",
};

Button.propTypes = {
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;
