import { Link } from "react-router-dom";
import "./../Pages/Css/index.css";

function Header(){
    return(
        <header className="mainHeader">
            <h1><Link to={"/"}>React blogs</Link></h1>
            <Link to={"/CreateNewBlog"}>Make own blog</Link>
        </header>
    )
}

export default Header;