import { Flex, Text, Title } from "@tremor/react";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className="flex-1 bg-white p-6 rounded-lg">
      <Flex>
        <Title className="font-montserrat font-bold text-lg">
          Today&apos;s schedule
        </Title>
        <Flex justifyContent="start" className="gap-2 w-fit">
          <Text className="font-montserrat text-sm text-secondary">
            See All
          </Text>
          <Image
            className="w-3 -rotate-90"
            src={"/icon/arrow.svg"}
            width={50}
            height={50}
            alt=""
          />
        </Flex>
      </Flex>
      <ul className="list-none flex justify-center flex-col h-full gap-4 font-lato">
        <li className="pl-3 border-l-8 border-[#9BDD7C] flex flex-col gap-2">
          <h5 className="title text-[#666] font-bold">
            Meeting with suppliers from Tata Steel Limited
          </h5>
          <p className="time text-sm text-[#999]">14.00-15.00</p>
          <p className="location text-sm text-[#999]">
            at Jamshedpur, West Bengal
          </p>
        </li>
        <li className="pl-3 border-l-8 border-[#6972C3] flex flex-col gap-2">
          <h5 className="title text-[#666] font-bold">
            Check operation at Hazra Enterprise
          </h5>
          <p className="time text-sm text-[#999]">18.00-20.00</p>
          <p className="location text-sm text-[#999]">at Central Howrah</p>
        </li>
      </ul>
    </div>
  );
};

export default Schedule;
