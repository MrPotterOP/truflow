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
          "Amplicomm Solutions Private Limited (“Company” or “us”) recognizes the importance of protecting the privacy of information provided to us. Your privacy is very important to us. This privacy policy (“Policy”) applies to your use of our software and the services related to it (“Services”) offered on the Company's website at [•] (“Site”). The Site and the Services jointly constitute to be the platform of the Company (“Platform”).",
          "This Policy read with the Terms and Conditions describe our practices with respect to your use of our Platform.",
          "Any words referred to in this document in the uppercase shall be deemed to have the meaning ascribed to it in the Terms and Conditions."
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
          "The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“IT Rules”) specifies the rules and regulations pertaining to “Personal Information” and “Sensitive Personal Data or Information” in India:",
          "Rule 2(i) of the IT Rules - “Personal Information'' shall mean any information that relates to a natural person, which either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such a person such as name, address, contact number, email address, etc. and such other information as may be classified from time to time as “Personal Information” in accordance with the IT Rules.",
          {
            "text": "Rule 3 of the IT Rules - “Sensitive Personal Data or Information” shall mean such personal information which consists of information relating to:",
            "subItems": [
                "Password;",
                "Financial information such as bank account or credit card or debit card or other payment instrument details;",
                "Physical, physiological and mental health condition;",
                "Sexual orientation;",
                "Medical records and history;",
                "Biometric information;",
                "Any detail relating to the above clauses as provided to a body corporate for providing service; and",
                "Any of the information received under above clauses by a body corporate for processing, stored or processed under lawful contract or otherwise.",
                "However, any information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as Sensitive Personal Data or Information.",
            ]
          }
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
          {
            "text": "The Company may collect the following information:",
            "subItems": [
                "Full name and/or name of the entity you represent;",
                "Contact information including email address;",
                "Postal address;",
                "Company registration information;",
                "Bank account details;",
                "Login information including account number, password;",
                "Social media account information;",
                "Online information such as customer surveys and offers;",
                "Documents for identity verification;",
                "Other information relevant to customer surveys and / or offers.",
                "Any other relevant information for providing effective Services",
            ]
          }, 
          
          "The Company shall not be liable for any deficiencies in Services due to incomplete or inaccurate information provided by you."
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
          "The Personal Information collected by and through the Platform may be used by the Company, its holding companies, subsidiaries and affiliates or other entities engaged in providing the Services.",
          {
            "text": "The Personal Information may be used for the following purposes:",
            "subItems": [
                "Provision of Services. The Company uses your Personal Information to build a comprehensive ecommerce strategy for you, to assist you in marketing and enhancement of your business or brand value online, to process payments, communicate with you about your requirements and promotional offers and to provide such other Services in relation thereto.",
                "Provide, troubleshoot and improve the Services. The Company uses your Personal Information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Services.",
                "Comply with the applicable laws. In certain cases, the Company collects and uses your Personal Information to comply with the applicable laws. For instance, the Company collects from you information regarding place of establishment and bank account information for identity verification and other purposes.",
                "Communicate with you. The Company uses your Personal Information to communicate with you in relation to Services via different channels (e.g. by phone, email, chat).",
                "Advertising. The Company uses your Personal Information to display interest-based advertisements for features and Services that might be of interest to you."
            ]
          }
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
          "You may withdraw this consent at any time by notifying us at [•] or by writing to us at AmpliComm Solutions Private Limited, Plot No. 416, Sind Co-Op. Hsg. Society, Aundh, Pune 411007, Maharashtra, India. However, in case you withdraw your consent, the Company may, without prejudice to any other rights available with it, terminate your account and it shall not be liable for any consequences arising therefrom."
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
          "The Company takes commercially reasonable steps to protect your Personal Information when you transmit it from your computer to the Platform and protect such information from loss, misuse, unauthorized access, disclosure, alteration or destruction.",
          "The Personal Information is stored on [•].",
          "It is your responsibility to take special care while deciding what information is sent to us via email as emails sent to and from the Platform might not be 100% secure."
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
          "You shall not use the Platform for any purpose that is inconsistent with the Services and you shall be bound by the Terms and Conditions."
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
          "The Company does not sell, share, rent or trade the information it has collected about you, other than as disclosed within this Policy.",
          "The Company may share your information with third parties for marketing purposes and for the purpose of providing the Services.",
          "If you post any content on the Platform, such content may be viewed by all the users and may be publicly distributed outside the Platform in perpetuity.",
          "The Company uses or may use third party service providers to help it deliver certain aspects of the Services including but not limited to application development, hosting, maintenance, cloud storage facilities, virtual infrastructure, analysis, providing geolocation services, processing payments and such other similar services.",
          "The Company only allows third party service providers to process your Personal Information for specified purposes in accordance with its instructions and does not permit them to use your Personal Information for their own purposes. The agreements of the Company with third parties permit them to use the Personal Information only for providing their services and are generally not used for purposes other than as disclosed in this Policy. In case any agreement is signed with the third parties for any purpose other than as disclosed in this Policy, the Company shall intimate you from time to time.",
          "The Company may disclose your Personal Information to law enforcement authorities, regulators, governmental or public bodies and other relevant third parties to comply with any legal or regulatory requirements. The Company may also disclose information about you, if it determines that disclosure is reasonably necessary to enforce its Terms and Conditions or protect its operations or users.",
          "Further, the Company may share your information, including but not limited to your Personal Information, area of operation and business details on its Platform or with its parent companies, subsidiaries and affiliates for internal reasons, including business and operational purposes.",
          "In the interest of doing business with other users, you may choose to share additional Personal Information directly with such users while connecting off the Platform or through such features as may be provided on the Platform. The Company shall not be responsible for such disclosures or any unauthorized use of such information that you choose to make available to these users at your free will.",
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
         "The Company will only retain your Personal Information for as long as it is necessary to fulfill the purposes, the Company collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements, resolve disputes, conclude any activities related to cancellation of a user account, investigate, or prevent fraud and other inappropriate activity, to enforce our agreements and for other business reasons.",
         "The Company retains your account information for as long as your account is active and thereafter for a continuous period. In case of user account deactivation or disablement, some of your information and the content provided by you will be retained in order to enable other users to make full use of the Services.",
         "Further, any third party may retain the Personal Information for as long as it is necessary under the applicable law.",
         "To determine the appropriate retention period for the Personal Information, the Company considers the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your Personal Information, the purposes for which the Company processes your Personal Information and whether the Company can achieve those purposes through other means and the applicable legal requirements."
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
          "You will have the right to review the Personal Information and make corrections or rectifications, request data blocking where applicable or object, for legitimate reasons, to the processing of their Personal Information. However, the Company shall not be responsible for any interruption in or suspension of the Services on account of such corrections or rectifications."
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
          "The Company collects domain names and IP addresses of its visitors for statistical purposes, to measure use, to approximate user location, to improve the content or responsiveness of the Platform, or to customize the content or layout of the Platform for the individual visitor.",
          "The Company may also aggregate information relating to its visitor’s traffic patterns from the data that it collects and retains concerning the IP addresses and domain names of its visitors."
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
            "The Company requires information about user sign ups and current location, which it gets from signals such as users IP address or device settings, to securely and reliably set up and maintain user accounts and to provide its Services to you.",
            "Subject to users settings, the Company may collect, use and store additional information about your location - such as your current precise position or places where they have previously used the Services, to authenticate user log in, provide customer support and operate and maintain the Services."
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
          "The Company uses cookies to identify which pages are being used, whether you are subsequently visiting the Platform. This helps us analyze data about webpage traffic and improve our Platform in order to tailor it to customer needs. The Company uses this information for statistical analysis purposes, to understand your preferences, to retarget advertisements and then the data is removed from the system.",
          "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of the Platform."
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
          "The Platform may contain links to other third-party sites.",
          "This Policy does not apply to the privacy practices and policies of those sites and you shall read the policies, terms and conditions of those sites before accessing, browsing and/or using the said third-party sites."
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
          "The Platform is created and maintained by a reputed web hosting service provider. The Platform is protected and kept secured by using commercially reasonable security practices.",
          "The Company makes no express representation or warranty as to whether the information you transmit to the Platform will be intercepted by, or otherwise be received by, an unauthorized third party and you transmit such information at your own risk. The Company shall have no liability in respect of any content posted by you on the Platform or on the direct messages.",
          "The Company shall not be liable for any loss of information whatsoever caused whether as a result of any interruption, suspension or termination of the Platform or otherwise.",
          "The Company shall not be held liable for any loss of data technical or otherwise, information, particulars supplied by you due to the reasons beyond its control like corruption of data or delay or failure to perform as a result of any causes or conditions that are beyond its control including but not limited to strike, riots, civil unrest, government policies, tampering of data by unauthorized persons like hackers, war and other natural calamities.",
          "The Company assumes no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access or other causes beyond our control. You play an important role in keeping your Personal Information secure."
        ]
      }
    ]
  },
  {
    "id": "grievanceOfficer",
    "title": "GRIEVANCE OFFICER",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "In compliance with the Information Technology Act, 2000 the amendments thereto and the Rules framed thereunder, the Company has designated a Grievance Officer for redressal of all your grievances. The Grievance Officer will respond to all grievances expeditiously and in any case not later than 15 (fifteen) days from the date of receipt of any grievance.",
          {
            "text": "Any complaints or request or concerns with regards to use, processing or disclosure of information provided by you or breach of these terms may be taken up with the designated Grievance Officer as mentioned below:",
            "subItems": [
              "Details of the Grievance Officer:",
              "Name: [•]",
              "Address: AmpliComm Solutions Private Limited, Plot No. 416, Sind Co-Op. Hsg. Society, Aundh, Pune 411007, Maharashtra, India.",
              "Phone No.: [•]",
              "Email: [•]"
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
          "This Policy shall be governed by and construed in accordance with the laws of India. Subject to Clause 18 of this Policy, the disputes that might arise between you and the Company shall have the jurisdiction and venue of the Courts in Pune, Maharashtra."
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
          "Any claims, dispute and or difference (including a dispute regarding the existence, validity, interpretation or alleged breach of the Policy) arising out of, or relating to this Policy shall be referred for arbitration to a sole arbitrator under the provisions of Arbitration and Conciliation Act, 1996 and the amendments thereto from time to time. The venue of Arbitration shall be at Pune, Maharashtra and the language shall be English."
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
            "The Company reserves its right to add, revise, amend, modify, or delete any part of this Policy (in part or in full) at its sole discretion or as required by applicable law.",
            "The updated version of this Policy in force will be posted on the Company's Platforms from time to time."
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