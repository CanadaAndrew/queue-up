export interface OnScreenNavigationButtonProps{
    selected?: boolean;
    title: string;
    onClick?: ()=> void;
}

export default function OnScreenNavigationButton({ title, selected = false, onClick}:OnScreenNavigationButtonProps){

    return(
        (<button type="button" onClick = {onClick} className={`button gap-3 px-1 md:px-4 py-.5 md:py-2 border-0 ${selected ? "bg-press" : "bg-transparent"}`}>
            <span className="text-caption text-button-text sm:text-xl font-semibold">{title}</span>
        </button>)
    )
}