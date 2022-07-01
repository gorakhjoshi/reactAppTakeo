import { useCount } from "../hooks/useCount";

export default function CountDisplay() {
  const { value } = useCount();
  const [count] = value;

  return <div>{`The current count is ${count}`}</div>;
}
