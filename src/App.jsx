import { Suspense } from "react";

import "./App.css";
import Navbar from "./assets/Componentes/Navbar";
import Status from "./assets/Componentes/Status";
import Issue from "./assets/Componentes/Issue";
import Footer from "./assets/Componentes/Footer";
import { ToastContainer } from "react-toastify";

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

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
