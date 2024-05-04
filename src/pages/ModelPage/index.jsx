import React from "react";
import { Helmet } from "react-helmet";

export default function ModelPagePage() {
  return (
    <>
      <Helmet>
        <title>Model Overview | Your Guide to Understanding Models</title>
        <meta
          name="description"
          content="Dive into our Model Page to gain insights into the structure and components of our models. Perfect for users seeking comprehensive model information."
        />
      </Helmet>

      {/* empty section */}
      <div className="h-[1920px] w-full bg-white-A700" />
    </>
  );
}
