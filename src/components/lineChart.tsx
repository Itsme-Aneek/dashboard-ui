import { Card, Title, Text, LineChart as LineGraph, Flex } from "@tremor/react";
import Image from "next/image";

const chartdata = [
  {
    week: "",
    Guest: 100,
    User: 150,
  },
  {
    week: "Week 1",
    Guest: 150,
    User: 200,
  },
  {
    week: "Week 2",
    Guest: 400,
    User: 250,
  },
  {
    week: "Week 3",
    Guest: 300,
    User: 200,
  },
  {
    week: "Week 4",
    Guest: 400,
    User: 450,
  },
];

const LineChart = () => {
  return (
    <div className=" bg-white p-6 rounded-lg">
      <Title className="font-montserrat text-lg font-bold">Activities</Title>
      <Flex justifyContent="start" className="gap-2">
        <Text className="font-montserrat text-sm text-secondary">
          May - June 2021
        </Text>
        <Image
          className="w-3"
          src={"/icon/arrow.svg"}
          width={50}
          height={50}
          alt=""
        />
      </Flex>
      <LineGraph
        className="mt-6"
        data={chartdata}
        index="week"
        categories={["Guest", "User"]}
        colors={["rose", "green"]}
        yAxisWidth={40}
        curveType="natural"
      />
    </div>
  );
};

export default LineChart;
