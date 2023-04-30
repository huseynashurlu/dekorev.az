import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import az from "../../lang/az.json";
import en from "../../lang/en.json";
import ru from "../../lang/ru.json";
import Footer from "../common/Footer"
import Header from "../common/Header"
import '../../assets/css/common.css'
import CategoryList from "../CategoryList"
import BottomNav from "../BottomNav";
import MobileNav from "../common/MobileNav";


const messages = {
  az: az,
  en: en,
  ru: ru
};

const Layout = (props) => {
  const [locale, setLocale] = useState("az");
  const [showBottomNav, setShowBottomNav] = useState(true);

  function handleLocaleChange(e) {
    setLocale(e);
  }

  useEffect(() => {
    function handleResize() {
      setShowBottomNav(window.innerWidth < 576);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="layout">

      <IntlProvider locale={locale} messages={messages[locale]}>
      <Header value={locale} onChange={handleLocaleChange} />
      <MobileNav />
        <CategoryList />
        <main className="content">
            {props.children}
        </main>
        <Footer />
        {showBottomNav && <BottomNav />}
      </IntlProvider>
        
    </div>
  )
}
export default Layout