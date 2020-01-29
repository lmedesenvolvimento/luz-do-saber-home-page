const Footer = () => (
    <footer className="footer full-width">
        
        <div className="row display-content">
            <img src="static/realizacao_logos.png" alt=""/>
        </div>

        {/* <span className="copyright"><a href="">Termos de uso e política de privacidade</a> | &#169; 2019 Luz do Saber. Todos os direitos reservados.</span> */}

        <style jsx>{`
            .footer {
                font-family: 'Itim', cursive;
                text-align: center;
                background: url('static/textura.png'),
                            rgba(255, 255, 255, 0.8);
                background-size: cover;
            }

            .display-content {
                display: flex;
                justify-content: center;
                padding: 40px;
            }

            .display-content > img {
                width: 70%;
            }

            ul li {
                display: inline-block;
                padding: 5px;
            }

            .copyright {
                font-size: 0.8em;
                text-transform: uppercase;
                display: inline-block;
                margin: 30px;
            }
        `}</style>
    </footer>
);

export default Footer;