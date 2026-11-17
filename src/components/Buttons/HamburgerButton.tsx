import { HamburgerMenu } from "../Icons"

interface HamburgerButtonProps{
    onClick?: () => void;
}

export default function HamburgerButton({ onClick } : HamburgerButtonProps){
    return(
        <button aria-label="Hamburger Menu" type="button" onClick={onClick} >
            <HamburgerMenu></HamburgerMenu>
        </button>
    )
}