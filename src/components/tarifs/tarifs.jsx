import React, { useState } from "react";
import { useLanguage } from "../languageContext";
import "./tarifs.scss";

function Tarifs() {
  const { t } = useLanguage();
  const [selectedPack, setSelectedPack] = useState("basic");

  const packs = [
    {
      key: "basic",
      title: t("basicTitle"),
      price: t("basicPrice"),
      subtitle: t("basicSubtitle"),
      description: t("basicDescription"),
      features: t("basicFeatures"),
      delivery: t("basicDelivery"),
    },
    {
      key: "standard",
      title: t("standardTitle"),
      badge: t("standardBadge"),
      price: t("standardPrice"),
      subtitle: t("standardSubtitle"),
      description: t("standardDescription"),
      features: t("standardFeatures"),
      delivery: t("standardDelivery"),
    },
    {
      key: "premium",
      title: t("premiumTitle"),
      badge: t("premiumBadge"),
      price: t("premiumPrice"),
      subtitle: t("premiumSubtitle"),
      description: t("premiumDescription"),
      features: t("premiumFeatures"),
      delivery: t("premiumDelivery"),
    }
  ];

  const handleSelect = (key) => setSelectedPack(key);
  const activePack = packs.find((pack) => pack.key === selectedPack);

  return (
    <section className="tarifsSection" id="tarifs">
      <h2 className="tarifsTitle">{t("pricingTitle")}</h2>

      {/* Tabs */}
      <div className="tarifsTabs" role="tablist">
        {packs.map((pack) => (
          <button
            key={pack.key}
            role="tab"
            aria-selected={selectedPack === pack.key}
            className={selectedPack === pack.key ? "active" : ""}
            onClick={() => handleSelect(pack.key)}
          >
            {pack.title}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="tarifsContent">
        <div className="tarifCard fadeIn"  key={activePack.key}>
          <div className="tarifHeader">
            <h3>{activePack.title}</h3>
            {activePack.badge && <span className="badge">{activePack.badge}</span>}
            <span className="price">{activePack.price}</span>
          </div>
          <p className="subtitle">{activePack.subtitle}</p>
          <p className="description">{activePack.description}</p>

          <ul>
            {activePack.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <p className="delivery">{activePack.delivery}</p>

          <a href="#contact" className="tarifCta">{t("contact")}</a>
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
