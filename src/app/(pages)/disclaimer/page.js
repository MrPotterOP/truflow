import Footer from "@/app/components/Sections/Footer/Footer";
import LeadForm from "@/app/components/Sections/LeadForm/LeadForm";
import Navbar from "@/app/components/Sections/Navbar/Navbar";
import InfoDisplay from "@/app/components/UI/Info/InfoDisplay";

import {Suspense} from "react";

function Disclaimer() {



  const legalInfoData = [
  {
    "id": "general",
    "title": "GENERAL",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Amplicomm Solutions Private Limited (“Company”) offers the complete e-commerce business strategy and execution including online brand building, website enhancement recommendations, marketplace listing and operations management, digital performance marketing, SEO, reporting and customized technology solutions that may be developed by it from time to time in order to provide its Services through the Platform."
      },
      {
        "type": "paragraph",
        "text": "The Company maintains appropriate written internal policies and control procedures for governing the Platform."
      },
      {
        "type": "paragraph",
        "text": "The following “Disclaimers” shall apply to Information (as defined below) collected on and Services provided by the Company on/through the Platform:"
      }
    ]
  },
  {
    "id": "noWarranties",
    "title": "NO WARRANTIES",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "The Information provided on the Platform is provided on an “as is” basis. The Company and its associates, group companies, directors, employees, agents or representatives make no representations or warranties express or implied in relation to the Platform, Information or results provided on the Platform.",
          {
            "text": "The Company disclaims all responsibility for any loss, injury, liability or damage of any kind resulting from and arising out of, or in any way related to:",
            "subItems": [
              "the Information;",
              "any errors in or omissions from the Platform, Information or results and its content, including but not limited to technical inaccuracies and typographical errors; or",
              "merchantability and fitness for a particular purpose and non-infringement; or",
              "the Platform will be constantly available, or available at all; or",
              "the unavailability of this Platform or any portion thereof; or",
              "use of any equipment or software in connection with the Platform; or",
              "use of the Platform; or",
              "the Information and the results on the Platform are suitable for the intended purposes."
            ]
          }
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
          "Neither, the Company nor any of its associates, group companies, directors, employees, agents or representatives shall assume any responsibility concerning the (i) use of Information or the results for any purpose; (ii) for any loss or damage that may arise to any person from any inadvertent error in the Information or its results contained on the Platform; (iii) any claim, threatened claim, suit, proceedings, legal action and/or damages including but not limited to claims relating to the Information, merchantability of the Platform, use for a particular purpose, guarantee, warrantee or violation of intellectual property rights of any third party due to the Information; (iv) loss of Information caused whether as a result of any interruption, suspension or termination of the Platform or otherwise and (v) for any damages whether direct, indirect, special, incidental or consequential including loss of revenue or lost profits that may arise from or in connection with the use of the Platform. These limitations shall apply if liability arises from breach of contract, warranty, tort (including without limitation negligence or strict liability), by operation of law, or otherwise.",
          "The Company does not guarantee or warrant the Platform’s accuracy, adequacy, correctness, validity, completeness or suitability for any purpose.",
          "The Company accepts no responsibility with respect to the information or its results on the Platform.",
          "Use of this Platform, by implication, means that the user has gone through and agreed to abide by the Terms and Conditions, Privacy Policy and the Disclaimers of this Platform.",
          "The Company does not represent that the information downloaded from this Platform is completely error-free and accurate."
        ]
      }
    ]
  },
  {
    "id": "miscellaneous",
    "title": "MISCELLANEOUS",
    "blocks": [
      {
        "type": "orderedList",
        "items": [
          "If any provision of this Disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this Disclaimer.",
          "This Disclaimer along with the changes made to it from time to time constitutes the entire understanding between the Company and the user on the subject matter."
        ]
      }
    ]
  }
    ];

    return ( 
        <main>
            <Navbar />
            <div className="pageTitle">
                <h1>Disclaimer</h1>
            </div>

            <InfoDisplay data={legalInfoData}/>
            
            <Suspense fallback={<div>Loading...</div>}>
                <LeadForm />
            </Suspense>

            <Footer />
        </main>
     );
}

export default Disclaimer;