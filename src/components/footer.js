import React from "react"
import Link from "./app_link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-white relative">
      <div className="container">
        <div className="lg:flex lg:py-6">
          <div className="lg:w-2/4 text-center lg:text-left py-5">
            <img
              src={require("../images/beyond-bleu.svg")}
              className="inline-block mb-10 w-48"
              alt="Beyond Bleu"
            />
            <h6>{t("Appointments and Inquiries")}</h6>
            <div>
              <strong>{t("Weekday")}</strong> 10:30~19:30
              <br />
              <strong>{t("Saturday")}</strong> 11:00~17:30
            </div>
          </div>
          <div className="lg:w-1/4 ml-auto text-center lg:text-left p-5 pt-10">
            <h4 className="b-line">{t("Sitemap")}</h4>
            <nav className="flex flex-col w-auto mx-auto">
              <Link to="/" className="no-underline">
                {t("Home")}
              </Link>
              <Link to="/about" className="no-underline">
                {t("About")}
              </Link>
              <Link to="/individual-therapy" className="no-underline">
                {t("Individuals")}
              </Link>
              <Link to="/couples-therapy" className="no-underline">
                {t("Couples")}
              </Link>
              <Link to="/relationship-counseling" className="no-underline">
                {t("Relationships")}
              </Link>
              <Link to="/booking" className="no-underline">
                {t("Booking")}
              </Link>
              <Link to="/access" className="no-underline">
                {t("Access")}
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 text-center lg:text-left p-5 pt-10">
            <h4 className="b-line">{t("Contact me")}</h4>
            <div>
              <a href="tel:03-5962-3883" className="no-underline">
                <FontAwesomeIcon icon="phone" className="mr-2" />
                03-5962-3883
              </a>
            </div>
            <div>
              <a href="mailto:info@beyondbleu.com" className="no-underline">
                <FontAwesomeIcon icon="envelope" className="mr-2" />
                info@beyondbleu.com
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/beyondbleu_psychotherapy/"
                className="no-underline"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} className="mr-2" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-6 text-center lg:text-left">
          © {new Date().getFullYear()} @beyondbleu.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
