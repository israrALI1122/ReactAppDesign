
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.scss'

const Login = () => {


    const {login} = useContext(AuthContext);

    const handlelogin =()=>{
        login()
    }
    return (

        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe voluptatum deserunt harum asperiores molestias quo. Iure laborum recusandae dolorem sit sequi iusto debitis, earum enim inventore harum saepe laboriosam?</p>
                    <span>Dont you have an account?</span>
                    <Link to="/register">
                    <button>register</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>login</h1>
                    <form >
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password' />
                        <button onClick={handlelogin}>login</button>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default Login