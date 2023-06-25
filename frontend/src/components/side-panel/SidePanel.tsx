import { ISidePanel } from "../../core/interfaces";
import { INavigation, IventoryLists } from "./data/_data";

const SidePanel = () => {
  return (
    <>
      <div className="fixed left-0">
        <div className="bg-slate-400 flex flex-col">
          <div className="h-screen w-64 flex flex-col leading-10 items-center mt-6">
            <h2 className="ml-4 underline">Navigation</h2>
            {INavigation.map((INav) => (
              <ul key={INav.name}>
                <div className="flex items-center">
                  {INav.icon}
                  <a className="ml-1" href={INav.link}>
                    {INav.name}
                  </a>
                </div>
              </ul>
            ))}

            <h2 className="ml-4 underline">Inventory</h2>
            {IventoryLists.map((Ilist) => (
              <ul key={Ilist.name}>
                <div className="flex items-center">
                  {Ilist.icon}
                  <a className="ml-1" href={Ilist.link}>
                    {Ilist.name}
                  </a>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
