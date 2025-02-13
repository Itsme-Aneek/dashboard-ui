import { Title, DonutChart, Flex, Text } from "@tremor/react";
import Image from "next/image";

const products = [
  {
    name: "Basic Tees",
    color: "#22c55e",
    share: 55,
  },
  {
    name: "Custom Short Pants",
    color: "#eab308",
    share: 31,
  },
  {
    name: "Super Hoodies",
    color: "#f43f5e",
    share: 14,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const PieChart = () => (
  <div className="flex-1 bg-white p-6 rounded-lg">
    <Flex alignItems="center">
      <Title className="font-montserrat font-bold text-lg">Top products</Title>
      <Flex justifyContent="start" className="gap-2 w-fit">
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
    </Flex>
    <div className="grid grid-cols-2">
      <DonutChart
        className="mt-6 flex-1"
        data={products}
        category="share"
        index="name"
        valueFormatter={valueFormatter}
        colors={["green", "yellow", "rose"]}
        variant="pie"
        noDataText="No data available"
      />
      <div className="indicators flex-1 h-full flex flex-col justify-center gap-4 mt-3">
        {products.map((product) => (
          <div className="indicator flex gap-2" key={product.name}>
            <div
              className="indicator-color mt-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: product.color }}
            />
            <div className="values flex flex-col">
              <span className="indicator-name font-montserrat text-sm font-bold tracking-wide">
                {product.name}
              </span>
              <span className="indicator-share font-lato text-secondary text-sm">
                {valueFormatter(product.share)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PieChart;
