import { Link } from 'react-router-dom';
import { Colors } from '../../assets/color';

const style = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        width: '95%',
        paddingTop: '20px',
        zIndex: '1',
        height: '6vh',
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

function HeaderAdmin() {
  return (
    <header style={style.header}>
        <div>
            <Link to="/">
                <img src="../src/assets/svgs/home.svg" alt="home icon" />
            </Link>
        </div>
        <div style={style.linksContainer}>
            <Link style={style.link} to="/adminProjects">Projects</Link>
            <Link style={style.link} to="/adminUsers">Users</Link>
            <Link style={style.link} to="/adminMetrics">Metrics</Link>
        </div>
    </header>
  );
}

export default HeaderAdmin;
