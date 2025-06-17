import Navbar from "@/app/components/Sections/Navbar/Navbar";
import LeadForm from "@/app/components/Sections/LeadForm/LeadForm";
import Footer from "@/app/components/Sections/Footer/Footer";

import InfoDisplay from "@/app/components/UI/Info/InfoDisplay";

import {Suspense} from "react";

function Policy() {

    const data = [
  {
    "id": "introduction",
    "title": "INTRODUCTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Amplicomm Solutions Private Limited (“Company”) or “we”/“us” recognize the importance of protecting the privacy of information provided by you. Your privacy is very important to us. This Privacy Policy (“the Policy”) outlines how the Company collects, uses, and protects the Personal Information (as defined below) in accordance with the applicable laws.",
          "The Site is the services publicly available on the platform of the Company’s Platform™.",
          "By using the Platform, you consent to the processing of your Personal Information in accordance with this Policy. The Company may change this Policy from time to time and any changes will be posted on the Platform. Your continued use of the Platform after such changes have been posted will constitute your consent to such changes. If you do not agree with the terms of this Policy, please do not provide any Personal Information to the Company. You may withdraw your consent at any time, by following the instructions provided in this Policy."
        ]
      }
    ]
  },
  {
    "id": "definitions",
    "title": "DEFINITIONS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“Rules”) specify the rules and regulations pertaining to “Personal Information” and “Sensitive Personal Data or Information” under the Information Technology Act, 2000. The Rules define “Personal Information” as any information that relates to a natural person, which either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such person such as name, address, contact number, email address, etc., and such other information may be disclosed from time to time as “Personal Information” in accordance with the IT Rules.",
          "Personal Information may include the following: name, address, contact number, email address, date of birth, gender, financial information such as bank account or credit card or debit card or other payment instrument details, physical, physiological and mental health condition, medical records and history.",
          "Sensitive Personal Data or Information includes the above clauses as provided to a body corporate for providing service, and any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise, being the force shall not be regarded as Sensitive Personal Data or Information for the purpose of the IT Act, 2000."
        ]
      }
    ]
  },
  {
    "id": "informationCollected",
    "title": "INFORMATION COLLECTED",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company may collect the following information:",
          {
            "text": "Personal Information such as your name, address, contact number, email address, date of birth, gender, financial information such as bank account or credit card or debit card or other payment instrument details, physical, physiological and mental health condition, medical records and history.",
            "subItems": [
              "Full name and/or name of the entity you represent;",
              "Contact details;",
              "Demographic information;",
              "Financial information such as bank account, payment instrument details, credit/debit card details;",
              "Online information such as customer surveys and offers;",
              "Any other information provided by you."
            ]
          },
          "The Company shall not be liable for any deficiency in Services due to incomplete or inaccurate information provided by you."
        ]
      }
    ]
  },
  {
    "id": "purposeOfCollecting",
    "title": "PURPOSE OF COLLECTING PERSONAL INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company uses your Personal Information to operate, provide, develop and improve the Platform.",
          "Personal Information collected by us through the Platform may be used by the Company, its holding companies, subsidiaries and affiliates for various purposes, including but not limited to: facilitate e-commerce business strategy and execution, online brand building, website enhancement recommendations, marketplace listing and operations management, digital performance marketing, SEO, reporting and customized technology solutions that may be developed by it from time to time in order to provide its Services through the Platform; administer your account; process your orders; provide customer support; communicate with you about your orders, the Platform, Services, or the Company; improve the Platform, Services, or the Company; personalize your experience; enforce the terms of use; marketing and promotional offers; prevent fraud and other prohibited or illegal activities; and comply with applicable laws.",
          "In addition to the above, the Company may use your Personal Information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Services. The Company may also use your Personal Information to recommend features, products, or services that may be of interest to you, identify your preferences, and personalize your experience with the Company.",
          "Advertising: The Company may use your Personal Information to display interest-based advertisements for features and Services that might be of interest to you."
        ]
      }
    ]
  },
  {
    "id": "declarationOfConsent",
    "title": "DECLARATION OF CONSENT",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "By using the Platform, you consent to the processing of your Personal Information in accordance with the terms of this Policy.",
          "You may withdraw your consent at any time by following the instructions provided in this Policy. If you withdraw your consent, the Company may not be able to provide you with certain Services. Aurob, Pune 411057, Maharashtra, India, being the Company, will process your Personal Information in accordance with this Policy and applicable laws."
        ]
      }
    ]
  },
  {
    "id": "protectionOfPersonalInformation",
    "title": "PROTECTION OF PERSONAL INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company takes commercially reasonable steps to protect your Personal Information when it is transmitted from your computer to the Platform.",
          "The Company has implemented appropriate physical, electronic, and managerial procedures to safeguard and secure your Personal Information from unauthorized access, use, alteration, disclosure, or destruction.",
          "It is your responsibility to take special care while deciding what information is sent to us via email as email sent to us from the Platform might not be 100% secure."
        ]
      }
    ]
  },
  {
    "id": "userResponsibilities",
    "title": "USER RESPONSIBILITIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You shall use the Platform for purposes that are consistent with the Services and you shall be bound by the Terms and Conditions."
        ]
      }
    ]
  },
  {
    "id": "disclosureOfPersonalInformation",
    "title": "DISCLOSURE OF PERSONAL INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company does not sell, share, or rent your Personal Information to third parties unless it has collected such information about you for the purpose of providing the Services.",
          "The Company may share your Personal Information with third parties for marketing purposes and for the purpose of providing the Services as permitted by this Policy.",
          "The Company may disclose your Personal Information to third parties if it is required to do so by law, or if the Company believes that such disclosure is necessary to comply with legal obligations, protect the rights, property, or safety of the Company, its customers, or the public.",
          "The Company may share your Personal Information with its affiliates, subsidiaries, or third-party service providers to help us deliver, support, and improve the Services.",
          "The Company may also disclose your Personal Information to third parties in connection with a merger, acquisition, or sale of all or substantially all of the Company’s assets.",
          "The Company may share your Personal Information with law enforcement agencies, government officials, or other third parties as required by law or to protect the rights, property, or safety of the Company, its customers, or the public.",
          "Further, the Company may share your Personal Information, including but not limited to your name, address, contact details, and business operational details with third parties as part of the Platform’s services.",
          "In such instances as may be provided in the Platform, the Company shall not be responsible for such disclosures to any unauthorized third parties unless such disclosures were made with your consent."
        ]
      }
    ]
  },
  {
    "id": "retentionOfPersonalInformation",
    "title": "RETENTION OF PERSONAL INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company will only retain your Personal Information for as long as it is necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.",
          "If you cease using the Platform, the Company may continue to retain your Personal Information for a reasonable period of time in order to respond to any inquiries or complaints, to comply with legal obligations, or to protect the rights, property, or safety of the Company, its customers, or the public.",
          "After the retention period, the Company will securely delete or anonymize your Personal Information.",
          "To determine the appropriate retention period for Personal Information, the Company considers the amount, nature, and sensitivity of the Personal Information, the potential risk of harm from unauthorized use or disclosure of your Personal Information, the purposes for which the Company processes your Personal Information, and whether the Company can achieve those purposes through other means, and the applicable legal requirements."
        ]
      }
    ]
  },
  {
    "id": "rightToReviewPersonalInformation",
    "title": "RIGHT TO REVIEW PERSONAL INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "You have the right to review the Personal Information we hold about you and make corrections or modifications, request deletion of the same, or object to the processing of your Personal Information in certain circumstances.",
          "To exercise these rights, you may contact the Company at the contact information provided in this Policy. However, the Company shall not be responsible for any interruption in the Services due to your request to review, correct, or delete your Personal Information."
        ]
      }
    ]
  },
  {
    "id": "domainNameAndIpAddress",
    "title": "DOMAIN NAME AND IP ADDRESS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company collects domain names and IP addresses of visitors for statistical purposes, to measure the usage, to customize the content, or to otherwise improve the Platform.",
          "The Company also aggregates information relating to visitor’s statistics, patterns, and data that are collected and retains the data concerning the IP address and domain names."
        ]
      }
    ]
  },
  {
    "id": "locationInformation",
    "title": "LOCATION INFORMATION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company requires location information about user sign-ups, current location, which it gets from signals such as the IP address of your device settings.",
          "Location information may be used for purposes such as fraud prevention, to provide customer support, to customize the Platform, or to otherwise improve the Services."
        ]
      }
    ]
  },
  {
    "id": "cookies",
    "title": "COOKIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company uses cookies to identify which pages are being used, whether you are subsequently visiting the Platform. This helps us to analyze data about webpage traffic and improve the Platform in order to tailor it to customer needs.",
          "Cookies also help us to track user activity, to provide customer support, to customize the Platform, or to otherwise improve the Services. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer."
        ]
      }
    ]
  },
  {
    "id": "thirdParties",
    "title": "THIRD PARTIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company may contain links to other third-party sites.",
          "Please note that the Company does not control these third-party sites and is not responsible for their privacy practices and policies. You shall read the policies, terms, and conditions of those sites before browsing or using the third-party sites."
        ]
      }
    ]
  },
  {
    "id": "noLiability",
    "title": "NO LIABILITY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Platform is created and maintained as a publicly available hosting provider. The Information is protected and kept secure using commercially reasonable measures. The Company expressly disclaims any representation or warranty, whether express or implied, as to the accuracy, completeness, or suitability of the Information for any purpose.",
          "The Company shall not be liable for any loss or damage that may arise to any person from any inadvertent error in the Information or its results contained on the Platform.",
          "The Company shall not be liable for any loss of Information caused whether as a result of any interruption, suspension, or termination of the Platform or otherwise.",
          "The Company shall not be liable for any damages whether direct, indirect, special, incidental, or consequential including loss of revenue or lost profits that may arise from or in connection with the use of the Platform.",
          "The Company shall not be liable for any loss of data, technical difficulties, viruses, worms, or other malicious software that may be transmitted to or through the Platform by any third party.",
          "The Company shall not be liable for any errors, omissions, interruptions, deletions, defects, delays in operation or transmission, communication line failures, theft, or destruction or unauthorized access to, or alteration of, user communications.",
          "You use the Platform at your own risk. You acknowledge that the Company does not assume any responsibility for the accuracy, completeness, or suitability of the Information for any purpose."
        ]
      }
    ]
  },
  {
    "id": "dataProtectionOfficer",
    "title": "DATA PROTECTION OFFICER",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "For redressal of your grievances, the Information Technology Act, 2000, the amendments thereto, and the Rules made thereunder, the Company has designated a Grievance Officer who shall respond to any grievances raised by you.",
          "The designated Grievance Officer is authorized to take up the matter with the concerned team and resolve the issue in accordance with the applicable laws.",
          {
            "text": "You may contact the Grievance Officer at the following address:",
            "subItems": [
              "Name: [Redacted]",
              "Address: Amplicomm Solutions Private Limited, Plot No. 41/1, 3rd Floor, S.No. 59/1, Aurob, Pune 411057, Maharashtra, India",
              "Phone No.: [Redacted]",
              "Email ID: [Redacted]"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "governingLawAndJurisdiction",
    "title": "GOVERNING LAW AND JURISDICTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Policy shall be governed by and construed in accordance with the laws of India, subject to Clause 18 of this Policy, the disputes that might arise between you and the Company shall be subject to the jurisdiction and venue of the Courts in Pune, Maharashtra."
        ]
      }
    ]
  },
  {
    "id": "disputeResolution",
    "title": "DISPUTE RESOLUTION",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "Any dispute, claim, or difference (including a dispute regarding the existence, validity, interpretation, or alleged breach of this Policy) arising out of or relating to this Policy shall be referred to and finally resolved by arbitration in Pune, Maharashtra in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted by a sole arbitrator appointed by the Company. The language of arbitration shall be English."
        ]
      }
    ]
  },
  {
    "id": "updatesToPrivacyPolicy",
    "title": "UPDATES TO PRIVACY POLICY",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Company reserves the right to revise, amend, modify, or delete any part of this Policy in part or in full at its sole discretion as required by applicable laws.",
          "The updated version of this Policy will be posted on the Platform from time to time."
        ]
      }
    ]
  }
    ]

    return ( 
        <main>
            <Navbar />
            <div className="pageTitle">
                <h1>Privacy Policy</h1>
            </div>

            <InfoDisplay data={data} />

            <Suspense fallback={<div>Loading...</div>}>
                <LeadForm />
            </Suspense>
            
            <Footer />
        </main>
     );
}

export default Policy;