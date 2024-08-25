import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/destinations">Destinations</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
