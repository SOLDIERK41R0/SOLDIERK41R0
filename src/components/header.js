import React from 'react'

export default function Header() {
    return (
        <div>
            <nav>
                <div className='logo'>Kairo's Store</div>
                <ul>
                    <li>Inicio</li>
                    <li>Nuetros producots</li>
                    <li>Sobre Nosotros</li>
                    <li>Contacto</li>
                </ul>
                <div className='search'>
                    <i className="fa fa-search"></i>
                    <i className='fa fa-shopping-basket'></i>
                </div>

            </nav>
        </div>
    )
}