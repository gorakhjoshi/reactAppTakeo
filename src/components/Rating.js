import { useState } from "react";
function Rating() {
  const [rating, setRating] = useState("");

  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="first"
            name="rating"
            value="1"
            // checked
            onChange={() => console.log("Checking 1")}
          />
          <label htmlFor="first">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="2"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">2</label>
        </li>

        <li>
          <input
            type="radio"
            id="third"
            name="rating"
            value="3"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="third">3</label>
        </li>

        <li>
          <input
            type="radio"
            id="fourth"
            name="rating"
            value="4"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="fourth">5</label>
        </li>

        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="6"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">6</label>
        </li>

        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="7"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">7</label>
        </li>

        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="8"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">8</label>
        </li>

        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="9"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">9</label>
        </li>

        <li>
          <input
            type="radio"
            id="second"
            name="rating"
            value="9"
            // checked
            onChange={() => console.log("Checking 2")}
          />
          <label htmlFor="second">9</label>
        </li>
      </ul>
    </div>
  );
}
export default Rating;
