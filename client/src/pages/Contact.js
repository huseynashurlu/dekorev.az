import Phone from '../assets/images/contact_phone.png'
import Mail from '../assets/images/mail.png'
import Location from '../assets/images/placeholder.png'
import '../assets/css/pages.css'

const Contact = () => {
  return (
    <section id="Contact">
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-4">
                    <div className="box">
                        <img src={Phone} alt="" />
                        <a href="tel:0502656463">(050) 265 64 63</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box">
                        <img src={Mail} alt="" />
                        <a href="mmailto:info@dekorev.az">info@dekorev.az</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box">
                        <img src={Location} alt="" />
                        <span>Bakı şəhəri</span>
                    </div>
                </div>
            </div>

            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490145618!2d49.85175681468929!3d40.37719496596823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2s!4v1651053725073!5m2!1sen!2s" width="100%" height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}
export default Contact