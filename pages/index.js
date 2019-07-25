import Link from "next/link";
import BaseLayout from '../components/Base-Layout';

export default function Index() {
    return (
        <div>
            <BaseLayout>

                <main>
                    <div className="full-width-banner">
                        <div className="container">
                            <div className="row banner-content">
                                <div className="col">
                                    <img src="/static/Ilustracao.png" alt="Desenho de crianças estudando" width="418px" height="329px" />
                                </div>

                                <div className="col">
                                    <h2>Os melhores jogos e atividades para aprender brincando!</h2>
                                    <span>Clique no botão abaixo para iniciar</span>
                                    {/* <Link>
                                        <img className="btn-play" src="/static/btn_iniciar.svg" alt="Botão iniciar" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="atividades">
                        <div className="section-head">
                            <h3>O que você vai encontrar?</h3>
                            <span>Veja o que oferecemos para auxiliar o seu aprendizado!</span>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="/static/icon-jogos.png" alt=""/>
                                <p>Jogos Educativos</p>
                                <span>Divirta-se e aprenda com jogos como quebra-cabeça, bingo e diversos outros disponíveis!</span>
                            </div>
                            <div className="col">
                                <img src="/static/icon-divertidas.png" alt=""/>
                                <p>Atividades Divertidas</p>
                                <span>Resolva atividades desafiadoras, crie gibis e jornais e teste seus conhecimentos!</span>
                            </div>
                            <div className="col">
                                <img src="/static/icon-personalizadas.png" alt=""/>
                                <p>Atividades Personalizadas</p>
                                <span>Jogue ou faça as atividades escritas e editadas pelo seu professor!</span>
                            </div>
                        </div>
                    </section>

                    <section className="news">
                        <div className="section-header">
                            <h3>Receba nossas novidades!</h3>
                            <span>Envie seu e-mail para ficar po dentro de tudo!</span>
                        </div>
                        <input type="text"/>
                        <input type="text"/>
                        <button className="btn btn-light">Enviar</button>
                    </section>
                </main>

            </BaseLayout>

            <style jsx>{`
                .full-width-banner {
                    background: url('/static/BG_bannerCenario.png');
                    width: 100%;
                    height: 588px;

                    position: absolute;
                    left: 0;
                }
                .banner-content {
                    height: 588px;

                    align-items: center;
                }
                .btn-play {
                    width: 100%;
                    height: 100%;
                }
                .atividades {
                    padding-top: 588px;
                }
                .section-head {
                    text-align: center;
                }
                .news {
                    background: url('');
                }
            `}</style>
        </div>
    );
}