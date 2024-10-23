import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='social-media'>
                <img src={`${process.env.PUBLIC_URL}/images/fb.png`} alt='facebook' />
                <img src={`${process.env.PUBLIC_URL}/images/tw.png`} alt='twitter' />
                <img src={`${process.env.PUBLIC_URL}/images/ig.png`} alt='instagram' />
            </div>
            <div className='logo'>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='logo da organo' />
            </div>
            <div className='copyright'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    );
}

export default Footer;