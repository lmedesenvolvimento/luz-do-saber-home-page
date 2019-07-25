import Link from "next/link";

const Header = () => (
    <nav className="d-flex row main-nav">
        <div className="col-sm">
        <div className="row logo">
            <img src="/static/Logo-raios.png" alt="Logo Sol" width="90px" height="60px" />
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
            }
            .logo {
                justify-content: center;
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