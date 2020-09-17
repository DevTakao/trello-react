import React, { useState } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import DisplayArea from "./components/DisplayArea";
import CardDetails from "./components/CardDetails";

export const UserLoading = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const CardView = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cardView, setCardView] = useState(false);
  return (
    <div className="App">
      <CardView.Provider value={setCardView}>
        <UserLoading.Provider value={{ isLoading, setIsLoading }}>
          <NavContainer />
          <DisplayArea />
          {cardView ? <CardDetails /> : null}
        </UserLoading.Provider>
      </CardView.Provider>
    </div>
  );
}

export default App;
