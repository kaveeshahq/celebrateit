import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-primary"><span className="text-gray-500">Privacy</span> Policy</h1>

      <p className="mb-4">
        Welcome to <strong>CelebrateIt</strong>. We value your privacy and are committed
        to protecting your personal information. This Privacy Policy explains how
        we collect, use, store, and safeguard your data when you use our website
        and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Personal Information:</strong> Name, phone number, email address, delivery address.</li>
        <li><strong>Order Details:</strong> Products purchased, order preferences, occasion details.</li>
        <li><strong>Payment Information:</strong> Handled securely through our payment partners; we do <strong>not</strong> store card/bank details.</li>
        <li><strong>Device & Usage Data:</strong> IP address, browser type, cookies, pages visited.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To process and deliver your orders.</li>
        <li>To communicate order updates, confirmations, and customer support.</li>
        <li>To improve website performance and user experience.</li>
        <li>To send promotional offers (only if you opt-in).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do <strong>not</strong> sell or rent your personal information. However, we may share 
        data with trusted third parties for:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Payment processing</li>
        <li>Delivery services</li>
        <li>Analytics and performance tools</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We use cookies to improve the user experience, track preferences, and
        analyze website traffic. You can disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We use secure servers, encryption, and industry-standard protections to
        safeguard your personal data. However, no method of transmission is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Request access to your data.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your data (when legally allowed).</li>
        <li>Opt-out of marketing communications anytime.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to third-party websites. We are not responsible 
        for their privacy practices or content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy occasionally. The updated version will 
        always be available on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p>
        If you have any questions, feel free to contact us:
      </p>
      <p className="mt-2">
        <strong>Email:</strong> support@celebrateit.lk<br />
        <strong>Phone:</strong> 075 991 5797
      </p>
    </div>
  );
};

export default PrivacyPolicy;
