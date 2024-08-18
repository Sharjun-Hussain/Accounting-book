/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import {item} from '../Data/Navigation'


const SideBar = () => {
  return (
    <ul className="d-none d-md-block ">
      {item.map((navitem) => {
        return (
          <NavLink to={navitem.path} className="d-flex sidebar-items ps-3 ps-3" key={navitem.id}>
            {({ isActive }) => (
              <>
                {isActive ? <navitem.activeIcon/> : <navitem.icon />}
                <span>&nbsp;{navitem.name}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default SideBar;
