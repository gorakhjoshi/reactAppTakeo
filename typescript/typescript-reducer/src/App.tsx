import { useReducer } from "react";

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
  slicePerPie: 0,
  pizzaNeeded: 0,
};

function reducer(state: any, action: any) {
  return state;
}

function Calculation({ count }: { count: any }) {
  return (
    <div className="calculation">
      <p className="caption">Number of pizzas Needed</p>
      <p className="count">{count}</p>
    </div>
  );
}

function Calculator({ state }: { state: any }) {
  return (
    <div>
      <form>
        <label htmlFor="number-of-people">Number of People</label>
        <input type="text" id="number-of-people" value={state.numberOfPeople} />
        <label htmlFor="slices-per-person">Slices Per Person</label>
        <input
          type="text"
          id="slices-per-person"
          value={state.slicesPerPerson}
        />
        <label htmlFor="slices-per-pie">Slices Per Pie</label>
        <input type="text" id="slices-per-pie" value={state.slicePerPie} />
      </form>
    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Calculation count={state.pizzaNeeded} />
      <Calculator state={state} />
    </div>
  );
}

export default App;
