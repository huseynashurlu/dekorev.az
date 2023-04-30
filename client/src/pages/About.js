import AboutImg from '../assets/images/about_main.jpg';
import '../assets/css/pages.css';

const About = () => {
  return (
    <section id="About">
        <div class="container">
            <h3>Dekorev.az nədir?</h3>
            <p>Bizim hər birimiz alış-veriş etmək üçün müxtəlif mağazalar gəzir, müxtəlif brendlərin məhsullarını müqayisə edir və bir məhsul almaq üçün saatlarla vaxt sərf edirik. Eyni zamanda əgər əl qabiliyyətinizdən istifadə edərək ev şəraitində yataq dəstləri, hamam dəsmalları, oyuncaqlar kimi kreativ məhsullar yaradırsınız və onları satmaq üçün bir məkan arzulayırsınızsa, bunu əlavə vəsait sərf etmədən reallaşdırmaq demək olar ki, mümkünsüzdür. Onlayn ticarət platforması Shop.az sizi bütün bu əziyyətlərdən xilas edir.

                Bu internet mağaza məkanında siz həm mağaza sahibi ola bilər, həm də öz əl işlərinizi və ya yaratdığınız yataq dəstləri, hamam dəsmalları, oyuncaqlar kimi kreativ məhsulları sata bilərsiniz. İnternet mağazalar çoxdur amma Shop.az-ın fərqi odur ki, o onlayn mağaza olaraq alıcılara Bakıda yerləşən mağazaların Smartfon (Xiaomi, Apple, Samsung), Mobil telefon, Ev üçün məişət texnikası olan Mikserlər, Soyuducular, Tosterlər, Blenderlər, Mətbəx kombaynı, Qabyuyan, Paltaryuyan, Korkmaz mətbəx avadanlıqlarını, Wilmax mətbəx məhsullarını, eyni zamanda Yataq dəstlərini, Hamam dəsmalları, Uşaq arabalaları, Oyuncaqlar, Avtomobil ehtiyat hissələri, Parfümləri, Tibbi məhsullar olan maskalar, termometrler, təzyiq ölçənlər kimi fərqli məhsullarını təqdim edir və eyni zamanda onlayn mağazada olan məhsullar haqqında endirimlər, aksiyalar və kampaniyalar haqqında məlumat verir. Bundan əlavə alıcıları onlayn mağazalara yönəldir. Çünki bu internet mağaza platformasında satıcılar və alıcılar bir araya gəlir.</p>
            <div class="text-center">
                <img src={AboutImg} alt="" />
            </div>
        </div>
    </section>

  )
}
export default About