import Link from "next/link";

const Header = () => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
                <img className="logo-rosto" src="/static/logo-rosto-0.png" alt="Logo Sol Luz do Saber" width="55%" />
            <img src="/static/logo-raios.png" alt="Logo Sol Luz do Saber" width="55%" />
        </div>
        </div>
        <div className="col-sm-8 nav-search">
            <div className="row search-bar">
                <div className="search-bar-itens search-input-container box-shadow">
                    <input className="search-input btn-input-font" type="text" name="search" id="search" placeholder="o que você procura?" />
                </div>
                <div className="search-bar-itens btn-container box-shadow">
                    <button className="btn search-input btn-font-light btn-input-font">Entrar</button>
                </div>
                <div className="search-bar-itens btn-container box-shadow">
                    <button className="btn search-input btn-font-dark btn-input-font">Instalar</button>
                </div>
            </div>
            <div className="row">
                <ul className="col-sm menu">
                        <Link href="/" passHref>
                            <li className="inicio selected"> <a>Início</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="software"> <a>software</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="download"> <a>Download</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="tutorial"> <a>Tutorial</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="forum"> <a>Fórum</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="creditos"> <a>Créditos</a> </li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="contato"> <a>Contato</a> </li>
                        </Link>
                </ul>
            </div>
        </div>

        <style jsx>{`
            .btn-input-font {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 0.8em;
            }
            .main-nav {
                justify-content: space-around;
                text-transform: uppercase;
            }
            .nav-search {
                font-family: 'Itim', cursive;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .search-bar {
                position: absolute;
                right: 70px;
                top: 30px;
            }
            .search-bar-itens {
                position: relative;
                border-radius: 30px;
            }

            /* INPUTS */

            .search-input-container {
                width: 248px;
                height: 35px;
            }

            .search-input {
                position: absolute;
                left: -18px;
                top: 5px;
                width: 235px;
                padding: 2px 10px 2px 10px;
                border: 1px solid #DEDEDE;
                border-radius: 30px;
                outline: none;
            }

            .search-input:focus {
                box-shadow: 0 0 0 1px #75C0FF;
            }

            /* FIM INPUTS */

            /* BUTTONS */
            .btn-container {
                margin-left: 10px;
                width: 104px;
                height: 37px;
            }
            .btn {
                border: 2px solid #5A9F9B;
                width: 90px;
            }
            .btn-font-light {
                color: #25A19C;
                border: 2px solid #25A19C;
            }
            .btn-font-dark {
                color: #FFF;
                border: 2px solid #068783;
                background: #25A19C;
            }

            .box-shadow {
                -webkit-box-shadow:
                    0px 11px 6px -6px rgba(0,0,0,0.24),
                    -8px 8px 6px -9px rgba(0,0,0,0.24),
                    8px 8px 6px -9px rgba(0,0,0,0.24),
                    -6px 0px 11px -5px rgba(0,0,0,0.24);
                -moz-box-shadow:
                    0px 11px 6px -6px rgba(0,0,0,0.24),
                    -8px 8px 6px -9px rgba(0,0,0,0.24),
                    8px 8px 6px -9px rgba(0,0,0,0.24),
                    -6px 0px 11px -5px rgba(0,0,0,0.24);
                box-shadow:
                    0px 10px 6px -12px rgba(0,0,0,0.24),
                    -2px 0px 6px -5px rgba(0,0,0,0.24);
            }

            .menu {
                position: absolute;
                bottom: -17px;
            }

            .menu li {
                display: inline-block;
                padding: 10px;
                width: 100px;
                font-size: 0.8em;
                text-align: center;
                border: 1px solid #F0F0F0;
                margin-left: 1px;
            }

            .menu li:hover { cursor: pointer; }

            .menu li a { color:#333; text-decoration:none; display:block; }

            .menu .inicio { border: 1px solid transparent; border-top: 3px solid #FFB151; }
            .menu .software { border: 1px solid transparent; border-top: 3px solid #F766AE; }
            .menu .download { border: 1px solid transparent; border-top: 3px solid #AE67E0; }
            .menu .tutorial { border: 1px solid transparent; border-top: 3px solid #757BFA; }
            .menu .forum { border: 1px solid transparent; border-top: 3px solid #75C0FF; }
            .menu .creditos { border: 1px solid transparent; border-top: 3px solid #50C0AA; }
            .menu .contato { border: 1px solid transparent; border-top: 3px solid #50946D; }

            .selected {
                background: #FFB151;
            }

            .logo-rosto {
                position: absolute;
            }

            input, button {
                margin-left: 25px;
            }
        `}</style>
    </nav>
);

export default Header;