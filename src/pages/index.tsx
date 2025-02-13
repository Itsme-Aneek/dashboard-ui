import Form from "@/components/form";

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Brand />
      <Form />
    </div>
  );
};

export default Home;

const Brand = () => (
  <div className="brand basis-1/3 bg-black w-full h-full text-white flex items-center font-montserrat text-7xl font-bold justify-center">
    <h1>DataLens.</h1>
  </div>
);
