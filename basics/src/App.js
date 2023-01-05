import "./App.css";
// import Counter from "./components/Counter";
// import Home from "./components/Home";
// import Game from "./components/Game";
// import Function from "./components/Function";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import NameList from "./components/NameList";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Rohit" />
      <div classNameName="App">
        <h2>this is app</h2>
        {/* <Home />
        <Counter />
        <Game name="Rohit" />
        <Function />
        <EventBind />
        <ParentComponent />
        <NameList /> */}
        {/* <Form /> */}
        <TextForm />
      </div>
    </>
  );
}

export default App;
