function FeedbakStats({ data }) {
  console.log(data);
  const result = data.reduce((acc, item) => acc + item.rating, 0) / data.length;

  return (
    <div className="feedback-stats">
      {data.length > 0 ? (
        <h2>Average Rating: {result}</h2>
      ) : (
        <h2>No data received</h2>
      )}
    </div>
  );
}
export default FeedbakStats;
