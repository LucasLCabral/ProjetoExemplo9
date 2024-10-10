import {Link} from 'react-router-dom'


const Nav =()=>{
    return(
        <>
        <Link to={'/'}>Home</Link>
        <Link to={'/produto'}>Cadastrar produto</Link>
        </>
    )
}

export default Nav