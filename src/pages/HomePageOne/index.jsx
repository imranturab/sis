import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Header from "../../components/Header";

export default function HomePageOnePage() {
  return (
    <>
      <Helmet>
        <title>Home - Dar ul Madinah Attock Campus | Students & Staff Information</title>
        <meta
          name="description"
          content="Explore the Dar ul Madinah Attock Campus home page for the latest updates on students, staff, and school census 2021. Stay informed with the latest sync information."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[206px] bg-white-A700 md:gap-[154px] sm:gap-[103px]">
        <div>
          {/* header section */}
          <Header />
        </div>

        {/* dashboard section */}
        <div className="flex flex-col items-end">
          <div className="mt-[206px] flex w-[92%] flex-col items-start md:w-full md:p-5">
            <div className="ml-[113px] flex w-[80%] items-center justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
              <div className="mb-[9px] flex w-[20%] flex-col items-center self-end sm:w-full">
                <Img
                  src="images/img_user_1.png"
                  alt="user image"
                  className="relative z-[1] h-[150px] w-[150px] object-cover"
                />
                <Text as="p" className="relative mt-[-1px] !text-black-900">
                  Students
                </Text>
              </div>
              <div className="relative h-[256px] w-[32%] md:h-auto sm:w-full">
                <Text as="p" className="mb-[9px] ml-[76px] !text-black-900 md:ml-0">
                  Staff
                </Text>
                <Img
                  src="images/img_team_1.png"
                  alt="team image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[256px] w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-[114px] flex w-[71%] items-center gap-[23px] self-end md:w-full md:flex-col">
              <div className="w-[36%] pt-[29px] md:w-full sm:pt-5">
                <div className="relative h-[270px] md:h-auto">
                  <Img src="images/img_object_ball_1.png" alt="ball image" className="h-[270px] w-full object-cover" />
                  <Text
                    size="xl"
                    as="p"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-[97%] text-center leading-[56px] !text-black-900"
                  >
                    <>
                      Census
                      <br />
                      2021
                    </>
                  </Text>
                </div>
              </div>
              <div className="mb-24 h-px flex-1 self-end bg-gray-600_7f md:self-stretch" />
            </div>
            <div className="mt-[15px] flex w-[81%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="flex w-[43%] flex-col items-start md:w-full">
                <Img
                  src="images/img_teaching_1.png"
                  alt="teaching image"
                  className="relative z-[2] ml-[52px] h-[256px] w-[256px] object-cover md:ml-0"
                />
                <Text as="p" className="relative mt-[-27px] !text-black-900">
                  Classes and Sections
                </Text>
              </div>
              <div className="h-full w-[3px] bg-gray-600_7f md:h-[3px] md:w-full" />
              <div className="flex w-[29%] flex-col items-center md:w-full">
                <Img
                  src="images/img_school_1.png"
                  alt="school image"
                  className="relative z-[3] h-[256px] w-full object-cover md:h-auto"
                />
                <Text as="p" className="relative mt-[-31px] !text-black-900">
                  School
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
