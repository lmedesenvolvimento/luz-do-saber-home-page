import Link from "next/link";

const linkStyle = {
    marginRight: "15px",
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/contact">
            <a style={linkStyle}>Contato</a>
        </Link>
    </div>
);

export default Header;