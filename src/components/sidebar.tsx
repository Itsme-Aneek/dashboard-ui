import { twMerge } from "tailwind-merge";

const tabs = [
  {
    icon: "/icon/dashboard.png",
    title: "Dashboard",
    active: true,
  },
  {
    icon: "/icon/transaction.png",
    title: "Transactions",
    active: false,
  },
  {
    icon: "/icon/user.png",
    title: "Users",
    active: false,
  },
  {
    icon: "/icon/schedule.png",
    title: "Schedules",
    active: false,
  },
  {
    icon: "/icon/setting.png",
    title: "Settings",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <div className="basis-1/4 sticky top-0 min-w-fit p-8 w-full h-screen">
      <div className="sidebar-container rounded-[1.875rem] bg-black w-full h-full text-white flex flex-col py-14 px-10 font-montserrat justify-center gap-4">
        <h1 className="text-3xl font-bold">DataLens</h1>
        <ul className="flex-1 flex flex-col">
          {tabs.map((tab) => (
            <li
              className="flex items-center my-4 gap-4 cursor-pointer"
              key={tab.title}
            >
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src={tab.icon} alt={tab.title} className="w-5 h-5" />
              }
              <span
                className={twMerge(
                  "text-sm tracking-wider font-medium",
                  tab.active ? "text-white font-bold" : "text-gray-400"
                )}
              >
                {tab.title}
              </span>
            </li>
          ))}
          <li className="mt-auto font-montserrat font-sm text-gray-400 cursor-pointer">
            Help
          </li>
          <li className="font-montserrat font-sm text-gray-400 cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
