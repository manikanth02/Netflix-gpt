import NETFLIX_LOGO from "../assets/img/NETFLIX_LOGO.png";
const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-44"  src={NETFLIX_LOGO} alt="NETFLIX LOGO"/>
        </div>
    )
}

export default Header;