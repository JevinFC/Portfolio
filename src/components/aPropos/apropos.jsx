import './apropos.scss';
import {useLanguage} from '../languageContext';
function APropos() {
    const { t } = useLanguage();

    return (
        <section className="aproposContainer" id='apropos'>
            <div className="presentationSection">
                <h2 className='aproposh2'>{t("aboutTitle")}</h2>
                <div className='container-info'>
                    <p className='p-propos'>
                        {t("aboutText1")}
                    </p>
            

                <div className="stats-section">
                    <div className="profile-image-container">
                        <img 
                            src="./public/photoProfil.png"  //Changer photo de profil ici à celle sans fond
                            alt="Photo de profil"
                            className="profile-image"
                            title='Photo de profil'
                        />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default APropos;