import Link from "next/link";

const Header = () => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <img className="logo-rosto" src="/static/logo-rosto-0.png" alt="Desenho de crianças estudando" />
            <img src="/static/logo-raios.png" alt="Logo Sol Luz do Saber" width="193px" height="121px" />
        </div>
        </div>
        <div className="col-sm-8">
            <div className="row search-bar">
                <input type="text" name="search" id="search"/>
                <button className="btn btn-light">Entrar</button>
                <button className="btn btn-success">Instalar</button>
            </div>
            <div className="row">
                <div className="col-sm">
                    <nav>
                        <Link href="/" passHref>
                            <a>Início</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>software</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>Download</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>Tutorial</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>Fórum</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>Créditos</a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a>Contato</a>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>

        <style jsx>{`
            .main-nav {
                justify-content: space-around;
                text-transform: uppercase;
            }
            nav > a {
                padding: 5px;
            }
            .logo {
                justify-content: center;
            }
            .logo-rosto {
                position: absolute;
                width: 193px;
                height: 121px;
            }
            .search-bar {
                justify-content: center;
            }
            input, button {
                margin-left: 25px;
            }
        `}</style>
    </nav>
);

export default Header;