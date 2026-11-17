import {GoogleIcon} from '../Icons'

interface GoogleButtonProps{
    onClick?: ()=> void;
}

export default function GoogleButton({ onClick }: GoogleButtonProps){
    return (
        <button type="button" onClick={onClick} className = "button button-oauth"><GoogleIcon></GoogleIcon><span className = "text-body text-button-text">Sign in with Google</span></button>
    )
}