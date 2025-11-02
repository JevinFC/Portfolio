import "./footer.scss";
import { useLanguage } from "../languageContext";
function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="footerPortfolio">
        <p>© 2025 - Kévin Machado</p>
        <p>{t("developpedBy")}</p>
      </div>
    </footer>
  );
}
export default Footer;
