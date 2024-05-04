import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";

export default function TitlePagePage() {
  return (
    <>
      <Helmet>
        <title>Dawat-e-Islami - ISS Title Page</title>
        <meta
          name="description"
          content="Welcome to the ISS Dawat-e-Islami Title Page. Discover the essence of Islamic teachings and the mission of Dawat-e-Islami."
        />
      </Helmet>

      {/* title page section */}
      <div className="h-[1920px] w-full bg-white-A700 bg-[url(/public/images/img_entry_page.png)] bg-cover bg-no-repeat md:h-auto">
        {/* main content section */}
        <div className="bg-blue_gray-900_bc">
          {/* header section */}
          <div className="flex flex-col items-center justify-center bg-blue_gray-900_bc pb-[215px] pt-[107px] md:py-5">
            {/* logo and navigation section */}
            <div className="container-xs flex flex-col items-center gap-[213px] pl-[57px] pr-[41px] md:gap-[159px] md:p-5 md:px-5 sm:gap-[106px]">
              <Img src="images/img_rectangle_5.png" alt="featured image" className="h-[694px] w-[62%] object-cover" />

              {/* navigation links section */}
              <div className="flex flex-col items-center gap-[136px] self-stretch md:gap-[102px] sm:gap-[68px]">
                <Heading size="lg" as="h1">
                  ISS Dawat e Islami
                </Heading>
                <Img
                  src="images/img_rectangle_6.png"
                  alt="secondary image"
                  className="h-[446px] w-full object-cover md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
