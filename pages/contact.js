import BaseLayout from "../components/Base-Layout";
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <BaseLayout>
                <section className="banner full-width">
                    <div className="container">
                        <div className="row banner-content">
                            <div className="col banner-left-content">
                                <img src="/static/ilustracao_contato.png" alt="Desenho de crianças estudando"height="411px" />
                            </div>

                            <div className="col banner-right-content">
                                <div>
                                    <h2>Entre em Contato Conosco!</h2>
                                    <span className="title"><strong>SEDUC (ASTIN):</strong> (85) 3101-3963</span>
                                </div>
                                
                                <form className="form">
                                    <div className="input-group">
                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="NOME" />
                                        </div>

                                        <div className="search-bar-itens search-input-container shadow-sm">
                                            <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="TELEFONE" />
                                        </div>
                                    </div>

                                    <div className="search-bar-itens search-input-container search-input-container-xlarge  shadow-sm">
                                        <input className="search-input search-input-xlarge form-input-font" type="text" name="search" id="search" placeholder="EMAIL" />
                                    </div>

                                    <div className="search-bar-itens outer-card shadow-sm">
                                        <textarea className="inner-card" name="mensagem" id="mensagem" cols="50" rows="4" placeholder="ESCREVA SUA MENSAGEM"></textarea>
                                    </div>
                                    
                                    <div className="search-bar-itens btn-container shadow-sm">
                                        <button className="btn search-input btn-font-dark form-input-font">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </BaseLayout>

            <div className="footer">
                <Footer />
            </div>

            <style jsx>{`
                .form-control {
                    outline: 1px solid orange;
                }
                .shadow-textarea textarea.form-control::placeholder {
                    font-weight: 300;
                }
                .shadow-textarea textarea.form-control {
                    padding-left: 0.8rem;
                }

                .outer-card {
                    display: flex;
                    justify-content: center;
                    align-itens: center;
                    width: fit-content;
                    padding: 5px;
                    margin: 10px 0 20px 0;
                    border-radius: 30px;
                    background: #fff;
                }

                .inner-card {
                    border: 1px solid #DEDEDE;
                    border-radius: 30px;
                    padding: 10px 15px 10px 15px;;
                    outline: none;
                }

                .banner-right-content {
                    display: flex;
                    flex-direction: column;
                    top: 0;
                }

                .banner-right-content h2 {
                    text-transform: uppercase;
                    font-weight: bold;
                    color: #25a19c;
                }

                .search-input {
                    left: 7px;
                }

                .search-input-large {
                    width: fit-content;
                }

                .search-input-container {
                    margin-right: 10px;
                    margin-top: 20px;
                }

                .footer {
                    font-family: 'Itim', cursive;
                    margin-top: 300px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}