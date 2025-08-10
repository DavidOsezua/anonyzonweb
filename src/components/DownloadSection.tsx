import PlayStore from "./svgComponents/PlayStore";
import Apple from "./svgComponents/Apple";

const DownloadSection: React.FC = () => {
  const phoneImages = [
    { src: "/phone1.png", alt: "App home screen" },
    { src: "/phone2.png", alt: "Transaction history" },
    { src: "/phone3.png", alt: "Card management" },
  ];

  return (
    <section className="" id="/download">
      <div className="max-w-7xl px-4 mdpx-0 w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get Anonyzon and Start
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          Spending Freely
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base mb-12 max-w-3xl mx-auto">
          Download Anonyzon today to unlock fast, secure, and borderless
          spending. Available now on Google Play and App Store.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* App Store Button */}
          <button
            className="flex items-center text-white px-6 py-3 rounded-lg transition-colors w-full md:max-w-[243px] justify-center gap-8"
            style={{
              background:
                "linear-gradient(11.41deg, #161B33 5.95%, #2C3147 102.98%)",
            }}
          >
            <Apple />
            <div className="text-left">
              <div className="text-xs text-gray-400">Download on</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button
            className="flex items-center text-white px-6 py-3 rounded-lg justify-center gap-8 transition-colors md:max-w-[243px] w-full"
            style={{
              background:
                "linear-gradient(11.41deg, #161B33 5.95%, #2C3147 102.98%)",
            }}
          >
            <PlayStore />
            <div className="text-left">
              <div className="text-xs text-gray-400">Download on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* Images section with better centering */}
      <div className="w-full">
        {/* Desktop: centered flex, Mobile: scrollable */}
        <div className="hidden md:flex justify-center items-center gap-6 px-6">
          {phoneImages.map((image, index) => (
            <div key={index} className="w-64 lg:w-72">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Mobile: scrollable with snap */}
        <div className="md:hidden">
          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide px-6 py-4 snap-x snap-mandatory"
            role="region"
            aria-label="App screenshots gallery"
          >
            {phoneImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 snap-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                tabIndex={0}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  loading={index > 0 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
