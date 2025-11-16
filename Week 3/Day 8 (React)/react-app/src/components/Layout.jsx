import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <h2>Task Assignment</h2>

      <nav>
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/dashboard/counter">Counter</Link></li>
          <li><Link to="/dashboard/digital-watch">Digital Watch</Link></li>
        </ul>
      </nav>

      <hr />

      {/* Renders child route (Dashboard / Counter / Watch) */}
      <Outlet />
    </div>
  );
}

export default Layout;
