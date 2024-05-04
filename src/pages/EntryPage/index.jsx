import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Heading, Img } from "../../components";

export default function EntryPagePage() {
  return (
    <>
      <Helmet>
        <title>Teacher Login - Dar ul Madina</title>
        <meta
          name="description"
          content="Log in to access the Dar ul Madina teacher portal. Enter your username and password to manage your account, reset passwords, and stay updated with the latest version."
        />
      </Helmet>

      {/* login page section */}
      <div className="h-[1920px] w-full bg-white-A700 bg-[url(/public/images/img_entry_page.png)] bg-cover bg-no-repeat md:h-auto">
        {/* login container section */}
        <div className="flex flex-col items-center bg-blue_gray-900_bc pb-[23px] pt-11 md:pt-5 sm:py-5">
          {/* login form section */}
          <div className="container-xs flex flex-col items-end gap-[455px] md:gap-[341px] md:p-5 sm:gap-[227px]">
            {/* logo image section */}
            <Img
              src="images/img_rectangle_5.png"
              alt="banner image"
              className="mr-[158px] h-[328px] w-[46%] object-cover md:mr-0"
            />

            {/* credentials form section */}
            <div className="flex w-[76%] flex-col items-center md:w-full">
              <Heading size="s" as="h1">
                For Dar ul Madina Teachers
              </Heading>
              <Text size="xl" as="p" className="mt-[17px]">
                Username
              </Text>
              <Text size="xl" as="p" className="mt-[72px]">
                Password
              </Text>
              <Button shape="round" className="mt-[114px] w-full sm:px-5">
                Login
              </Button>
              <a href="#" className="mt-[15px]">
                <Text as="p">Reset Password</Text>
              </a>
            </div>
            <Text as="p" className="self-start">
              Version: 1.0.0
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
