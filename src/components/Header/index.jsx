import React from "react";
import { Text, Img, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full">
        <div className="flex justify-center bg-gray-900 pb-[17px] pt-[26px] sm:pt-5">
          <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
            <div className="flex flex-col items-start gap-3">
              <Heading as="h1">ISS Dar ul Madinah 1.0.0</Heading>
              <Text size="xs" as="p" className="!text-light_green-A700">
                Last Sync: 08-01-2021, 08:26 am
              </Text>
            </div>
            <div className="mt-[7px] flex w-[21%] items-center justify-between gap-5 md:w-full">
              <div className="flex w-[69%] justify-between gap-5">
                <Img src="images/img_exit_4_1.png" alt="exit icon" className="h-[64px] w-[64px] object-cover" />
                <Img src="images/img_sync_1.png" alt="sync icon" className="h-[64px] w-[64px] object-cover" />
              </div>
              <div className="flex w-[5%] flex-col gap-[11px] self-end">
                <div className="h-[10px] w-[12px] rounded-md bg-white-A700" />
                <div className="h-[10px] w-[12px] rounded-md bg-white-A700" />
                <div className="h-[10px] w-[12px] rounded-md bg-white-A700" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-blue-900 pb-3 pt-[17px]">
          <div className="container-xs flex justify-center pl-[276px] pr-[261px] md:p-5 md:px-5">
            <Text size="md" as="p">
              786092063 - Dar ul Madinah, Attock Campus
            </Text>
          </div>
        </div>
      </div>
    </header>
  );
}
