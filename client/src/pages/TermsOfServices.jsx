import React from "react";

const TermsOfServices = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>CelebrateIt</strong>. By accessing or using our website, 
        placing an order, or using any of our services, you agree to the following 
        Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Our Website</h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes and in a way that 
        does not harm, restrict, or infringe on others' rights or the operation 
        of the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Orders & Payments</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>All orders are subject to availability.</li>
        <li>Prices may change without prior notice.</li>
        <li>Your order is confirmed only after full or partial payment (based on policy).</li>
        <li>We use secure payment gateways; CelebrateIt does not store your card details.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Product Images & Variations</h2>
      <p className="mb-4">
        Product images shown on the website are for representation. Depending 
        on availability, season, or vendor stock, slight variations in color, 
        packaging, or arrangement may occur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Delivery Policy</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Delivery timelines are approximate and may vary due to external factors.</li>
        <li>Incorrect delivery details provided by the customer may cause delays.</li>
        <li>No refunds for failed delivery attempts due to unreachable recipients.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellations & Refunds</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Cancellations must be requested at least 24 hours before delivery.</li>
        <li>Refunds are processed only for valid cancellations or issues verified by our team.</li>
        <li>Customized orders are non-refundable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. User Accounts</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You are responsible for maintaining account confidentiality.</li>
        <li>Any activity under your account is your responsibility.</li>
        <li>We may suspend or terminate accounts violating our policies.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
      <p className="mb-4">
        All content, logos, product images, and branding on our website are the 
        property of CelebrateIt and may not be copied, reproduced, or used 
        without written permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Limitation of Liability</h2>
      <p className="mb-4">
        CelebrateIt is not responsible for any indirect, incidental, or 
        consequential damages arising from product use, delivery delays, or 
        website issues.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service at any time. Your continued use of 
        the website means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p>
        For questions or concerns regarding these Terms of Service, please contact:
      </p>
      <p className="mt-2">
        <strong>Email:</strong> support@celebrateit.lk<br />
        <strong>Phone:</strong> 075 991 5797
      </p>
    </div>
  );
};

export default TermsOfServices;
