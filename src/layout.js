import { Link } from 'react-router-dom';

const Layout = () => {
    const layoutStyle = {
        backgroundColor: '#272b34',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    };

    const linkStyle = {
        margin: '0 15px',
        color: '#fe8033',
        textDecoration: 'none',
        fontSize: '18px',
    };

    return (
        <div style={layoutStyle}>
            <h1>Kairo's Store</h1>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
                <Link to="/store" style={linkStyle}>
                    Store
                </Link>
                <Link to="/login" style={linkStyle}>
                    Login
                </Link>
                <Link to="/about" style={linkStyle}>
                    Información
                </Link>
            </nav>
            <hr style={{ borderColor: '#fe8033' }} />
            
        </div>
    );
}

export default Layout;
