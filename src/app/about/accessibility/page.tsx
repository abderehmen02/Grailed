import React from "react";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/headers";
const page = () => {
  return (
    <>
      <Header />

      <div className="px-4 sm:px-16 mx-auto max-w-[900px] py-8 min-h-[800px]">
        <h2 className="font-bold text-[30px] py-2">
          Our Commitment to Accessibility
        </h2>
        <p>
          Grailed is committed to making our website&&apos;s content accessible and
          user friendly to everyone. If you are having difficulty viewing or
          navigating the content on this website, or notice any content,
          feature, or functionality that you believe is not fully accessible to
          people with disabilities, please contact our team at <span className="underline underline-offset-4">help@grailed.com</span>
          with &quot;Disabled Access&quot; in the subject line and provide a description
          of the specific feature you feel is not fully accessible or a
          suggestion for improvement. We take your feedback seriously and will
          consider it as we evaluate ways to accommodate all of our customers
          and our overall accessibility policies. Additionally, while we do not
          control such vendors, we strongly encourage vendors of third-party
          digital content to provide content that is accessible and user
          friendly.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
