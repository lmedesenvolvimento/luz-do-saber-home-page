const Footer = () => (
    <footer className="footer full-width">
        
        <div className="row display-content">
            <div>
                <img className="logo" src="static/lme.png" alt="" />
            </div>
            <div>
                <img className="logo" src="static/ufc-virtual.png" alt="" />
            </div>
            <div>
                <img className="logo" src="static/ufc.png" alt="" />
            </div>
            <div>
                <img className="logo" src="static/cientista-chefe-azul.png" alt="" />
            </div>
            <div>
                <img className="logo" src="static/governo.png" alt="" />
            </div>
            <div>
                <img className="logo" src="static/prefeitura.png" alt="" />
            </div>
            <div>
                <img className="logo funcap" src="static/funcap.png" alt="" />
            </div>
        </div>

        {/* <span className="copyright"><a href="">Termos de uso e política de privacidade</a> | &#169; 2019 Luz do Saber. Todos os direitos reservados.</span> */}

        <style jsx>{`
            .footer {
                font-family: 'Itim', cursive;
                margin-top: 20px;
                text-align: center;
            }

            .display-content {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 20px;
            }
            .display-content > div {
                margin-left: 30px;
                margin-right: 30px;
            }
            div > img {
                max-width: 100%;
                height: auto;
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

            .logo {
                width: 160px;
                height: 50px;
                padding: 15px 0;
            }

            .funcap {
                width: 120px;
            }
        `}</style>
    </footer>
);

export default Footer;