import './apropos.scss';
import {useLanguage} from '../languageContext';
import {motion} from 'framer-motion';
function APropos() {
    const { t } = useLanguage();

    return (
        <section className="aproposContainer" id='apropos'>
            <div className="presentationSection">
                <h2 className='aproposh2'>{t("aboutTitle")}</h2>
                 <div className="container-info">
          {/* Texte animé */}
          <motion.p
            className="p-propos"
            initial={{ opacity: 0, y: 50 }}          // position de départ
            whileInView={{ opacity: 1, y: 0 }}       // position finale
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}  // déclenche l'animation quand 30% de l'élément est visible
          >
                        {t("aboutText1")}
            </motion.p>
            

                <div className="stats-section">
                    <div className="profile-image-container">
                        <motion.img
            src='/photoProfil.png'
            alt="Photo de profil"
            className="profile-image"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default APropos;