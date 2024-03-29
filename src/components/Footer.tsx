import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../assets/icons";

import { useTranslation, getI18n } from "react-i18next";

// legal
const termsEs = "/legal/terms-es.pdf";
const termsEn = "/legal/terms-en.pdf";
const policyEs = "/legal/policy-es.pdf";
const policyEn = "/legal/policy-en.pdf";
const securityEs = "/legal/security-es.pdf";
const securityEn = "/legal/security-en.pdf";

export const Footer = () => {
  const { t } = useTranslation("translation");

  const isEs = getI18n().language === "es";

  return (
    <footer>
      <div className="pt-10 lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <a
                href="/"
                className="flex justify-center lg:justify-start items-center grow basis-0"
              >
                <img
                  src="/images/logo-qantto-white.svg"
                  alt="Quantto Logo"
                  width={150}
                />
              </a>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-white/80 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                {t("FOOTER.description")}
              </p>
              <div className="w-38 mx-auto lg:mx-0 flex lg:block justify-center">
                <a
                  className="inline-block w-10 h-10 mr-2 p-3 bg-qGray text-white border-qGray hover:bg-qGray/80 transition-colors duration-300 rounded-xl"
                  href="https://www.facebook.com/qantto.io"
                  target="_blank"
                  title="facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-3 bg-qGray text-white border-qGray hover:bg-qGray/80 transition-colors duration-300 rounded-xl"
                  href="https://www.instagram.com/qantto.io/"
                  target="_blank"
                  title="instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-3 bg-qGray text-white border-qGray hover:bg-qGray/80 transition-colors duration-300 rounded-xl"
                  href="https://www.linkedin.com/company/qantto/"
                  target="_blank"
                  title="linkedin"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-3 bg-qGray text-white border-qGray hover:bg-qGray/80 transition-colors duration-300 rounded-xl"
                  href=""
                  target="_blank"
                  title="youtube"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 gap-10 lg:pl-16 hidden lg:flex flex-wrap justify-end">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {t("FOOTER.location")}
                </h3>
                <ul>
                  <li className="mb-4">
                    <p className="text-white/80" aria-label="ubicacion">
                      651 N Broad St <br />
                      Suite 201 <br />
                      Middletown, DE 19709 <br />
                      United States <br />
                    </p>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  {t("FOOTER.product")}
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-white/80 hover:text-gray-300"
                      href={isEs ? termsEs : termsEn}
                      aria-label="terms and conditions"
                      target="_blank"
                    >
                      {t("FOOTER.termsAndConditions")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-white/80 hover:text-gray-300"
                      href={isEs ? policyEs : policyEn}
                      aria-label="privacy policy"
                      target="_blank"
                    >
                      {t("FOOTER.privacyPolicy")}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-white/80 hover:text-gray-300"
                      href={isEs ? securityEs : securityEn}
                      aria-label="security"
                      target="_blank"
                    >
                      {t("FOOTER.security")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/80 hover:text-gray-300"
                      href="mailto:team@qantto.io"
                      aria-label="email"
                    >
                      team@qantto.io
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-white/80 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            {t("FOOTER.copyright")} {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
};
