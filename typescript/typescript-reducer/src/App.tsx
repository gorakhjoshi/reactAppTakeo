import { useReducer, Dispatch } from "react";

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
  slicePerPie: 10,
  pizzaNeeded: 2,
};

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicePerPie: number;
};

type PizzaState = PizzaData & { pizzaNeeded: number };

type PizzaAction = {
  type:
    | "UPDATE_NUMBER_OF_PEOPLE"
    | "UPDATE_SLICES_PER_PERSON"
    | "UPDATE_SLICES_PER_PIE";
  payload: number;
};

function calculatePizzasNeeded({
  numberOfPeople,
  slicesPerPerson,
  slicePerPie,
}: PizzaData) {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicePerPie);
}

function addPizzasNeeded(data: PizzaData) {
  return { ...data, pizzaNeeded: calculatePizzasNeeded(data) };
}

function reducer(state: PizzaState, action: PizzaAction) {
  console.log(state);
  console.log(action);
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addPizzasNeeded({ ...state, numberOfPeople: action.payload });
  }

  if (action.type === "UPDATE_SLICES_PER_PERSON") {
    return addPizzasNeeded({ ...state, slicesPerPerson: action.payload });
  }

  if (action.type === "UPDATE_SLICES_PER_PIE") {
    return addPizzasNeeded({ ...state, slicePerPie: action.payload });
  }

  return state;
}

function Calculation({ count }: { count: number }) {
  return (
    <div className="calculation">
      <p className="caption">Number of pizzas Needed</p>
      <p className="count">{count}</p>
    </div>
  );
}

function Calculator({
  state,
  dispatch,
}: {
  state: PizzaState;
  dispatch: Dispatch<PizzaAction>;
}) {
  return (
    <div>
      <form>
        <label htmlFor="number-of-people">Number of People</label>
        <input
          type="text"
          id="number-of-people"
          value={state.numberOfPeople}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_NUMBER_OF_PEOPLE",
              payload: +e.target.value,
            });
          }}
        />
        <label htmlFor="slices-per-person">Slices Per Person</label>
        <input
          type="text"
          id="slices-per-person"
          value={state.slicesPerPerson}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_SLICES_PER_PERSON",
              payload: +e.target.value,
            });
          }}
        />
        <label htmlFor="slices-per-pie">Slices Per Pie</label>
        <input
          type="text"
          id="slices-per-pie"
          value={state.slicePerPie}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_SLICES_PER_PIE",
              payload: +e.target.value,
            });
          }}
        />
      </form>
    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Calculation count={state.pizzaNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
