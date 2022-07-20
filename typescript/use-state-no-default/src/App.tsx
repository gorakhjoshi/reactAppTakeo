import { fetchCharacter } from "./character";
import { useEffect, useState } from "react";
import { CharacterType } from "./character";
import Loading from "./Loading";

function App() {
  const [character, setCharacter] = useState<null | CharacterType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((response) => {
        setCharacter(response);
        setLoading(false);
      });
    }, 1000);
  }, []);

  // if (loading) {
  //   return <Loading />;
  // } else {
  //   return <div>{character.name}</div>;
  // }

  // if (!character) {
  //   return <Loading />;
  // } else {
  //   return <div>{character.name}</div>;
  // }

  // return !character ? <Loading /> : <div>{character.name}</div>;

  // return character && <div>{character.name}</div>;
  return <div>{character?.name}</div>;
}

export default App;
