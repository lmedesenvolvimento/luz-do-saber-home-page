import Head from "next/head";
import Header from "./Header";

const BaseLayout = (props) => (
    <main className="container">
        <Head>
            <title>Luz do Saber Portal</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" href="icon.png" />

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Itim&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="static/styles/global.css"/>
        </Head>

        <main>
            {props.children}
        </main>
    </main>
);

export default BaseLayout;