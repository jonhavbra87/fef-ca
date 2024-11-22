import Nav from "../Nav";
import Logo from "../../assets/logo.png"

function Header() {
    return (
    <header className="bg-red-500 w-full flex flex-wrap fixed top-0 justify-around align-middle font-bold h-16">
        
        {/* Logo */}
        <img src={Logo} alt="Noroff logo" className="w-20 h-full" />

        <Nav />
    </header>
    )
}

export default Header