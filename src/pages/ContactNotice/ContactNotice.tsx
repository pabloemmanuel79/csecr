import logoPurosol from '../../assets/logos/purosol.webp';
import './contact-notice.css';

export default function ContactNotice() {
  return (
    <main id="contenido" className="contact-notice">
      <div className="contact-notice__card">
        <img className="contact-notice__logo" src={logoPurosol} alt="PuroSol" />
        <h1>Comunicarse al</h1>
        <a className="contact-notice__phone" href="tel:+595984324335">
          0984 324 335
        </a>
      </div>
    </main>
  );
}
