import { Suspense } from "react";

import "./App.css";
import Navbar from "./assets/Componentes/Navbar";
import Status from "./assets/Componentes/Status";
import Issue from "./assets/Componentes/Issue";

const loadTickets = () => fetch("/data.json").then((res) => res.json());

function App() {
  const ticketPromise = loadTickets();
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <span className="loading loading-dots loading-xl container mx-auto"></span>
        }
      >
        <Issue promise={ticketPromise} />
      </Suspense>
    </>
  );
}

export default App;
