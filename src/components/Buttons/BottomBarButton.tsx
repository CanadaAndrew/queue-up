import type {ReactNode} from 'react'

export interface BottomBarButtonProps{
    title: string;
    icon: ReactNode;
    navLocation: string;   //Might change into function later based on Router
    onClick?: (nav:string) => void;
}

function defaultOnClick(navigation: string):void{
    //To be developed when router is implemented
    console.log("Navigating to:", navigation)
}

export default function BottomBarButton({ title, icon, navLocation, onClick = defaultOnClick} : BottomBarButtonProps){
    return(
        <button type="button" onClick={() => onClick(navLocation)} className = "flex w-full h-full flex-col items-center justify-center gap-2 sm:gap-3 bg-card px-1 sm:px-3 py-2 cursor-pointer transition-colors hover:bg-press active:opacity-80">
            <span className = "text-caption sm:text-xl">{title}</span>
            {icon}
        </button>
    )
}