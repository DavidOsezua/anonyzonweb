import Layout from "../Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="space-y-8 ">
        <div className=" relative -z-10 w-full h-40 md:h-72 bg-gradient-to-br from-[#161B33] to-[#2C3147] flex justify-center items-center ">
          <h2 className="font-bold text-xl text-white md:text-3xl">
            Privacy Policy
          </h2>

          <p className="absolute bottom-1 right-1 font-bold text-white">
            1 August 2025
          </p>
        </div>

        <div className="w-full max-w-[1200px] bg-gradient-to-br from-[#161B33] to-[#2C3147] mx-auto px-8 py-10 rounded-lg text-white">
          <div className="mb-12 space-y-2">
            <h1 className="text-xl md:text-3xl font-bold">About This Policy</h1>
            <p className="text-white leading-6 text-[14px]">
              This Privacy Policy explains how Anonyzon ("we", "us", "our")
              collects, uses, shares, and protects information when you use the
              Anonyzon App ("the App").
            </p>
            <p className="text-white leading-6 text-[14px]">
              By using the App, you agree to this Privacy Policy.
            </p>
          </div>

          {/* Information We Collect Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Information We Collect
            </h1>
            <p className="text-white leading-6 text-[14px]">
              When you use the App, we may collect the following types of
              information:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Personal Information: Name, email, phone number, or other
                details you provide when you register or communicate with us.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Device Information: Device type, operating system, unique device
                ID.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Usage Information: How you use the App, app activity logs, and
                basic analytics.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Transaction Information: Basic details about your card usage for
                account management (e.g., last 4 digits, transaction summaries).
              </li>
            </ul>
          </div>

          {/* How We Use Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              How We Use Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We use your information to:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Provide and maintain the App and its features.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Help you manage your Anonyzon account.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Communicate with you about updates, security alerts, and
                support.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Improve our services and App experience.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Comply with legal or regulatory obligations if required.
              </li>
            </ul>
          </div>

          {/* How We Protect Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              How We Protect Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We use reasonable administrative, technical, and physical
              safeguards to protect your information.
            </p>
            <p className="text-white leading-6 text-[14px]">
              Access is restricted to authorized personnel only.
            </p>
          </div>

          {/* Sharing Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Sharing Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We do not sell or rent your personal information. We may share
              limited data with trusted service providers who help us operate
              the App, under strict confidentiality agreements.
            </p>
          </div>

          {/* Your Rights Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Your Rights</h1>
            <p className="text-white leading-6 text-[14px]">You may:</p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Request access to or correction of your personal information.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Withdraw your consent where we rely on it.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Delete your App account (subject to legal retention
                requirements).
              </li>
            </ul>
            <p className="text-white leading-6 text-[14px] mt-4">
              Contact us at{" "}
              <a
                href="mailto:support@anonyzon.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                support@anonyzon.com
              </a>{" "}
              to exercise these rights.
            </p>
          </div>

          {/* Data Storage Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Data Storage</h1>
            <p className="text-white leading-6 text-[14px]">
              Your information may be stored and processed securely within the
              EU or other jurisdictions where we operate.
            </p>
          </div>

          {/* Updates to This Policy Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Updates to This Policy
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes within the App or by email.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Contact Us</h1>
            <p className="text-white leading-6 text-[14px]">
              If you have questions about this Privacy Policy, please contact:
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

export default Policy;
