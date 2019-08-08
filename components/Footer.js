const Footer = () => (
    <footer className="footer full-width">
        <div className="row display-content social-icons">
            <ul>
                <li><a href=""><img src="/static/icone_google_reader.svg" alt="" /></a></li>
                <li><a href=""><img src="/static/icone_twitter.svg" alt="" /></a></li>
                <li><a href=""><img src="/static/icone_youtube.svg" alt="" /></a></li>
                <li><a href=""><img src="/static/icone_facebook.svg" alt="" /></a></li>
            </ul>
        </div>
        
        <div className="row display-content">
            <img src="/static/realizacao_logos.svg" alt=""/>
        </div>

        <span className="copyright"><a href="">Termos de uso e política de privacidade</a> | &#169; 2019 Luz do Saber. Todos os direitos reservados.</span>

        <style jsx>{`
            .footer {
                font-family: 'Itim', cursive;
                margin-top: 280px;
                text-align: center;
            }

            .display-content {
                display: flex;
                justify-content: center;
                padding-bottom: 20px;
            }

            ul li {
                display: inline-block;
                padding: 5px;
            }

            .social-icons {
                margin-top: 30px;
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