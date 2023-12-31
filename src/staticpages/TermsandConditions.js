import React from "react";
import Header from "../shared-components/header/header"
import Footer from "../shared-components/footer/footer"

const TermAndCondition = () => {

    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};

    return <>
        <Header
            userDetails={userDetails}
        />
        <div className="row m-0 term_and_condition_page">
            <div className="col-0 col-md-1"></div>
            <div className="col-12 col-md-10">
                <div className="b">
                    <p>
                        <strong>Terms and Conditions</strong>
                    </p>
                    <p>
                        This agreement is entered into and considered effective as of the earlier of the date you, or, if you represent an entity or other organization, that entity or organization (in either case “You”) first access or use Instadent or when You create an account with Instadent.
                    </p>
                    <p>
                        Instadent is the owner of this website, Instadent applications, and all other Instadent services. Throughout the Terms of Service, Instadent may be referred to as “us” or “we” or “our”.
                    </p>
                    <p>
                        A “Member” is someone who has registered with Instadent. A Member can create an “Account”, which is an online representation of the Member, which may contain Personally Identifiable Information (as defined in the Privacy Policy) regarding that Member.
                    </p>
                    <p>
                        <strong>What Is The Instadent Service?</strong>
                    </p>
                    <p>
                        The Instadent Service enables You to check product prices and create shopping lists, search for products as well as use other features related to creating a dentistry list on multiple computer devices and mobile applications. In exchange for being enabled to use the Service, You agree to abide by these&nbsp;Terms.
                    </p>
                    <p>
                        <strong>Who May Use The Instadent Platform?</strong>
                    </p>
                    <p>
                        The Platform is designed and offered for use by adults only. The Platform is not intended for individuals under the age of 18 nor is the Platform intended for anyone who does not meet any of the other qualifications included in these Terms.
                    </p>
                    <p>
                        <strong>Will These Terms Of Service Ever Change?</strong>
                    </p>
                    <p>
                        Changes in these Terms are almost certain to happen, due to changes in our Platform and the laws that apply to Instadent and You. If we make a change, we’ll make reasonable efforts to provide You with advance notice. Any update to these Terms will become effective 30 days after the changes are enacted. We’ll announce changes here at our site, and we also may elect to notify You of changes by sending an email to the address You have provided to us.<br />If we do update these Terms, You are free to decide whether to accept the updated terms or to stop using our Platform; Your continued use of the Platform after the effectiveness of that update will be deemed to represent Your agreement with, and consent to be bound by, the new Terms. If You do not agree with the new Terms, You may cancel Your service at any time.
                    </p>
                    <p>
                        <strong>What Do I Have To Do To Use the Instadent Service?</strong>
                    </p>
                    <p>
                        First, You need to create a Instadent Account. You create an Account by providing us with an mobile number which already associated with the WhatsApp and required to fill the “OTP” with same number also you fill the Name, email id, address (collectively “Account Information”).You are responsible for maintaining the accuracy, completeness and confidentiality of Your Account Information, and You will be responsible for all activities that occur under Your account, including activities of others to whom You have provided Your Account Information. We will not be liable for any loss or damage arising from Your failure to provide us with accurate information or to keep Your Account Information secure
                    </p>
                    <p>
                        Second, You will need to access Your account through a web browser. Obtaining a mobile device and paying for their connectivity and data plans is Your responsibility. Instadent has no responsibility for the availability of the Internet and other telecommunication services necessary to access the Service.
                    </p>
                    <p>
                        <strong>Can I Share My Account?</strong>
                    </p>
                    <p>
                        Sharing of Instadent Accounts is prohibited. If You share Your Account Information with anyone, that other person may be able to take control of the account, and we may not be able to determine who is the proper Account holder. We will not have any liability to You (or anyone You share Your Account Information with) as a result of Your or their actions under those circumstances. Since You may use a free Service account, and since we provide a number of mechanisms to allow You to share Your account Content with others, we strongly urge You not to share Your Account Information with anyone.
                    </p>
                    <p>
                        <strong>Once I Have An Account, What Are My Rights with Instadent?</strong>
                    </p>
                    <p>
                        Once Your account is created and You accept these Terms, we grant You a limited, non-exclusive license to use the Platform subject to these Terms, for so long as You are not barred from receiving the Service or using the Applications under the laws applicable to You, until You close Your account voluntarily or until we close Your account pursuant to these Terms. In addition, we grant You a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the Instadent Platform provided to You by or on behalf of Instadent, for the sole purpose of enabling You to use the Instadent Platform and enjoy the benefit of the Service, subject to any applicable license terms provided with the Instadent Platform and these Terms, until Your rights are terminated in accordance with such license and/or these Terms. You do not obtain any other right or interest in Instadent or any part of the Platform.
                    </p>
                    <p>
                        Finally, You understand and agree that Instadent, in performing the required technical steps to provide the Service and Applications to our users, may make any changes Instadent deems necessary to conform and adapt that Content to the technical requirements of connecting networks, devices, services or media.
                    </p>
                    <p>
                        <strong>Are There Rules About Content I Submit to Instadent?</strong>
                    </p>
                    <p>
                        Yes. Your use of the Platform must be in accordance with these Terms. When it comes to Your use of the Platform, You agree that You are responsible for Your own conduct and all conduct under Your account. This means all content – including price updates, text, images, software, videos and anything else You can think of, no matter what the form or technical structure (collectively, “Content”) – created, transmitted, stored or displayed in Your account, is Your sole responsibility as the person who created the Content or introduced it into the Platform. This applies whether the Content is kept private, shared or transmitted using the Platform or any third party application or services. If we find that any shared Content in Your account violates our Terms of Service (including by violating another person’s intellectual property rights), we reserve the right to remove such content.<br />You agree that You will not upload, post or otherwise transmit any Content that:
                    </p>
                    <ul>
                        <li>violates any local, state, federal, or international laws;</li>
                        <li>infringes on any patent, trademark, trade secret, copyright or other proprietary rights of any party;</li>
                        <li>harms, threatens, defames, promotes violence or illegal activities, or is otherwise vulgar, obscene, abusive, harassing, tortuous, libelous, invasive of another’s privacy, hateful, or racially, ethically or otherwise objectionable;</li>
                        <li>links directly or indirectly to any materials to which You do not have a right to link;</li>
                        <li>contains any private information of any third party, including, without limitation, addresses, phone numbers, email addresses, government issued tax or identification numbers and credit card numbers;</li>
                        <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment, or to extract information from Instadent;</li>
                        <li>contains any unsolicited or unauthorized advertising, solicitations, promotional materials, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” or any other form of solicitation;</li>
                        <li>You do not have a right to transmit under any law (e.g. intellectual property laws) or under contractual or fiduciary relationships (e.g. non-disclosure Agreements); or<br />in the sole judgment of Instadent, is objectionable or which restricts or inhibits any other person from using or enjoying Instadent, or which may expose Instadent, our affiliates, or our Users to any harm or liability of any type.</li></ul>
                    <p>
                        You are responsible for complying with all applicable laws, including trademark and copyright laws with respect to all Content created, transmitted, stored, or displayed in Your account. By using Instadent and agreeing to these Terms You warrant that You will not use Instadent to infringe the intellectual property rights of others in any way. In accordance with the DMCA and other applicable laws, we may, in our sole discretion, remove or disable Content claimed to be the subject of infringement or other activity, or we may terminate Your account.
                    </p>
                    <p>
                        <strong>What are the Terms of Service?</strong>
                    </p>
                    <p>
                        The Terms of Service constitutes a contract between Instadent and You and governs Your use of Instadent mobile and online applications (“Applications”), the services provided through the Applications or our website (the “Service”), or any other part of our business (collectively the “Platform”). Instadent is a dba of Vasa Denticity Pvt Ltd. The provisions set forth in this document and other terms or conditions that may be presented by us and accepted by You from time to time in connection with use of the Instadent Platform (all of which we collectively refer to as the “Terms of Service” or “Terms”) shall constitute the contract between You and us. If You do not agree to these Terms, You do not have the right to access, use or purchase our Applications or Services. If You do register for or otherwise use the Platform, or purchase any Service from Instadent, You shall be deemed to have accepted the Terms and to have agreed to be a party to this binding contract.<br />By using any part of the Instadent Platform You acknowledge, accept and agree to all provisions of the Privacy Policy, including, without limitation, the use and treatment of Your Account Information and Your Content in accordance with such Privacy Policy.
                    </p>
                    <p>
                        <strong>Are There Other Restriction To My Use?</strong>
                    </p>
                    <p>
                        You may not use Instadent to:
                    </p><ul>
                        <li>develop a competing website or mobile application or help anyone else to do the same;</li>
                        <li>use bots, spiders, crawlers or other scraping techniques to steal Instadent content;</li>
                        <li>re-distribute it in any manner, including, but not limited to, sale, license, lease, rental, subscription, or any other distribution mechanism;</li>
                        <li>disassemble or reverse engineer Instadent; or</li>
                        <li>use Instadent in any manner that violates our Terms or any local, state, federal, or international laws.</li></ul>
                    <p>
                        <strong>Intellectual Property Rights.</strong>
                    </p>
                    <p>
                        In agreeing to these Terms, You also agree that the rights in the Instadent Platform, including all intellectual property rights, such as trademarks, patents, industrial designs, logos, symbols and copyrights, are protected by one or more of copyright, trademark, patent, trade secret and other laws, regulations and treaties, in addition to these Terms and any separate agreement. In particular, You agree to not modify, create derivative works of, decompile or otherwise attempt to extract source code from any Instadent software, unless You are expressly permitted to do so under an open source license or we give You express written permission. The Instadent trademark is licenced from Instadent IP, LLC. All Instadent trademarks are registered to and property of Instadent IP, LLC. You may not use the Instadent name or trademarks without the express written consent of Instadent IP, LLC.
                    </p>
                    <p>
                        <strong>Right to Modify the Platform.</strong>
                    </p>
                    <p>
                        We retain the right, in our sole discretion, to implement new elements as part of and/or ancillary to the Instadent Platform, including changes that may affect the previous modes of operation of the Platform. We expect that any such modifications will enhance the overall Service, but it is possible that You may not agree with us. We also reserve the right to establish limits to the nature or size of storage available to You, the number of items on Your shopping list or Your continued ability to access or share Your Content and other data, and impose other limitations at any time, with or without notice.
                    </p>
                    <p>
                        <strong>Right to Engage Third Parties.</strong>
                    </p>
                    <p>
                        Instadent may from time to time engage certain affiliates or other third parties to provide technical or other services relating to all or part of the Platform, or perform certain functions associated with the operation of the Instadent features and You hereby agree that such third party involvement is acceptable.<br />Right to Update Our Software.<br />In connection with any modification of any part of the Platform, Instadent may automatically download software updates on Your computers and devices from time to time with the intention of improving, enhancing, repairing and/or further developing the Platform. Instadent will attempt to provide You with the option of whether or not to install the update; however, in certain circumstances (e.g., security risks), Instadent may require You to install the update to continue accessing the Platform. In all cases, You agree to permit Instadent to deliver these updates to You (and for You to receive them) as part of Your use of the Platform.
                    </p>
                    <p>
                        <strong>How Does Instadent Respond To Copyright Or Other Intellectual Property Violations?</strong>
                    </p>
                    <p>
                        We respond to clear and complete notices of alleged infringement of copyright, trademark or other intellectual property laws. If You believe that Your intellectual property rights have been violated, please notify us and we will investigate. You may mail Your notification to: Email- Contact@instadent.in<br />Khasra No. 714, Village, P.O.- Chattarpur, Opp. DLF Gate No.-2, Near Geetanjali Salon New Delhi, India, 110074
                    </p>
                    <p>
                        Please provide the following information to Instadent in Your notification regarding suspected violation of intellectual property rights:<br />1. The identity of the infringed work, and of the allegedly infringing work;<br />2. Your name, address, daytime phone number, and email address, if available;<br />3. A statement that You have a good-faith belief that the use of the copyrighted work is not authorized by the owner, his or her agent, or the law;<br />4. A statement that the information in the notification is accurate and, under penalty of perjury, that You are authorized to act on behalf of the owner; and<br />5. Your electronic or physical signature.
                    </p>
                    <p>
                        Note that each owner of intellectual property is responsible for protecting their rights and taking any legal or other action they determine to be appropriate to do so, and Instadent does not accept any obligation to take any particular action to enforce or protect any party’s intellectual property rights.
                    </p>
                    <p>
                        <strong>Does Instadent Serve Ads?</strong>
                    </p>
                    <p>
                        We may display advertisements and promotions on or in connection with any part of the Instadent Platform, some of which may be paid for by third parties. We also provide announcements on the Instadent Platform. These messages may promote other Instadent products and services (including premium Instadent features) notify You of events, demonstrate various uses of our Platform and promote certain third party applications and services that work with Instadent. For more information, please see our Privacy Policy page.
                    </p>
                    <p>
                        In as much as some advertising or other messaging content we provide will be based upon information provided by third parties, we shall not be responsible or liable for any loss or damage of any sort incurred by You as a result of any advertisements or other messages. Furthermore, Your interactions with advertisers found on or through the Platform, including, without limitation, all reliance upon advertising, all commercial transactions and legal obligations associated therewith, are solely between You and such advertisers.<br />Third-Party Links, Content and Programming.
                    </p>
                    <p>
                        We may include or recommend third party resources, materials and developers and/or links to third party websites, content and applications as part of, or in connection with, the Service. We may have little or no control over such sites or developers and, accordingly, You acknowledge and agree that (i) we are not responsible for the availability of such external sites, content or applications; (ii) we are not responsible or liable for any content or other materials or performance available from such sites or applications; and (iii) we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, materials or applications.
                    </p>
                    <p>
                        <strong>Indemnity.</strong>
                    </p>
                    <p>
                        You agree to indemnify and hold Instadent, its subsidiaries, affiliates, officers, agents, employees, advertisers and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including legal and other professional fees) arising from or in any way related to any third party claims relating to Your use of any of the Platform, any violation of these Terms of Service or any other actions connected with Your use of the Platform (including all actions taken under Your Account). In the event of such claim, we will provide notice of the claim, suit or action to the contact information we have for the account, provided that any failure to deliver such notice to You shall not eliminate or reduce Your indemnification obligation hereunder.
                    </p>
                    <p>
                        <strong>Limitation of Liability.</strong>
                    </p>
                    <p>
                        To the maximum extent permitted by law, the Platform is available “As Is.” YOU EXPRESSLY UNDERSTAND AND AGREE THAT:<br />(a) YOUR USE OF THE PLATFORM AND THE PURCHASE AND USE OF ANY PRODUCTS OR SERVICES ARE ALL AT YOUR SOLE RISK. THE PLATFORM IS PROVIDED AND PRODUCTS ARE SOLD ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, Instadent EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.<br />(b) Instadent DOES NOT WARRANT THAT (i) THE PLATFORM WILL MEET ALL OF YOUR REQUIREMENTS; (ii) THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; OR (iii) ALL ERRORS IN THE PLATFORM WILL BE CORRECTED.<br />(c) ANY MATERIAL DOWNLOADED, PRODUCTS AND SERVICES PURCHASED FROM THE Instadent STORE OR OTHERWISE OBTAINED THROUGH THE USE OF THE PLATFORM IS DONE AT YOUR OWN DISCRETION AND RISK AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER OR OTHER DEVICE OR LOSS OF DATA RESULTING FROM THE DOWNLOAD OR USE OF ANY SUCH MATERIAL.<br />(d) NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM Instadent OR THROUGH OR FROM THE PLATFORM SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS OF SERVICE.<br />YOU EXPRESSLY UNDERSTAND AND AGREE THAT Instadent, ITS SUBSIDIARIES, AFFILIATES AND LICENSORS, AND OUR AND THEIR RESPECTIVE OFFICERS, EMPLOYEES, AGENTS AND SUCCESSORS SHALL NOT BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, COVER OR OTHER INTANGIBLE LOSSES (EVEN IF Instadent HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE PLATFORM; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, PRODUCTS, DATA, INFORMATION OR SERVICE PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE PLATFORM; (iii) UNAUTHORIZED ACCESS TO OR THE LOSS, CORRUPTION OR ALTERATION OF YOUR TRANSMISSIONS, CONTENT OR DATA; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OR USING THE PLATFORM, OR PROVIDING ANY SERVICES RELATED TO THE OPERATION OF THE PLATFORM OR RELATED TO THE Instadent PREMIUM FEATURES; (v) Instadent’S ACTIONS OR OMISSIONS IN RELIANCE UPON YOUR ACCOUNT INFORMATION AND ANY CHANGES THERETO OR NOTICES RECEIVED THEREFROM; (vi) YOUR FAILURE TO PROTECT THE CONFIDENTIALITY OF ANY PASSWORDS OR ACCESS RIGHTS TO YOUR ACCOUNT INFORMATION; (vii) THE ACTS OR OMISSIONS OF ANY THIRD PARTY USING OR INTEGRATING WITH THE PLATFORM OR OFFERING PRODUCTS IN THE Instadent STORE; (viii) ANY ADVERTISING CONTENT OR YOUR PURCHASE OR USE OF ANY ADVERTISED OR OTHER THIRD-PARTY PRODUCT OR SERVICE; (ix) THE TERMINATION OF YOUR ACCOUNT IN ACCORDANCE WITH THE TERMS OF THESE TERMS OF SERVICE; OR (x) ANY OTHER MATTER RELATING TO THE Instadent PLATFORM.<br />WITHOUT LIMITING ANY OTHER PROVISION IN THE TERMS, YOU ACKNOWLEDGE THAT NOTHING CONTAINED IN Instadent SHALL CONSTITUTE A WARRANTY OR GUARANTEE WITH REGARD TO THE PRICING INFORMATION WE PROVIDE. NO PROFESSIONAL RELATIONSHIP OF ANY KIND IS CREATED BETWEEN YOU AND Instadent OR ITS MEMBERS. Instadent IS FOR INFORMATIONAL PURPOSES ONLY.
                    </p>
                    <p>
                        <strong>Exclusions and Limitations.</strong>
                    </p>
                    <p>
                        NOTHING IN THESE TERMS OF SERVICE (INCLUDING THE LIMITATION OF LIABILITY PROVISIONS) IS INTENDED TO EXCLUDE OR LIMIT ANY CONDITION, WARRANTY, RIGHT OR LIABILITY WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR CONDITIONS OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR LOSS OR DAMAGE CAUSED BY WILLFUL ACTS, NEGLIGENCE, BREACH OF CONTRACT OR BREACH OF IMPLIED TERMS, OR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, ONLY THOSE LIABILITY AND OTHER LIMITATIONS WHICH ARE LAWFUL IN YOUR JURISDICTION (IF ANY) WILL APPLY TO YOU AND OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                    </p>
                    <p>
                        Claims Are Time-Barred.
                    </p>
                    <p>
                        You agree that regardless of any statute or law to the contrary or the applicable dispute resolution process, any claim or cause of action You may have arising out of or related to use of the Platform or otherwise under these Terms must be filed within one (1) year after such claim or cause of action arose or You hereby agree to be forever barred from bringing such claim.
                    </p>
                    <p>
                        THE PROVISIONS OF THIS SECTION, ENTITLED “CLAIMS ARE TIME-BARRED” SHALL BE DEEMED TO CONSTITUTE A SEPARATE WRITTEN LEGALLY BINDING AGREEMENT BY AND BETWEEN YOU AND Instadent.
                    </p>
                    <p>
                        <strong>Termination of Your Account.</strong>
                    </p>
                    <p>
                        If You violate any of the provisions of these Terms, we reserve the right to terminate Your Account with or without notice to You. You may also voluntarily terminate Your Account and cancel the free Service by deleting the app from Your mobile device.
                    </p>
                    <p>
                        We do our best to provide accurate, timely information about products sales, prices and coupons. If You find an error in a store sale price or base pricing, please contact us so we can correct it. Due to the nature of the sales and fluctuations in base pricing, we aim to provide You with the most up to date and accurate data, however we do not represent or otherwise warrant that anything available on or through our Platform will be 100% correct, accurate, timely or otherwise reliable. We may make changes to the Instadent Platform at any time. We reserve the right in our sole discretion to edit or remove any documents, information or other content appearing on the Instadent website, Application, or anywhere else on the Instadent Platform.
                    </p>
                    <p>
                        Content Disclaimer.
                    </p>
                    <p>
                        Instadent is not responsible or liable in any manner for any Content posted on the Instadent website, Application, or anywhere else on the Platform whether posted or caused by Members or by Instadent. Although we provide rules for Member conduct and postings, we do not control and are not responsible for what Members post, transmit or share on our Platform, and are not responsible for any offensive, inappropriate, obscene, unlawful or otherwise objectionable Content You may encounter while using Instadent. Instadent is not responsible for the conduct, whether online or offline, of any user of Instadent.
                    </p>
                    <p>
                        Reference to any products, service, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof, or any affiliation therewith, by Instadent, by third parties or by any of the equipment or programming associated with or utilized by Instadent. All trade names, trademarks and service marks that appear on the Service are the property of their respective owners. &nbsp;
                    </p>
                    <p>
                        <strong>Unlawful Activity.</strong>
                    </p>
                    <p>
                        We reserve the right to investigate complaints or reported violations of our Terms and to take any action we deem appropriate, including but not limited to terminating Your Member Account, reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties and disclosing any information necessary or appropriate to such persons or entities relating to Your profile, email addresses, usage history, posted materials, IP addresses and traffic information.
                    </p>
                    <p>
                        <strong>Links to Other Websites.</strong>
                    </p>
                    <p>
                        Our website and Applications may, from time to time, contain links to third party websites. These links are provided solely as a convenience to You. By linking to these websites, we do not create or have an affiliation with, or sponsor such third party websites. Inclusion of links for any website on our Platform does not mean that we endorse, guarantee, warrant, or recommend the services, information, content and/or data of such third party websites. Instadent has no control over the legal documents and privacy practices of third party websites; as such, You access any such third party websites at Your own risk.
                    </p>
                    <p>
                        <strong>Arbitration</strong>
                    </p>
                    <p>
                        Any legal controversy or legal claim arising out of or relating to our Terms or the Instadent Platform, excluding legal action taken by us to collect or recover damages for or obtain any injunction relating to Your violation of our Terms, shall be settled solely by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. To the extent permitted by law, any such controversy or claim shall be arbitrated on an individual basis and not as part of any purported class or representative action or proceeding, and shall not be consolidated in any arbitration with any claim or controversy of any other party. The arbitration shall be conducted in Denver, Colorado, USA, and judgment on the arbitration award may be entered into any court having competent jurisdiction thereof. Either You or we may seek any interim or preliminary relief from a court of competent jurisdiction in the State of Colorado, United States, necessary to protect the rights or property of You and Instadent pending the completion of arbitration. Each party shall bear one-half of the arbitration fees and costs.
                    </p>
                    <p>
                        <strong>Notices.</strong>
                    </p>
                    <p>
                        Khasra No. 714, Village, P.O.- Chattarpur, Opp. DLF Gate No.-2, Near Geetanjali Salon New Delhi, India, 110074
                    </p><p>&nbsp;
                    </p><p><strong>USE OF MATERIALS</strong>
                    </p><p>Except as expressly indicated to the contrary in any applicable Additional Terms, Company hereby grants You a personal, non-exclusive, freely revocable (upon notice from Company), non-transferable access to view, download and print product catalogues or any other materials available on the Website, subject to the following condition:
                    </p><ul>
                        <li>You may access and use the materials solely for personal, informational, and internal purposes, in accordance with the Terms; You may not modify or alter Product catalogues or any other materials available on the Website;</li>
                        <li>You may not distribute or sell, rent, lease, license or otherwise make the Product catalogues or any other materials available on the Website available to others; and</li>
                        <li>You may not remove any text, copyright or other proprietary notices contained in the Product catalogues or any other materials available on the Website.</li></ul><p>The limited rights granted to You in the Product catalogues, or any other materials as specified above do not confer upon You any rights to the design, layout or look and feel of the Website. Such elements of the Website are protected by intellectual property rights and may not be copied or imitated in whole or in part. The Product catalogues or any other materials available on the Website shall not be copied or retransmitted unless expressly permitted by Company. Any software that is available on the Website is the property of Company or third parties. You may not use, download or install any software available at the Website, unless otherwise expressly permitted by these Terms or by the express written permission of Company.<br />Any purchase of the merchandise or Services from the Website will be strictly for personal use of the User. The User hereby expressly agrees that any merchandize, or Services purchased by the User will not be sold, resold, bartered or in any way be used for any commercial purposes or for profit. The User hereby acknowledges that the Services or merchandize purchased are not transferrable to any third party for profit
                    </p></div>
            </div>
            <div className="col-0 col-md-1"></div>
        </div>

        <Footer />

        <style >
            {`
        
        .term_and_condition_page{
            margin-top: 120px !important;
        }

        `}
        </style>
    </>

}

export default TermAndCondition;