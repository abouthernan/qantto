import { useTranslation, Trans } from "react-i18next";
import { dashboardRouter } from "../constants";

export const Steper2 = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="container md:max-w-[1400px] mx-auto mt-24 px-2 md:px-0">
      <p className="text-qGreen text-center">{t("STEPER2.subtitle")}</p>
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">
        {t("STEPER2.title")}
      </h2>
      <div className="flex items-start justify-start lg:justify-center gap-5 mt-20 relative overflow-x-auto" data-orientation="horizontal" aria-orientation="horizontal">
        {/* // <!-- step --> */}
        <div className="text-qBlack bg-qGreen flex flex-col items-center justify-start min-h-[260px] w-[230px] pt-5 px-2 rounded-2xl relative border-r-dashed flex-shrink-0" >
          <div className="w-10 h-10 bg-transparent backdrop-blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
            </svg>
          </div>
          <h2 className="text-qBlack text-lg font-bold mt-4">
            {t("STEPER2.cards.one.title")}
          </h2>
          <p className="text-qBlack balance text-center font-light">
            <Trans i18nKey="STEPER2.cards.one.description">
              <strong className="text-qBlack font-bold">
                free-trial de 14 días sin costo.
              </strong>
            </Trans>
          </p>
        </div>
        {/* // <!-- step --> */}
        <div className="text-white flex flex-col items-center justify-start min-h-[260px]  w-[230px] pt-5 px-2 rounded-2xl transition-colors duration-300 hover:text-qBlack hover:bg-qGreen group relative border-r-dashed flex-shrink-0">
          <div className="w-10 h-10 bg-transparent backdrop-blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
            </svg>
          </div>
          <h2 className="text-qGreen text-lg font-semibold mt-4 group-hover:text-qBlack">
            {t("STEPER2.cards.two.title")}
          </h2>
          <p className="text-white/80 balance text-center group-hover:text-qBlack">
            <Trans i18nKey="STEPER2.cards.two.description">
              <strong className="text-white group-hover:text-qBlack">
                Personaliza
              </strong>
              <span className="underline">qantto.io/miempresa</span>
            </Trans>
          </p>
        </div>
        {/* // <!-- step --> */}
        <div className="text-white flex flex-col items-center justify-start  min-h-[260px] w-[230px] pt-5 px-2 rounded-2xl transition-colors duration-300 hover:text-qBlack hover:bg-qGreen group relative border-r-dashed flex-shrink-0">
          <div className="w-10 h-10 bg-transparent backdrop-blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
            </svg>
          </div>
          <h2 className="text-qGreen text-lg font-semibold mt-4 group-hover:text-qBlack">
            {t("STEPER2.cards.three.title")}
          </h2>
          <p className="text-white/80 balance text-center group-hover:text-qBlack">
            <Trans i18nKey="STEPER2.cards.three.description">
              <strong className="text-white group-hover:text-qBlack">
                Configura los parámetros de precio
              </strong>{" "}
            </Trans>
          </p>
        </div>
        {/* // <!-- step --> */}
        <div className="text-white flex flex-col items-center justify-start min-h-[260px] w-[230px] pt-5 px-2 rounded-2xl transition-colors duration-300 hover:text-qBlack hover:bg-qGreen group relative border-r-dashed flex-shrink-0">
          <div className="w-10 h-10 bg-transparent backdrop-blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"></path>
            </svg>
          </div>
          <h2 className="text-qGreen text-lg font-semibold mt-4 group-hover:text-qBlack">
            {t("STEPER2.cards.four.title")}
          </h2>
          <p className="text-white/80 balance text-center group-hover:text-qBlack">
            <Trans i18nKey="STEPER2.cards.four.description">
              <strong className="text-white group-hover:text-qBlack">
                Comparte el link
              </strong>{" "}
            </Trans>
          </p>
        </div>
        {/* // <!-- step --> */}
        <div className="text-white flex flex-col items-center justify-start min-h-[260px] w-[230px] pt-5 px-2 rounded-2xl transition-colors duration-300 hover:text-qBlack hover:bg-qGreen group flex-shrink-0">
          <div className="w-10 h-10 bg-transparent backdrop-blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z"></path>
            </svg>
          </div>
          <h2 className="text-qGreen text-lg font-semibold mt-4 group-hover:text-qBlack">
            {t("STEPER2.cards.five.title")}
          </h2>
          <p className="text-white/80 balance text-center group-hover:text-qBlack">
            <Trans i18nKey="STEPER2.cards.five.description">
              <strong className="text-white group-hover:text-qBlack">
                free-trial de 14 días sin costo.
              </strong>
            </Trans>
          </p>
        </div>
      </div>

      <section className="text-white text-center text-base space-y-5 lg:text-lg mt-20">
        <a
          href={dashboardRouter.register}
          className="px-4 py-2 bg-qGreen hover:bg-qGreen/80 transition-colors duration-300 text-qBlack font-semibold rounded-md"
        >
          {t("CTA.freeTrial")}
        </a>
        <div className="font-light text-base">
          <p>
            <Trans i18nKey="MESSAGES.qanttoWithDays">
              <span className="text-qGreen font-bold">Qantto</span>
              <strong className="text-white font-bold">14 días.</strong>
            </Trans>
          </p>
          <p>{t("MESSAGES.noCreditCard")}</p>
        </div>
      </section>
    </section>
  );
};
