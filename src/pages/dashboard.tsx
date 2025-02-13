import Analytics from "@/components/analytics";
import Sidebar from "@/components/sidebar";

const dashboard = () => {
  return (
    <div className="flex min-h-screen justify-center bg-default">
      <Sidebar />
      <Analytics />
    </div>
  );
};

export default dashboard;
