import Link from "next/link";
import BaseLayout from '../components/Base-Layout';
import Footer from "../components/Footer";

export default function Index() {
    return (
        <div>
            <BaseLayout>

                <div className="container-logos">
                    <div className="fundamental">
                        <img className="logo-rosto" src="static/logo-raios.png" alt="Logo Sol Luz do Saber" />
                        <img className="logo-rosto" src="static/logo-rosto-0.png" alt="Logo Sol Luz do Saber" />
                    </div>
                    
                    <img className="logo-eja" src="static/logo_eja.png" alt="Logo Sol Luz do Saber" />
                </div>

            </BaseLayout>

            <style jsx>{`
                .container-logos {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    height: 400px;
                    margin-top: 15%;
                }
                .fundamental {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 400px;
                }
                .logo-rosto {
                    position: absolute;
                    width: 400px;
                }
                .logo-eja {
                    width: 400px;
                }
                .section-text {
                    color: #AEAEAE;
                    font-size: 1.1em;
                }
                .banner {
                    font-family: 'Itim', cursive;
                    background: url('static/BG_bannerCenario.png');
                }
                .banner-content {
                    height: 588px;
                    align-items: center;
                }
                .banner-left-content {
                    margin-top: 150px;
                }
                .banner-right-content {
                    left: 70px;
                    top: -70px;
                }
                .banner-right-content h2 {
                    text-transform: uppercase;
                    font-weight: bold;
                    color: #25a19c;
                }
                .play-button {
                    position: relative;
                    top: 20px;
                    left: -20px;
                    cursor: pointer;
                }
                .outer-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    z-index: 2;
                    width: 100px;
                    height: 100px;
                    background: #fff;
                }
                .inner-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90px;
                    height: 90px;
                    border: 3px solid #CA8C40;
                    background: #ffb248;
                    border-radius: 50px;
                }
                .inner-card > a {
                    padding-left: 3px;
                }
                .play-card {
                    position: absolute;
                    left: 70px;
                    top: 17px;
                    width: 150px;
                    height: 60px;
                    border-radius: 20px;
                    font-size: 1.2em;
                }
                .play-card-outer {
                    width: 160px;
                    height: 70px;
                }
                .atividades {
                    position: relative;
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
                    background: url('static/bg-news.png');
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
                    width: 349px;
                }
                .search-input {
                    left: 6px;
                    top: 5px;
                }
                .btn-container {
                    width: 101px;
                }
            `}</style>
        </div>
    );
}