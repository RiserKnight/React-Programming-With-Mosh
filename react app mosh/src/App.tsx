import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["a", "b", "c", "d", "e"];
  const onSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Alpha" onSelectItem={onSelectItem} />
      <Alert>
        <h1>Ha Mai galat</h1>
        <p>Galat meri bate</p>
      </Alert>
    </div>
  );
}

export default App;
