import { useTranslation, Trans } from 'react-i18next'

export const Sectors = () => {
  const { t } = useTranslation('translation')
  return (
    <section
      className="flex flex-col space-x-4 lg:flex-row items-center justify-between container my-40 max-w-7xl mx-auto px-2"
      id="resources"
    >
      <div className="max-w-sm">
        <h2 className="text-3xl text-white font-bold balance text-center">
          <Trans i18nKey="SECTORS.title">
            <span className="text-qGreen">Qantto</span>.
          </Trans>
        </h2>
        <p className="text-white/80 text-center balance mt-3">
          {t('SECTORS.desc')}
        </p>
      </div>

      <div
        className="flex gap-2 mt-6 lg:mt-0 overflow-x-auto w-full lg:overflow-x-hidden"
        data-orientation="horizontal"
        aria-orientation="horizontal"
      >
        {/* // <!-- card --> */}
        <div className="max-w-[223px] flex-shrink-0 p-4 bg-qGreen/5 rounded-xl flex flex-col gap-4">
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
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
            <p className="text-white/80">{t('SECTORS.cards.one.first')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.one.second')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.one.third')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.one.fourth')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.one.fifth')}</p>
          </div>
        </div>

        {/* // <!-- card --> */}
        <div className="max-w-[223px] flex-shrink-0 p-4 rounded-xl flex flex-col gap-4">
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.two.first')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.two.second')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.two.third')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.two.fourth')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.two.fifth')}</p>
          </div>
        </div>

        {/* // <!-- card --> */}
        <div className="max-w-[223px] flex-shrink-0 p-4 bg-qGreen/5 rounded-xl flex flex-col gap-4">
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M0 32C0 14.3 14.3 0 32 0h72.9c27.5 0 52 17.6 60.7 43.8L257.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L104.9 64H32C14.3 64 0 49.7 0 32zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L311 79.4l19.8 60.9 60.9-19.8L371.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.three.first')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M288 32c159.1 0 288 48 288 128V352c0 80-128.9 128-288 128S0 432 0 352V160C0 80 128.9 32 288 32zM528 160c0-9.9-8-29.9-55-49.8c-18.6-7.9-40.9-14.4-66-19.4l-27.8 43.6c-7.3 11.5-11.2 24.8-11.2 38.4c0 17.5 6.4 34.4 18.1 47.5l9.8 11c29.8-5.2 55.9-12.5 77.2-21.5c47.1-19.9 55-39.9 55-49.8zM349.2 237.3c-8-26.2-32.4-45.3-61.2-45.3s-53.3 19.1-61.2 45.3c19.4 1.7 39.9 2.7 61.2 2.7s41.8-.9 61.2-2.7zM169 90.8c-25.2 5-47.4 11.6-66 19.4C56 130.1 48 150.1 48 160s8 29.9 55 49.8c21.3 9 47.4 16.3 77.2 21.5l9.8-11c11.6-13.1 18.1-30 18.1-47.5c0-13.6-3.9-26.9-11.2-38.4L169 90.8zm56.3-8C224.5 87 224 91.5 224 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-4.5-.5-9-1.4-13.2C330.8 81 309.8 80 288 80s-42.8 1-62.6 2.8z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.three.second')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.three.third')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.three.fourth')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.three.fifth')}</p>
          </div>
        </div>

        {/* // <!-- card --> */}
        <div className="max-w-[223px] flex-shrink-0 p-4 rounded-xl flex flex-col gap-4">
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 352c0-17.7 14.3-32 32-32V304c0-44.2 35.8-80 80-80H416c17.7 0 32-14.3 32-32V160 69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V352z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.four.first')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.four.second')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.four.third')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.four.fourth')}</p>
          </div>
          {/* // <!-- item --> */}
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 text-qGreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"></path>
              </svg>
            </div>
            <p className="text-white/80">{t('SECTORS.cards.four.fifth')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
