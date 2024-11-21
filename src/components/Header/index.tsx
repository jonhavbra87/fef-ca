import Nav from "../Nav";
import Logo from "../../assets/logo.png"

function Header() {
    return (
    <header className="bg-red-500 w-full flex flex-wrap sticky justify-around align-middle font-bold">
        
        {/* Logo */}
        <img src={Logo} alt="Noroff logo" className="w-20 h-full" />

        <Nav />
    </header>
    )
}

export default Header