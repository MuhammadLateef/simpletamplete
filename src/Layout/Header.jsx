import "../index.css";
import logo1 from "../assets/images/logo1.png"
const Header = () => {
  return (
    <div>
        <div className="container">
            <div className="">
                <img src={logo1} alt="logo" />
            </div>
            <div className="">
                <a href="#">01. history</a>
                <a href="#">02. team</a>
            </div>
        </div>
    </div>
  )
}

export default Header;