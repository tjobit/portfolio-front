import { Link } from 'react-router-dom';
import { Colors } from '../assets/color.js';

const style = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        width: '95%',
        paddingTop: '20px',
    },
    link: {
        textDecoration: 'none',
        color: Colors.font,
        fontSize: '4vh',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '30%',
    },
}

function Header() {
  return (
    <header style={style.header}>
        <div>
            <Link to="/">
                <img src="./src/assets/svgs/home.svg" alt="home icon" />
            </Link>
        </div>
        <div style={style.linksContainer}>
            <Link style={style.link} to="/profile">My profile</Link>
            <Link style={style.link} to="/projects">My projects</Link>
        </div>
    </header>
  );
}

export default Header;
