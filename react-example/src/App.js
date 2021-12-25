import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome react</h1>
      <Button text={"test"}/>
    </div>
  );
}

export default App;