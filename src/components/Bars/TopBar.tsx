import HamburgerButton from "../Buttons/HamburgerButton";
import type {ReactNode} from "react"

interface TopMenuProps{
    leftButton?: ReactNode;
    title: string;
    rightButton?: ReactNode;
}

export default function TopBar({ leftButton = <HamburgerButton/>, title, rightButton }:TopMenuProps){
    return(
        <header className = "flex w-full h-fit flex-row items-center justify-between gap-3 bg-card px-1.5 sm:px-3 py-3 border-b border-main-text">
            <div className = "flex min-w-11 shrink-0 items-center justify-start">
                {leftButton}
            </div>
            <div className = "flex-1 min-w-0 text-center">
                <h2 className = "text-h2 wrap-break-word">{title}</h2>
            </div>
            <div className = "flex min-w-11 shrink-0 items-center justify-end">
                {rightButton}
            </div>
        </header>
    )
}