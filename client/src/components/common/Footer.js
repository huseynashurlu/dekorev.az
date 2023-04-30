import Logo from '../../assets/images/logo.png'
import { FormattedMessage } from "react-intl";
import { BsTelephoneForward } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-6">
                    <img src={Logo}  alt="Logo for Dekorev.az" />
                    <a href="tel:0502656463">
                        <BsTelephoneForward />
                        <span>050 265 64 63</span>
                    </a>
                    <a href="mailto:info@dekorev.az">
                        <CiMail />
                        <span>info@dekorev.az</span>
                    </a>
                </div>
                <div className="col-lg-3 col-6">
                    <h5>
                        <FormattedMessage id="xidmətlərimiz" defaultMessage="Xidmətlərimiz" />
                    </h5>
                    <ul>
                        <li>
                            <a href="">Daxil olmaq</a>
                        </li>
                        <li>
                            <a href="">Mağaza açmaq</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-6">
                    <h5>
                        <FormattedMessage id="kateqoriyalar" defaultMessage="Kateqoriyalar" />
                    </h5>
                    <ul>
                        <li>
                            <a href="">Pərdə</a>
                        </li>
                        <li>
                            <a href="">Pəncərə</a>
                        </li>
                        <li>
                            <a href="">İşıqlandırma</a>
                        </li>
                        <li>
                            <a href="">Parket</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-6">
                    <h5>
                        <FormattedMessage id="profil" defaultMessage="Profil" />
                    </h5>
                    <ul>
                        <li>
                            <FormattedMessage id="qeydiyyat" defaultMessage="Qeydiyyat" />
                        </li>
                        <li>
                            <FormattedMessage id="səbət" defaultMessage="Səbət" />
                        </li>
                        <li>
                            <FormattedMessage id="sifarişlərim" defaultMessage="Sifarişlərim" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer