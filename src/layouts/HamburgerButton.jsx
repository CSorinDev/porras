import { XIcon, MenuIcon } from "lucide-react";

export default function HamburgerButton({ onClick, isMenuOpen }) {
    return (
        <button className={`md:hidden`} onClick={onClick}>
            {isMenuOpen ? <XIcon color="red" /> : <MenuIcon />}
        </button>
    )
}