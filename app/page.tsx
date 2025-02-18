// import styles from "./page.module.css";

import Counter from "./components/Counter";
import Greet from "./components/Greet";

export default function Home() {
  return (
    <div className="container">
      <Greet />
      <Counter />
      <h1 className="text-2xl text-blue-400">
        Welcome to nextjs v15 with reactjs v19 plus tailwind v4
      </h1>
    </div>
  );
}
