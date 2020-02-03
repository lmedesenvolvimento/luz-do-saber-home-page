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
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="textura"></div>
                            <div className="fundamental row">
                                <div className="item-card col-md-4">
                                    <Link href='http://fundamental.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <img className="card-image" src="static/card-fundamental.png" alt=""/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-card col-md-6">
                                    <h2>Os melhores jogos e <br /> atividades para crianças <br /> aprenderem brincando!</h2>
                                    <p>Clique no botão abaixo para saber mais</p>
                                    <Link href='http://fundamental.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <button className="btn-text-card">Acessar</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="textura"></div>
                            <div className="fundamental row">
                                <div className="item-card col-md-4">
                                    <Link href='http://eja.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <img className="card-image" src="static/card-eja.png" alt=""/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-card col-md-6">
                                    <h2>Os melhores jogos e <br /> atividades para crianças <br /> aprenderem brincando!</h2>
                                    <p>Clique no botão abaixo para saber mais</p>
                                    <Link href='http://eja.luzdosaber.virtual.ufc.br/' passHref>
                                        <a target="_blank">
                                            <button className="btn-text-card">Acessar</button>
                                        </a>
                                    </Link>
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
                .carousel-control-next-icon,
                .carousel-control-prev-icon {
                    width: 60px;
                    height: 60px;
                }
                .carousel-indicators li {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
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
                    max-width: 100%;
                    margin-bottom: 20px;

                    -webkit-box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                    -moz-box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                    box-shadow: 0px 28px 34px 2px rgba(0,0,0,0.8);
                }
                .card-image:hover {
                    cursor: pointer;
                }
                .text-card {
                    text-align: center;
                }
                .text-card > h2 {
                    font-size: 3em;
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
                    position: relative;
                    font-size: 2em;
                    text-transform: uppercase;
                    color: #02a29d;
                    padding: 20px 0;
                    width: 50%;
                    border: none;
                    border-radius: 50px;
                    background: #fff;
                }
                .btn-text-card::before {
                    content: '';
                    position: absolute;
                    background: rgba(0, 0, 0, 0);
                    bottom: 4%;
                    left: 2%;
                    width: 96%;
                    height: 90%;
                    border: 5px solid #cad3dd;
                    border-radius: 40px;
                }
                .btn-text-card {
                    font-size: 1.5em;
                }

                @media (max-width: 767px) {
                    .item-card {
                        width: 400px;
                        padding: 20px;
                    }
                    .text-card > h2 {
                        display: none;
                    }
                    .btn-text-card {
                        font-size: 1.2em;
                    }
                }

                @media (min-width: 768px) and (max-width: 992px) {
                    .text-card > h2 {
                        font-size: 2em;
                    }
                }
                
            `}</style>
        </div>
    );
}