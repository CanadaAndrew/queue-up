import OnScreenNavigationButton from "../Buttons/OnScreenNavigationButton"
import {type Dispatch, type SetStateAction } from 'react'

const defaultNav: string[] = ["Pending Polls", "Upcoming", "Top Groups"]

interface NavigationButtonContainerProps{
  navButtons?: string[];
  currentlySelected: string;
  setCurrentlySelected: Dispatch<SetStateAction<string>>;
}

export default function NavigationButtonContainer( { navButtons = defaultNav, currentlySelected, setCurrentlySelected} : NavigationButtonContainerProps ){

    return (
    <div className="flex flex-1 md:gap-10 h-fit flex-row bg-background">
        {navButtons.map((button) => (<OnScreenNavigationButton key= {button} selected= {button === currentlySelected} title= {button} onClick={()=>setCurrentlySelected(button)}></OnScreenNavigationButton>))}
    </div>
    )
}

