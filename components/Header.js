import Link from "next/link";

const Header = () => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <h1 className="hidden-title">LUZ DO SABER - PORTAL</h1>
            <img className="logo-rosto" src="static/logo_eja.png" alt="Logo Sol Luz do Saber" width="55%" />
            {/* <img src="static/logo-raios.png" alt="Logo Sol Luz do Saber" width="55%" /> */}
        </div>
        </div>
        <div className="col-sm-8 nav-search">
            <div className="row search-bar">
                <div className="search-bar-itens search-input-container shadow-sm">
                    <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="O QUE VOCÊ PROCURA?" />
                </div>
                <form className="search-bar-itens btn-container shadow-sm" action="https://luz-do-saber-staging.herokuapp.com/#/" target="_blank">
                    <button className="btn search-input btn-font-light form-input-font">Entrar</button>
                </form>
                <div className="search-bar-itens btn-container shadow-sm">
                    <button className="btn search-input btn-font-dark form-input-font">Instalar</button>
                </div>
            </div>
            <div className="row">
                <ul className="col-sm menu">
                        <Link href='/' passHref>
                            <li className="inicio selected">Início</li>
                        </Link>
                        {/* <Link href='https://lmedesenvolvimento.github.io/luz-do-saber-home-page/' passHref>
                            <li className="inicio selected">Início</li>
                        </Link> */}
                        <Link href="/contact" passHref>
                            <li className="software">software</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="download">Download</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="tutorial">Tutorial</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="forum">Fórum</li>
                        </Link>
                        <Link href="/contact" passHref>
                            <li className="creditos">Créditos</li>
                        </Link>
                        <Link href='/contact' passHref>
                            <li className="contato">Contato</li>
                        </Link>
                        {/* <Link href='https://lmedesenvolvimento.github.io/luz-do-saber-home-page/contact' passHref>
                            <li className="contato">Contato</li>
                        </Link> */}
                </ul>
            </div>
        </div>

        <style jsx>{`
            .main-nav {
                justify-content: space-around;
                text-transform: uppercase;
            }
            .hidden-title {
                visibility: hidden;
                position: absolute;
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
            .menu .inicio:hover { background: #FFB151; color: #fff; }
            .menu .software { border: 1px solid transparent; border-top: 3px solid #F766AE; }
            .menu .software:hover { background: #F766AE; color: #fff; }
            .menu .download { border: 1px solid transparent; border-top: 3px solid #AE67E0; }
            .menu .download:hover { background: #AE67E0; color: #fff; }
            .menu .tutorial { border: 1px solid transparent; border-top: 3px solid #757BFA; }
            .menu .tutorial:hover { background: #757BFA; color: #fff; }
            .menu .forum { border: 1px solid transparent; border-top: 3px solid #75C0FF; }
            .menu .forum:hover { background: #75C0FF; color: #fff; }
            .menu .creditos { border: 1px solid transparent; border-top: 3px solid #50C0AA; }
            .menu .creditos:hover { background: #50C0AA; color: #fff; }
            .menu .contato { border: 1px solid transparent; border-top: 3px solid #50946D; }
            .menu .contato:hover { background: #50946D; color: #fff; }

            .selected {
                background: #FFB151;
            }

            .logo-rosto {
                padding: 20px 0;
            }

            input, button {
                margin-left: 25px;
            }
        `}</style>
    </nav>
);

export default Header;