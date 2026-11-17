import { DiscordIcon } from "../Icons";

interface DiscordButtonProps{
    onClick?: ()=> void;
}

export default function DiscordButton({ onClick } : DiscordButtonProps){
    return (
        <button type="button" onClick={onClick} className = "button button-oauth"><DiscordIcon></DiscordIcon><span className = "text-body text-button-text">Sign in with Discord</span></button>
    )
}

