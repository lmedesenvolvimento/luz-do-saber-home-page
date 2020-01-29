import Link from "next/link";
import BaseLayout from '../components/Base-Layout';
import Footer from "../components/Footer";

export default function Index() {
    return (
        <div>
            <BaseLayout>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="textura"></div>
                            <div className="fundamental row">
                                <div className="item-card col-md-4">
                                    <Link href='http://fundamental.eja.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <img className="card-image" src="static/card-fundamental.png" alt=""/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-card col-md-6">
                                    <h2>Os melhores jogos e <br /> atividades para crianças <br /> aprenderem brincando!</h2>
                                    <p>Clique no botão abaixo para saber mais</p>
                                    <button className="btn-text-card">Acessar</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="textura"></div>
                            <div className="fundamental row">
                                <div className="item-card col-md-4">
                                    <Link href='http://app.eja.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <img className="card-image" src="static/card-eja.png" alt=""/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-card col-md-6">
                                    <h2>Os melhores jogos e <br /> atividades para crianças <br /> aprenderem brincando!</h2>
                                    <p>Clique no botão abaixo para saber mais</p>
                                    <button className="btn-text-card">Acessar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </BaseLayout>

            <style jsx>{`
                .carousel-inner {
                    background: linear-gradient(to right, rgba(36, 198, 220), rgba(80, 75, 157));
                }
                .carousel-item {
                    
                    background-size: cover;
                    width: 100%;
                    height: 840px;
                    padding-top: 105px;
                }
                .textura {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.25;
                    background: url('static/textura.png');
                    background-size: cover;
                }
                .fundamental {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .item-card {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .card-image {
                    -webkit-box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                    -moz-box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                    box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                }
                .card-image:hover {
                    -webkit-box-shadow: 0px 20px 25px -2px #f97f08;
                    -moz-box-shadow: 0px 20px 25px -2px #f97f08;
                    box-shadow: 0px 20px 25px -2px #f97f08;

                    cursor: pointer;
                }
                .text-card {
                    text-align: center;
                }
                .text-card > h2 {
                    font-size: 3.5em;
                    color: #fff;
                    padding-bottom: 25px;
                }
                .text-card > p {
                    font-size: 1.5em;
                    color: #fff;
                    opacity: 0.6;
                    padding-bottom: 25px;
                }
                .btn-text-card {
                    font-size: 2em;
                    text-transform: uppercase;
                    color: #02a29d;
                    padding: 20px 100px;
                    border-radius: 50px;
                }
                
            `}</style>
        </div>
    );
}