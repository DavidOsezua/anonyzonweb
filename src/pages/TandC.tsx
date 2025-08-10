import Layout from "../Layout/Layout";

const TandC = () => {
  return (
    <Layout>
      <div className="space-y-8 ">
        <div className=" relative -z-10 w-full h-40 md:h-72 bg-gradient-to-br from-[#161B33] to-[#2C3147] flex justify-center items-center ">
          <h2 className="font-bold text-xl text-white md:text-3xl">
            Terms and Conditions
          </h2>
          <p className="absolute bottom-1 right-1 font-bold text-white">
            1 August 2025
          </p>
        </div>

        <div className="w-full max-w-[1200px] bg-gradient-to-br from-[#161B33] to-[#2C3147] space-y-12 mx-auto px-12 py-10 rounded-lg text-white">
          {/* Acceptance of Terms Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Acceptance of Terms
            </h1>
            <p className="text-white leading-6 text-[14px]">
              By downloading, installing, or using the Anonyzon App (the "App"),
              you agree to comply with and be bound by these Terms & Conditions
              (the "Terms"). If you do not agree to these Terms, do not use the
              App.
            </p>
          </div>

          {/* Use of the App Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Use of the App</h1>
            <p className="text-white leading-6 text-[14px]">
              The App provides you with tools to manage and monitor your
              Anonyzon account, view transactions, access account features, and
              receive notifications.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You agree to use the App only for lawful and permitted purposes.
              You will not misuse, hack, reverse-engineer, or damage any part of
              the App.
            </p>
          </div>

          {/* Account and Security Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Account and Security
            </h1>
            <p className="text-white leading-6 text-[14px]">
              You are responsible for keeping your login information secure.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You must immediately notify us if you suspect unauthorized access
              to your App account or device.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You are fully responsible for all activities that occur under your
              App account.
            </p>
          </div>

          {/* Permitted Users Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Permitted Users</h1>
            <p className="text-white leading-6 text-[14px]">
              You must be at least 18 years old and legally capable of entering
              into contracts to use the App.
            </p>
          </div>

          {/* Prohibited Uses Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Prohibited Uses</h1>
            <p className="text-white leading-6 text-[14px]">
              You agree not to:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Use the App for any fraudulent, illegal, or abusive purpose.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Violate any laws or rights of third parties.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Attempt to interfere with the App’s security features or
                operation.
              </li>
            </ul>
          </div>

          {/* Intellectual Property Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Intellectual Property
            </h1>
            <p className="text-white leading-6 text-[14px]">
              All content, trademarks, logos, and related materials within the
              App are owned by Anonyzon or its licensors.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You may not copy, modify, distribute, or use any part of the App
              except as expressly allowed in these Terms.
            </p>
          </div>

          {/* Disclaimers Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Disclaimers</h1>
            <p className="text-white leading-6 text-[14px]">
              The App is provided on an "as is" and "as available" basis. We
              make no warranties, representations, or guarantees that the App
              will be error-free or uninterrupted.
            </p>
          </div>

          {/* Limitation of Liability Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Limitation of Liability
            </h1>
            <p className="text-white leading-6 text-[14px]">
              To the maximum extent permitted by law, Anonyzon is not liable for
              any indirect, incidental, or consequential damages arising from
              your use of the App.
            </p>
          </div>

          {/* Privacy Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Privacy</h1>
            <p className="text-white leading-6 text-[14px]">
              Your use of the App is also governed by our Privacy Policy, which
              explains how we collect, use, and protect your personal
              information. By using the App, you consent to these practices.
            </p>
          </div>

          {/* Changes to the Terms Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Changes to the Terms
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We may update these Terms from time to time. We will notify you of
              any significant changes via the App or by other reasonable means.
            </p>
            <p className="text-white leading-6 text-[14px]">
              Continued use of the App means you accept the revised Terms.
            </p>
          </div>

          {/* Termination Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Termination</h1>
            <p className="text-white leading-6 text-[14px]">
              We may suspend or terminate your access to the App at any time if
              you violate these Terms or engage in prohibited activities.
            </p>
          </div>

          {/* Governing Law Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Governing Law</h1>
            <p className="text-white leading-6 text-[14px]">
              These Terms are governed by the laws of UK law.
            </p>
            <p className="text-white leading-6 text-[14px]">
              Any disputes shall be resolved in the courts of UK.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Contact Us</h1>
            <p className="text-white leading-6 text-[14px]">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-white leading-6 text-[14px]">
              Email:{" "}
              <a
                href="mailto:support@anonyzon.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                support@anonyzon.com
              </a>
            </p>
            <p className="text-white leading-6 text-[14px] mt-4">
              By using the Anonyzon App, you acknowledge that you have read and
              understood these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TandC;
