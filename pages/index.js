import Link from "next/link";
import BaseLayout from '../components/Base-Layout';

export default function Index() {
    return (
        <div>
            <BaseLayout>

                <main>
                    <section className="banner full-width">
                        <div className="container">
                            <div className="row banner-content">
                                <div className="col img-desk">
                                    <img src="/static/Ilustracao.png" alt="Desenho de crianças estudando" width="522px" height="411px" />
                                </div>

                                <div className="col">
                                    <h2>Os melhores jogos <br />e atividades para <br />aprender brincando!</h2>
                                    
                                    <span className="section-text">Clique no botão abaixo para iniciar</span>
                                    
                                    <div>
                                        <Link>
                                            <img className="btn-play" src="/static/btn_iniciar.svg" alt="Botão iniciar" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="atividades">
                        <div className="section-head">
                            <h4 className="subtitle">O que você vai encontrar?</h4>
                            <span className="section-text">Veja o que oferecemos para auxiliar o seu aprendizado!</span>
                        </div>
                        <div className="row">
                            <div className="col atividades-content">
                                <img src="/static/icon-jogos.png" alt=""/>
                                <p>Jogos <br />Educativos</p>
                                <span className="section-text">Divirta-se e aprenda com jogos como quebra-cabeça, bingo e diversos outros disponíveis!</span>
                            </div>
                            <div className="col atividades-content">
                                <img src="/static/icon-divertidas.png" alt=""/>
                                <p>Atividades <br />Divertidas</p>
                                <span className="section-text">Resolva atividades desafiadoras, crie gibis e jornais e teste seus conhecimentos!</span>
                            </div>
                            <div className="col atividades-content">
                                <img src="/static/icon-personalizadas.png" alt=""/>
                                <p>Atividades Personalizadas</p>
                                <span className="section-text">Jogue ou faça as atividades escritas e editadas pelo seu professor!</span>
                            </div>
                        </div>
                    </section>

                    <section className="news full-width">
                        <div className="container">
                            <div className="section-head">
                                <h4 className="subtitle white-header">Receba nossas novidades!</h4>
                                <span className="newsletter-call">Envie seu e-mail para ficar por dentro de tudo!</span>
                            </div>
                            
                            <div className="row form">
                                <div className="search-bar-itens search-input-container box-shadow">
                                    <input className="search-input form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU NOME" />
                                </div>
                                <div className="search-bar-itens search-input-container search-input-container-large box-shadow">
                                    <input className="search-input search-input-large form-input-font" type="text" name="search" id="search" placeholder="ESCREVA SEU E-MAIL" />
                                </div>
                                <div className="search-bar-itens btn-container box-shadow">
                                    <button className="btn search-input btn-font-dark form-input-font">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </BaseLayout>

            <style jsx>{`
                .section-text {
                    color: #AEAEAE;
                    font-size: 1.1em;
                }
                .banner {
                    font-family: 'Itim', cursive;
                    background: url('/static/BG_bannerCenario.png');
                    height: 588px;
                }
                .banner-content {
                    height: 588px;
                    align-items: center;
                }
                .img-desk {
                    margin-top: 150px;
                }
                .atividades {
                    font-family: 'Itim', cursive;
                    padding-top: 588px;
                }
                .section-head {
                    text-align: center;
                    padding-top: 50px;
                }
                .white-header {
                    color: #fff;
                }
                .newsletter-call {
                    font-size: 1.5em;
                    color: #ffeac1;
                }
                .atividades-content {
                    text-align: center;
                    padding: 60px;
                }
                .atividades-content > img {
                    margin-bottom: 25px;
                }
                .atividades-content > p {
                    font-size: 1.6em;
                    font-weight: bold;
                    color: #555555;
                }
                .news {
                    font-family: 'Itim', cursive;
                    background: url('/static/bg-news.png');
                    height: 280px;
                }
                .form {
                    justify-content: center;
                    padding: 50px;
                }
                .search-input-container {
                    margin-left: 20px;
                }
                .search-input-container-large {
                    width: 345px;
                }
                .search-input {
                    left: 5px;
                    top: 5px;
                }
                .btn-container {
                    margin-left: 10px;
                    width: 101px;
                }
            `}</style>
        </div>
    );
}