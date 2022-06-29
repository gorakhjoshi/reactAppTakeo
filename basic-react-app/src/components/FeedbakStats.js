function FeedbakStats({ data }) {
  const result = data.reduce((acc, item) => acc + item.rating, 0) / data.length;

  return (
    <div className="feedback-stats">
      <h2>Average Rating: {result}</h2>
    </div>
  );
}
export default FeedbakStats;
