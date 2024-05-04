import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Heading } from "../../components";
import Header from "../../components/Header";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Home Dashboard - Dar ul Madinah</title>
        <meta
          name="description"
          content="Access the ISS Dar ul Madinah home dashboard. Monitor student enrollment, attendance, transfers, and manage bulk promotions. Stay informed with the latest sync information."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-5 bg-white-A700 pb-[1268px] md:pb-5">
        {/* header section */}
        <Header />

        {/* main content section */}
        <div className="flex flex-col gap-[297px] md:gap-[222px] sm:gap-[148px]">
          <div className="flex flex-col gap-2.5">
            <div className="container-xs flex flex-col items-center pl-[442px] pr-[488px] md:p-5 md:px-5">
              <Heading size="md" as="h1" className="!text-black-900">
                Students
              </Heading>
            </div>
            <div className="flex items-start md:flex-col">
              <Button color="green_800" size="xs" className="min-w-[154px] rounded-bl-[5px] rounded-tl-[5px] md:p-5">
                Enrollment
              </Button>
              <Text size="s" as="p" className="ml-[26px] !text-green-800_01 md:ml-0 md:p-5">
                Attendance
              </Text>
              <div className="ml-[26px] flex items-center md:ml-0 md:p-5">
                <div className="h-full w-px bg-green-700_7f" />
                <Text size="s" as="p" className="mb-[17px] ml-[15px] self-end !text-green-800_01">
                  Transfer In
                </Text>
                <div className="ml-8 h-full w-px bg-green-700_7f" />
              </div>
              <Text size="s" as="p" className="mb-[18px] ml-[29px] !text-green-800_01 md:ml-0 md:p-5">
                Transfer Out Requesets
              </Text>
              <div className="ml-[18px] h-[69px] w-px bg-green-700_7f md:ml-0 md:h-px md:w-[69px] md:p-5" />
              <Text size="s" as="p" className="ml-[23px] !text-green-800_01 md:ml-0 md:p-5">
                Bulk Promotions
              </Text>
              <div className="ml-[29px] flex flex-1 items-center justify-between gap-5 md:ml-0 md:self-stretch md:p-5">
                <div className="h-full w-px bg-green-700_7f" />
                <Text size="s" as="p" className="mb-[18px] self-end !text-green-800_01">
                  Edit Request
                </Text>
              </div>
            </div>
          </div>
          <div className="h-px bg-gray-600_7f" />
        </div>
      </div>
    </>
  );
}
