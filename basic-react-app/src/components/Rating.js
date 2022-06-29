import { useState } from "react";
function Rating({ selectFunction }) {
  const [selected, setSelected] = useState("");

  function handleChange(e) {
    setSelected(+e.target.value);
    selectFunction(+e.target.value);
  }
  // function clearRating() {
  //   setSelected("");
  // }

  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="first"
            name="rating"
            value="1"
            checked={selected === 1}
            onChange={handleChange}
          />
          <label htmlFor="first">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="2"
            checked={selected === 2}
            onChange={handleChange}
          />
          <label htmlFor="second">2</label>
        </li>

        <li>
          <input
            type="radio"
            id="third"
            name="rating"
            value="3"
            checked={selected === 3}
            onChange={handleChange}
          />
          <label htmlFor="third">3</label>
        </li>

        <li>
          <input
            type="radio"
            id="fourth"
            name="rating"
            value="4"
            checked={selected === 4}
            onChange={handleChange}
          />
          <label htmlFor="fourth">4</label>
        </li>

        <li>
          <input
            type="radio"
            id="fifth"
            name="rating"
            value="5"
            checked={selected === 5}
            onChange={handleChange}
          />
          <label htmlFor="fifth">5</label>
        </li>

        <li>
          <input
            type="radio"
            id="sixth"
            name="rating"
            value="6"
            checked={selected === 6}
            onChange={handleChange}
          />
          <label htmlFor="sixth">6</label>
        </li>

        <li>
          <input
            type="radio"
            id="seven"
            name="rating"
            value="7"
            checked={selected === 7}
            onChange={handleChange}
          />
          <label htmlFor="seven">7</label>
        </li>

        <li>
          <input
            type="radio"
            id="eight"
            name="rating"
            value="8"
            checked={selected === 8}
            onChange={handleChange}
          />
          <label htmlFor="eight">8</label>
        </li>

        <li>
          <input
            type="radio"
            id="nine"
            name="rating"
            value="9"
            checked={selected === 9}
            onChange={handleChange}
          />
          <label htmlFor="nine">9</label>
        </li>

        <li>
          <input
            type="radio"
            id="ten"
            name="rating"
            value="10"
            checked={selected === 10}
            onChange={handleChange}
          />
          <label htmlFor="ten">10</label>
        </li>
      </ul>
    </div>
  );
}
export default Rating;
