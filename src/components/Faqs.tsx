import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Faqs = () => {
  const { t } = useTranslation("translation");
  return (
    <section className="relative pt-16 pb-16 overflow-hidden z-0" id="faqs">
      <div className="relative z-10 container px-2 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-2 text-qGreen text-center">Preguntas</p>
          <h2 className="mb-16 text-white text-3xl font-bold text-center">
            ¿Aún tienes dudas?
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.one.question")}
                content={t("FAQS.list.one.answer")}
                defaultOpen={true}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.two.question")}
                content={t("FAQS.list.two.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.three.question")}
                content={t("FAQS.list.three.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.four.question")}
                content={t("FAQS.list.four.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.five.question")}
                content={t("FAQS.list.five.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.six.question")}
                content={t("FAQS.list.six.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.seven.question")}
                content={t("FAQS.list.seven.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.eight.question")}
                content={t("FAQS.list.eight.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.nine.question")}
                content={t("FAQS.list.nine.answer")}
              />
            </div>

            <div className="w-full p-1">
              <FAQBox
                title={t("FAQS.list.ten.question")}
                content={t("FAQS.list.ten.answer")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FAQBoxProps {
  defaultOpen?: boolean;
  title: string;
  content: string;
}

const FAQBox = ({ defaultOpen, title, content }: FAQBoxProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-md bg-qGray custom-border-gray-darker mb-4 relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className="text-white font-bold pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-white/80 pt-4 transition-all duration-300 overflow-hidden break-words whitespace-pre-wrap ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[360deg]" : "rotate-[180deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#6ef96e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
