import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/headers";
import React from "react";

const page = () => {
  return (
    <>
      <Header />

      <div className="px-4 py-8 mx-auto max-w-[800px] sm:px-16">
        <h2 className="text-[22px] sm:text-[30px] font-bold">
          Grailed, LLC Terms of Service
        </h2>
        <p className="text-[14px]">
          Welcome to Grailed! We love having you here and are stoked to support
          your style journey. What follows are some ground rules all Grailed
          users must agree to.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] pb-2">
            We want these terms to be easy to understand, so we added some
            simple summaries throughout.
          </p>
          <p className="text-[14px] font-semibold">
            Disclaimer: The summaries are not a part of the Terms. They are
            simply a user-friendly reference to the legal language of our Terms.
          </p>
        </div>
        <p className="text-[14px]">
          If you have any questions about these Terms, please reach out by
          contacting us here. For information about how we collect, use, share
          and otherwise process information about you, please see our{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.grailed.com/about/privacy"
            target="_blank"
          >
            Privacy Notice.
          </a>
        </p>
        <p className="text-[14px] font-semibold py-2"> 1. What is Grailed?</p>
        <p className="py-2 text-[14px]">
          Intro. You are entering into these Terms of Service (the "Terms") with
          Grailed, LLC ("Grailed", "we", "us" or "our").
        </p>
        <p>
          {" "}
          The Grailed <span className="font-bold"> services</span>, including
          the website located at www.grailed.com and the Grailed mobile apps
          (collectively, the <span className="font-bold"> "Services" </span>)
          provide a platform where users can offer, sell, buy, and discover
          products (<span className="font-bold">"Products" </span>). Users who
          purchase Products are called{" "}
          <span className="font-bold"> "Buyers,"</span> and users who sell
          Products are called <span className="font-bold"> "Sellers.</span> "
          When using the Services, Buyers and Sellers enter into a contract for
          the sale and purchase of Products directly between themselves, and
          Grailed is not a party to such sale or purchase.
        </p>
        <p className="text-[14px] font-semibold py-2">
          {" "}
          2. Accepting the Terms of Service
        </p>

        <p className="text-[14px]">
          Agreement. These Terms are a legally binding contract between you and
          Grailed and apply to your use of all Services. By creating an account
          or by using our Services in any manner, you agree to these Terms. In
          addition, when using certain parts of the Services, you may be subject
          to additional applicable terms, policies or guidelines that may be
          posted on the Services from time to time. All such terms, policies and
          guidelines are incorporated by reference into these Terms. Please read
          all such terms, policies and guidelines carefully.
        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            Buying, selling, or just browsing is how you agree to be bound by
            these Terms. You can only use Grailed if you agree to these Terms.
            These Terms protect Grailed from legal risk but also provide
            protection for you and set out ground rules that help Grailed stay a
            safe and friendly place.
          </p>
        </div>
        <p className="text-[16px] font-bold">
          IF YOU DO NOT AGREE TO THESE TERMS IN THEIR ENTIRETY, DO NOT USE OUR
          SERVICES.
        </p>
        <p className="text-[16px] font-bold">
          <span className="underline underline-offset-4 font-normal">
            Arbitration Notice.{" "}
          </span>{" "}
          PLEASE READ THE MANDATORY ARBITRATION PROVISION (TO THE EXTENT LEGALLY
          ALLOWED IN YOUR JURISDICTION) IN SECTION 20, WHICH REQUIRES THAT
          DISPUTES BE RESOLVED BY FINAL AND BINDING ARBITRATION ON AN INDIVIDUAL
          BASIS, NOT A CLASS-WIDE OR CONSOLIDATED BASIS. IF YOU DO NOT WISH TO
          BE SUBJECT TO ARBITRATION, YOU MAY OPT OUT OF THE ARBITRATION
          PROVISION BY FOLLOWING THE INSTRUCTIONS PROVIDED IN SECTION 20.
        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            This is a heads up that these Terms have a provision where you agree
            to resolve all disputes with Grailed through binding individual
            arbitration, which means that you waive any right to have those
            disputes decided by a judge or jury, and that you waive your right
            to participate in class actions, class arbitrations, or
            representative actions.
          </p>
        </div>

        <p className="text-[14px] font-semibold py-2">
          {" "}
          3. Who Can Use Grailed?
        </p>
        <p>
          <span className="underline underline-offset-4">Minimum Age.</span> You
          must be at least 16 years of age to use the Services. If you are under
          the age of 18 (or the age of legal majority where you live), you may
          only use the Services under your parent or legal guardian's
          supervision and you may not list items for sale through the Services.
          If you are a parent or legal guardian of a user under the age of 18
          (or the age of legal majority), you agree to be fully responsible for
          their use of the Services.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            You cannot use Grailed if you're under 16 (or older in some
            countries). If you're under 18 — your parent or legal guardian is
            responsible for your actions on Grailed and is legally bound by
            these Terms.
          </p>
        </div>

        <p>
          <span className="underline underline-offset-4">
            Use on Behalf of Another.
          </span>
          If you use our Services on behalf of another person or entity, (a) all
          references to "you" throughout these Terms will include that person or
          entity, (b) you represent that you are authorized to accept these
          Terms on that person's or entity's behalf, and (c) in the event you or
          the person or entity violates these Terms, the person or entity agrees
          to be responsible to us.
        </p>
        <p>
          <span className="underline underline-offset-4 pt-3">
            Users Outside of the US.
          </span>
          If you are using the Services from a country embargoed by the US or
          are on the US Treasury Department's list of "Specially Designated
          Nationals," you agree that you will not engage in financial
          transactions or conduct any commercial activities through the
          Services.
        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            You cannot use Grailed if you or your country are prohibited from
            doing business with the US.
          </p>
        </div>
        <p className="text-[14px] font-semibold py-2">
          {" "}
          4. Accounts and Account Security
        </p>
        <p className="text-[14px]">
          You may need to register for an account to access our Services. You
          must provide accurate account information and update your information
          if it changes. You must also maintain the security of your account and
          notify us if you discover or suspect that someone has accessed your
          account without your permission. Where you have provided your phone
          number or email address during or after the registration process, you
          agree for us to send you security codes by text message or email to
          verify your identity as a registered user. We reserve the right to
          suspend or terminate your Grailed account and your account(s) with any
          ofGrailed's affiliates, for any reason at our discretion, including
          for breach of these Terms, failure to provide certain information or
          verify your identity when prompted, or if any information provided
          during the registration process or thereafter proves to be inaccurate,
          not current, or incomplete. If you permit others to use your account
          credentials, you are responsible for the activities of such users. We
          reserve the right to reclaim usernames, including on behalf of
          businesses or individuals that hold legal claims in those usernames.
        </p>

        <p className="text-[14px]">
          You agree that your account is not transferable and that in the event
          of your death, incapacity, or unavailability, we may terminate any
          rights to your account or User Content (defined below).
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            It is important that the information associated with your Grailed
            account is accurate. If you ever forget your password, are victim to
            a cyberattack, or have any other issues with your account — updated
            account information helps us recover accounts and contact you. We
            also ask you to help us fight bad actors by letting us know of
            suspicious activity.
          </p>
        </div>

        <p className="text-[14px] font-semibold py-2">
          {" "}
          5. Additional Terms and Modifications
        </p>
        <p className="text-[14px]">
          We may change or update these Terms from time to time. We will notify
          you of material changes. We reserve the right to determine the form
          and means of providing notification to you and you agree to receive
          legal notices electronically. Changes will be effective upon the
          posting of the changes unless otherwise specified. Your use of the
          Services following the changes constitutes your acceptance of the
          updated Terms. If you do not agree to the updated Terms, you must stop
          using our Services.
        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            As Grailed grows and evolves, we might have to make changes to these
            Terms. When we make major changes, we will let you know. If you do
            not agree to the new Terms, please stop using Grailed.
          </p>
        </div>

        <p className="text-[14px] font-semibold py-2"> 6. Services Generally</p>
        <p className="text-[14px]">
          License to You. Subject to your compliance with these Terms, we grant
          you a limited, non-exclusive, non-transferable, and revocable license
          to access and use our Services for your own personal use.
        </p>

        <p className="text-[14px]">
          Inherent Risk. You assume certain risks in using a service such as
          Grailed. Grailed is not involved with, nor provides a warranty for,
          any transaction between Buyers and Sellers, does not have or take
          title to any Products, and does not warrant that a Buyer or Seller
          will actually complete a transaction or return an item. You as a Buyer
          and/or Seller assume, agree, and understand you bear all of the risks
          in selling or purchasing Products on the Services.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            Unfortunately, we cannot control all user conduct on a platform like
            Grailed. We take all issues seriously, but you still might run into
            bad things before we have a chance to address them.
          </p>
        </div>
        <p className="text-[14px]">
          Off-Site Activity. For your safety, we discourage off-site
          transactions and the sharing of contact information, including email
          addresses and phone numbers, prior to completing a transaction through
          the Services. Initiating conversations regarding a Product purchase
          outside of the Services, completing purchases outside of the Services,
          and soliciting users to Grailed competitors or attempting to
          circumvent Grailed fees by completing transactions initiated on
          Grailed off-site, are considered off-site activities. If you choose to
          engage in off-site activities, Grailed makes no representations or
          warranties of any kind, express or implied, about the reliability,
          accuracy, suitability, safety, or authenticity of communications or
          transactions performed off-site or the individuals involved in such
          transactions. All off-site activity is strictly at your own risk.
          Moreover, transactions conducted outside of the Services are not
          eligible for any protection provided by Grailed or Grailed Purchase
          Protection (defined below). Grailed reserves the right to suspend or
          terminate your access to the Services for any reason in accordance
          with these Terms, including in the event of any off-site activity, as
          determined solely by Grailed.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            For more information about off-site activity go{" "}
            <a
              className="underline underline-offset-4"
              href="https://help.grailed.com/hc/en-us/articles/115003069733-What-is-offsite-activity-and-why-did-I-receive-a-warning-about-it"
            >
              here
            </a>
          </p>
        </div>

        <p className="text-[14px] font-semibold py-2"> 7. Seller Terms</p>

        <p className="text-[14px] py-2">
          {" "}
          When you sell Products through the Services, you are considered a
          Seller and you agree to the terms in the following provisions.
        </p>
        <p className="text-[14px] py-2">
          {" "}
          Product Listings. To sell a Product through the Services, Sellers must
          publish pictures and information about the Products ("Product
          Listing"). To list a Product for sale on Grailed, Sellers must first
          connect a verified PayPal account to their Grailed account, unless
          otherwise permitted by Grailed. Thereafter, Grailed may offer Sellers
          the option to choose which third-party payment processor (a "Payment
          Processor") to accept payments through. For more information on
          Payment Processors see Section 14.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            This section describes how to list a product on Grailed. You can
            find helpful tips on how to list a product
            <a
              className="underline underline-offset-4"
              href="https://howtosell.grailed.com/"
            >
              here
            </a>
          </p>
        </div>

        <p className="text-[14px]">
          As a Seller, you agree that: (a) you are solely responsible for the
          accuracy and content of any Product Listing, including its lawfulness;
          (b) you have all rights necessary to sell your Products; (c) you will
          not list or sell any counterfeit Products; (d) we cannot guarantee
          exact Product Listing durations; (e) we may modify Product Listings at
          our sole discretion; (f) you authorize us to offer your Product
          Listing for sale in any such manner as we deem appropriate, including
          by making your Product Listing available on other platforms, websites
          and/or mobile applications, including those operated by us or our
          affiliates; (g) we reserve the right to delete any Product Listings
          for any reason upon notice to you; (h) a Product Listing is not
          guaranteed to appear or not appear in any particular search and browse
          results; and (i) you are responsible for complying with all laws and
          regulations applicable to the sale of your Products and you will
          promptly assist Grailed in its compliance with applicable laws and
          regulations, as requested by Grailed.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            We ask sellers to be responsible for their items, follow the law,
            and not mislead buyers. Unfortunately, issues with listings come up,
            so we need to be able to remove problematic listings. We do our best
            to market items sold on Grailed and to ensure search results turn up
            what buyers want to see, but we cannot guarantee specific
            advertising or search result placement to our users.
          </p>
        </div>
        <p className="text-[14px]">
          The Services may include functionality for suggesting more effective
          selling, such as discounting Products and Product price suggestions,
          but Sellers have sole discretion to set prices.
        </p>
        <p className="text-[14px] py-2">
          Offer and Acceptance. Buyers can buy Products from you immediately at
          the listed price. You cannot accept further offers on Products sold
          through the "Purchase" option. Alternatively, Buyers can negotiate the
          price of a Product with you. We will notify you if a potential Buyer
          makes an offer on your Product Listings. If you receive an offer, you
          can accept, counter, or decline that offer. Non-binding offers are
          offers made through PayPal guest checkout, or if both you and the
          Buyer are located in the EU, the UK, or another jurisdiction that does
          not allow automatically binding transactions. Binding offers are all
          other offers. If you accept a binding offer, you enter into a legally
          binding contract with the applicable Buyer, pursuant to which the
          Buyer is obligated to purchase the Product and you agree to ship the
          Product (as it is described in the Product Listing) to such Buyer for
          the price that you accepted. If you accept a non-binding offer, the
          Buyer must initiate fund transmission to you. Once funds transmission
          is initiated, you enter into a legally binding contract with the
          applicable Buyer to ship the Product (as it is described in the
          Product Listing) to such Buyer for the price that you accepted. If you
          counter or decline an offer, we will notify the Buyer.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            For a summary of the offer and purchase process, including details
            about what makes offers binding, please visit the in our Help
            Center.
            <a
              className="underline underline-offset-4"
              href="https://help.grailed.com/hc/en-us/categories/115000222634-Selling"
            >
              Selling and Buying sections
            </a>
          </p>
        </div>

        <p className="text-[14px] py-2">
          Seller Commission and Payment Processing Fees. Sellers must pay
          Grailed a commission on the total transaction amount received by a
          Seller (including VAT, if any, and any applicable shipping costs) in
          respect of any sale of a Product through the Services. Grailed also
          charges a payment processing fee for each transaction processed by its
          third-party Payment Processors. The fee amount will be assessed on the
          total transaction amount, including shipping and tax (if applicable).
          Grailed reserves the right to modify the payment processing fee at any
          time. The commission will be deducted from the amount paid by a Buyer
          to the Seller through the Payment Processor applicable to that
          transaction. Commission rates are subject to change at our sole
          discretion, upon notice to you.
        </p>
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
            It is free to create an account on Grailed, but we do charge sellers
            a commission for providing a platform to sell on. Additionally, we
            charge payment processing fees.{" "}
            <a className="underline underline-offset-4" target="_blank" href="https://help.grailed.com/hc/en-us/articles/360052676193-Does-Grailed-charge-a-payment-processing-fee#:~:text=Grailed%20is%20free%20for%20buyers,import%20fees%20(where%20applicable)."> Click here</a>{" "}
            for more information about the commission we charge, as
            well as information about fees associated with our Payment
            Processors.
          </p>
        </div>

        <p className="text-[14px] py-2">
        Shipping. Eligible Sellers may use, and certain Sellers may be required to use, our "Grailed Labels" service to select a shipping rate, download a shipping label, and track their package; see here for more details and applicable terms. Grailed reserves the right to discontinue providing or require the use of Grailed Labels to any or all users at any time and for any reason. All Sellers must ship Products within seven (7) calendar days (unless otherwise agreed to by the applicable Buyer) after a binding offer for a Product is accepted or after fund transfer is initiated by the Buyer for non-binding offers. If a Seller does not ship the Product within the provided timeline, the order will be automatically canceled, and the Buyer will be refunded to their original payment method and the Seller's account will not be credited for any canceled order. Sellers are responsible for the contents of their parcels and must comply with all terms and conditions of the applicable shipping carrier.


</p>
        <p className="text-[14px] py-2">
        Seller Payouts and Refunds. Except as otherwise set forth herein, Seller's account will be credited with the amount equal to the purchase price, minus taxes, Grailed's commission, Grailed Labels costs (if applicable), and any applicable fees no later than three (3) calendar days after the tracking information indicates that the Product has been delivered to the Buyer. Notwithstanding anything to the contrary herein, Grailed may hold on crediting a Seller account for a period necessary for Grailed to determine that a Product has actually been delivered to resolve a Buyer-initiated claim, or if prescribed by applicable laws or regulations. Seller may redeem credited amounts through Grailed's permitted third-party Payment Processors.

   
        </p>
        
        <p className="text-[14px] py-2">
        Notwithstanding anything to the contrary herein, in the event Grailed determines that a shipment was not fulfilled (including if the tracking information provided appears to have been fraudulent; Grailed determines that the Product shipped is not as described on the Product Listing; the Product is unlawful, etc.) or Grailed is subject to a chargeback imposed by a Payment Processor as a result of Seller's failure to fulfill a shipment, as determined by Grailed or a Payment Processor, Seller is required to provide a full refund, including shipping fees, to the applicable Buyer or Grailed (as applicable). If Seller fails to timely refund the Buyer, Grailed may refund the Buyer on the Seller's behalf. If Seller is located in a jurisdiction that allows automatic debits, such Seller's account will be automatically debited by Grailed for the amount refunded by Grailed, or the chargeback amount (as applicable). Grailed may also charge Seller any associated dispute fees charged by the Payment Processor, at Grailed's sole discretion. Seller hereby agrees to such automatic debiting. If Seller is not eligible for automatic debits, Seller is required to promptly repay Grailed for the refund, the chargeback amount, and any applicable dispute fees and a debt will be created for the amount that Seller owes Grailed for the refund. Whilst the debt remains outstanding, Grailed may suspend or terminate Seller's access to the Services in accordance with these Terms. If a Seller fails to promptly repay any outstanding debt to Grailed, Grailed may pursue any legal action available to it against such Seller, including retaining collection agencies at your cost.


        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
           If you sell through Grailed, you are responsible for shipping the products. Sellers must ship and provide tracking information within seven (7) days of when a buyer submits payment, otherwise the order will be canceled, and the buyer refunded. Grailed will release the payment to you minus taxes, commission, and any other fees no later than three (3) calendar days after product has been delivered to the buyer, subject to certain exceptions.
          <br /> Details about when a buyer is obligated to purchase a product can be found in the
            <a className="underline underline-offset-4" target="_blank" href="https://help.grailed.com/hc/en-us/categories/115000222634-Selling">Selling and Buying sections in our Help Center.</a>{" "}
            for more information about the commission we charge, as
            well as information about fees associated with our Payment
            Processors.
          </p>
        </div>

        <p className="text-[14px] py-2">
        Seller Promotions. Grailed may grant certain Sellers the ability to choose to offer promotions specifically for their own shops and/or Product Listings through Seller-generated discounts on the listing price(s) by a percentage or an amount. Sellers may be able to discount a single Product Listing or multiple Product Listings at once. Discounted prices are public and will be displayed to all Buyers. Grailed may also grant certain Sellers the ability to offer a discounted price on Product Listings that is only sent to the users that have favorited a specific Product Listing. On occasion, Grailed may (in its sole discretion) aggregate Seller discounts and promote them through our Services, including via our websites, apps, and emails. When a Seller runs a promotion or discount, Seller is obligated to comply with all applicable laws and regulations (including consumer protection rules). Sellers may not use promotions to avoid fees.


        </p>

        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
          Sometimes sellers will be given the ability to offer discounts and promotions in their shops.

          </p>
        </div>
        <p className="text-[14px] py-2">
        Seller-Initiated Refunds. Sellers may choose to reimburse or refund a Buyer. If a Seller agrees to reimburse or refund payment to a Buyer, Seller must do so through their PayPal account for transactions completed through PayPal. For payments completed through means other than a Seller's PayPal account, Grailed will reimburse or refund the Buyer and then the Seller must reimburse Grailed. If Seller is located in a jurisdiction that allows automatic debits, such Seller's account will be automatically debited by Grailed for the reimbursement or refund amount. Seller hereby agrees to such automatic debiting. If Seller is not eligible for automatic debits, Seller is required to promptly repay Grailed for this amount and a debt will be created for the amount that Seller owes Grailed for the reimbursement or refund. Whilst the debt remains outstanding, Grailed may suspend or terminate your access to the Services in accordance with these Terms. If you fail to repay any outstanding debt to Grailed, Grailed may pursue any legal action available to it against you, including retaining collection agencies.


        </p>
        
        <div className="bg-[#e1e1e1] py-6 my-2 px-2 rounded-sm">
          <p className="text-[14px] ">
          If a seller does not have an eligible account connected to their Grailed shop, we will process a refund on the seller's behalf. If we can't automatically debit a seller for the refund we issued, the seller must pay us back.

          </p>
        </div>
        <p className="text-[14px] py-2">
        Buyer Data. You (as a Seller) and Grailed are independent controllers of Buyer data. To the fullest extent permitted by the laws of the European Economic Area ("EEA") and the UK, we are considered separate and independent data controllers of the personal information of Buyers. As such, we each independently determine the purposes and means of processing Buyer data and therefore Grailed is not responsible for any Seller's use of Buyer data. Sellers must comply with applicable data protection laws with respect to a Seller's collection, use, and processing of Buyer data. If we are found to jointly control such Buyer data and we are held responsible in any way for its use by you, you agree to indemnify us.



        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
