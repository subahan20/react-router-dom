import { Link } from "react-router-dom"



const CustomHome = () => {
    return (
        <div>
            <Link to={"/about"}><button>About</button></Link>
            <Link to={"/register"}><button>Register</button></Link>
            <Link to={"/login"}><button>Login</button></Link>
            <h1>This is a home page</h1>
        </div>
    )
}
export default CustomHome