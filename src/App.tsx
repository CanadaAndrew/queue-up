import BottomBar from "./components/Bars/BottomBar";
import TopBar from "./components/Bars/TopBar";
import NavigationButtonContainer from "./components/Containers/NavigationButtonContainer";
import {useState} from 'react';

interface HomeProps{
  username: string;
}

function App({username = "User"} : HomeProps ) {
  const [currentlySelected, setCurrentlySelected] = useState("Pending Polls");
  return (
    <main>
      <TopBar title = {`Welcome, ${username}`}></TopBar>
      <NavigationButtonContainer currentlySelected={currentlySelected} setCurrentlySelected={setCurrentlySelected}></NavigationButtonContainer>
      <BottomBar></BottomBar>
    </main>
  )
}

export default App
