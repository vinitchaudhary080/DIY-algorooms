// src/components/privacy/PrivacyContent.jsx
import React from "react";

export default function PrivacyContent() {
  const sections = [
    {
      title: "Introduction",
      text: `Algorooms (“we,” “us,” or “our”) prioritizes your privacy, confidentiality, and data security while you use our DIY algorithmic trading platform. By accessing or using Algorooms, you consent to the practices described in this Policy.`,
    },
    {
      title: "1. Information We Collect",
      text: `We gather only essential information to ensure platform functionality, performance optimization, and a smooth user experience:

● Account Information: Name, email, login credentials, payment-related identifiers  
● Platform Interaction Data: Strategies created, backtests executed, automation configurations  
● Technical & System Data: IP addresses, device specifications, browser configuration, network parameters  

We do not collect sensitive market positions or trading data beyond what you provide for platform usage.`,
    },
    {
      title: "2. Purpose of Data Utilization",
      text: `Data is used to:

● Establish and manage user accounts  
● Enable strategy simulation, backtesting, and automated execution  
● Perform performance analytics and platform optimization  
● Manage billing, subscriptions, and payment validation  
● Ensure regulatory and legal compliance  

Algorooms never sells or monetizes your personal data for third-party marketing.`,
    },
    {
      title: "3. Security & Data Governance",
      text: `We employ state-of-the-art security measures to protect your data:

● HTTPS with encryption and protection for all communications  
● Encrypted storage for API keys, authentication tokens, and passwords  
● Isolated cloud infrastructure to prevent unauthorized access  
● Continuous vulnerability assessments and monitoring  

Users are responsible for safeguarding account credentials and API integrations.`,
    },
    {
      title: "4. Strategy & Data Storage",
      text: `● User-generated strategies are only stored if explicitly saved  
● Temporary logs, trade responses, and error traces are retained briefly for debugging  
● Archived metadata is anonymized for system optimization  
● Users can permanently delete saved strategies anytime`,
    },
    {
      title: "5. Cookies & Tracking",
      text: `We use cookies, web beacons, and tracking mechanisms strictly for operational purposes:

● Optimize interface responsiveness and usability  
● Analyze user navigation patterns and system performance  

Cookies can be disabled, but some features may be limited.`,
    },
    {
      title: "6. Third-Party Integrations",
      text: `We collaborate with trusted third-party vendors:

● Payment gateways (PCI-compliant)  
● Analytics providers  
● Infrastructure services  

All vendors are contractually obligated to use data exclusively for platform-related operations.`,
    },
    {
      title: "7. Payment Information",
      text: `● Algorooms does not store credit card or payment details  
● All payments are processed via secure, PCI-compliant gateways`,
    },
    {
      title: "8. User Rights",
      text: `You can:

● Access your personal data  
● Rectify inaccuracies in account information  
● Request deletion, subject to legal/regulatory retention requirements`,
    },
    {
      title: "9. Account Deletion",
      text: `● Request deletion via support@algorooms.com  
● Anonymized system logs may be retained for quality assurance and regulatory compliance for up to 90 days.`,
    },
    {
      title: "10. Confidentiality & Proprietary Data",
      text: `● All confidential information (saved strategies, API configurations, platform usage) is strictly private  
● Users must not share or disclose Algorooms’ proprietary information`,
    },
    {
      title: "11. Notifications & Alerts",
      text: `● System notifications, feature updates, and legal/compliance alerts  
● Optional trade alerts via email, app, or Telegram (user-controlled)`,
    },
    {
      title: "12. Regulatory Compliance & Legal Disclosure",
      text: `● Data may be disclosed if legally required or during audits  
● Algorooms may cooperate with law enforcement or regulatory investigations`,
    },
    {
      title: "13. Breach Notification",
      text: `● Users affected by a data breach will be notified promptly  
● Remedial measures will be implemented to mitigate risk`,
    },
    {
      title: "14. Business Continuity & Transfers",
      text: `● During acquisition, merger, or asset transfer, user data may be transferred  
● Any transferred data remains subject to existing privacy commitments and security safeguards  
● Privacy commitments remain intact under the new entity`,
    },
    {
      title: "15. Cross-Border Storage & Cloud Hosting",
      text: `● Data may be processed or stored on secure third-party cloud infrastructure, including servers outside India  
● Transfers occur only with appropriate safeguards in place`,
    },
    {
      title: "16. Policy Amendments & Acceptance",
      text: `● This Policy may be revised to reflect platform updates, regulatory changes, or operational improvements  
● Continued use of Algorooms signifies acceptance of updates`,
    },
  ];

  return (
    <section className="pt-0 sm:pt-0 pb-16 sm:pb-24">
      <div className="container-xxl prose prose-neutral max-w-4xl">
        

        {sections.map((sec, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900">
              {sec.title}
            </h2>
            <p className="mt-2 whitespace-pre-line text-neutral-600 leading-relaxed">
              {sec.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
