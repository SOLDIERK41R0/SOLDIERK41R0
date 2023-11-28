import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='container'>
            <nav>
                <div className='logo'>B i e n v e n i d o </div>
                <div className='logo'>a</div>
                <div className='logo'>m i</div>
                <div className='logo'>t i e n d a</div>
                <div className='logo'>d e</div>
                <div className='logo'>A u d í f o n o s</div>
                <div className='search'>
                    <i className='fa-search'></i>
                    <i className='fa-shopping-basket'></i>
                </div>
            </nav>
            <div className='main_content'>
                <h1>Bienvenido a mi tienda de Audífonos</h1>
                <div className='item'>
                    <div className='mensaje'>
                        <h2>TIENDITA</h2>
                        <p>MI TIENDITA</p>
                        <div className='Entrar'>Unos audifonos bien genericos xd compralos te vas a arrepentir</div>
                    </div>
                    <div className='cta_group'>
                        <Link to="/store">
                            <div className='btn'>Añadir al carrito</div>
                        </Link>
                        <Link to="/store">
                            <div className='btn active'>Comprar </div>
                        </Link>

                    </div>
                </div>
                <div className='item'>
                    <div className='shadow'>
                        <img src='/image/headphone.png' alt='Audífonos'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
/*
const Welcome = () => {
    const welcomeContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        color: '#fff', // Color blanco para el texto
        background: '#272b34', // Fondo oscuro
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
    };

    const imageContainerStyle = {
        flex: 1,
        marginRight: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
    };

    const textContainerStyle = {
        flex: 1,
    };

    return (
        <div style={welcomeContainerStyle}>
            <div style={imageContainerStyle}>
                <img
                    src="/image/headphone.png" // Reemplaza con la ruta correcta de tu imagen
                    alt="Audífonos"
                    style={imageStyle}
                />
            </div>
            <div style={textContainerStyle}>
                <h2 style={{ marginBottom: '10px' }}>Bienvenido a mi tienda online</h2>
                <p>
                    Tu destino para los mejores audífonos. Explora nuestra colección de productos de alta calidad y sumérgete en la experiencia musical definitiva.
                </p>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <Welcome />
        </div>
    );
}



export default function Home() {
    return (
        <div>
            <Welcome />
        </div>
    );
}




<div class='container'>
    <nav>
        <div class="logo" > Kairo's Store </div>
        <div class='search'>
            <i class='fa-search'></i>
            <i class='fa-shopping-basket'></i>
        </div>
    </nav>
    <div class='main_content'>
        <h1>Bienvenido a mi tienda de Audofonos</h1>
        <div class='item'>
            <div class='mensaje'>
                <h2>iofhds oihsohhfosd fhosdihfsd osfhsd osdifosd ifusd oi dsufid uoidsu fo sdui sdofu sdsdfsd fdsf ssd sd fsdf s sdf sd</h2>
                <p>fkmsdgfhsdkfhsdfgsd</p>
                <div class='Entrar'>Entrar</div>
            </div>
            <div class='cta_group'>
                <div class='btn'>hgfhhtf ythbtfyt</div>
                <div class='btn active'>hgfhhtf ythbtfyt</div>
            </div>
        </div>
        <div class='item'>
            <div class='shadow'>
                <img src='/image/headphone.png' alt='Audífonos'></img>
            </div>
        </div>
    </div>

</div>
<script>
    const hf = gsap.timeline();
    hf.from('.container',{
        duration: 1.2,
        duration: 1.2,
        y: -200,
        height:0,
        opacity:0,
        ease: "power3.inout"
        })
        .from('nav',{
            delay:-0.2,
            y:-16,
            opacity: 0,
            duration:0.8,
            ease: "power3.inout"
        })
        .from('.mensaje',{
            delay:-0.2,
            y:-16,
            opacity: 0,
            duration:0.8,
            ease: "power3.inout"
        })
        .from('.item',{
            delay:-0.2,
            y:-16,
            opacity: 0,
            duration:0.8,
            ease: "power3.inout"
        })
        .from(".shadow",{
            delay: -0.4,
            x: 20,
            opacity: O,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".h1",{
            delay: -0.4,
            x: -20,
            opacity: O,
            duration: 0.8,
            ease: "power3.out"
        })
        
</script>

*/

