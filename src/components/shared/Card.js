import { PropTypes } from "prop-types";

const Card = ({ children, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  bgColor: "white",
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Card;
