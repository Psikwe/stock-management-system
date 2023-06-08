import { ISidePanel } from "../../core/interfaces";
import { lists } from "./data/_data";

const SidePanel = (props: ISidePanel) => {
  return (
    <>
      <aside className="bg-slate-400 h-screen w-64">
        {lists.map((list) => (
          <ul key={list.id}>
            <a href={list.link}>{list.name}</a>
          </ul>
        ))}
      </aside>
    </>
  );
};

export default SidePanel;
