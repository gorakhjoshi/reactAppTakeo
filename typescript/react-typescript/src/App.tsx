type ProjectOne = {
  frontend: string;
  backend: string;
};

type About = {
  backend: string[];
  frontend: string[];
  client: number;
  projectOne: ProjectOne;
};

type NameProp = {
  name: string;
  popularity?: number;
  isDisabled: boolean;
  status: "loading" | "error" | "success";
  favLanguages: string[];
  about: About;
  // keywords: [key: number] : string
  handleChange: () => void;
};

function NameTag({ name, popularity = 10000, isDisabled, status }: NameProp) {
  return (
    <>
      <div>{status}</div>
      <h1>{name}</h1>
      <h2>{popularity}</h2>
      <button disabled={isDisabled}>Click Me</button>
    </>
  );
}

function App() {
  return (
    <NameTag
      name="React"
      popularity={39500}
      isDisabled={true}
      status="loading"
      favLanguages={["python", "java", "go", "rust", "nodejs"]}
      about={{
        backend: ["Java", "PHP", "Python"],
        frontend: ["React", "Angular", "vuejs"],
        client: 10,
        projectOne: { frontend: "React", backend: "Java with Springboot" },
      }}
      // keywords={{ 1: "react", 2: "angular" }}
      // keywords={{ one: "react", two: "angular" }}
      // onClick = {() => {}}
      handleChange={() => {}}
    />
  );
}

export default App;
