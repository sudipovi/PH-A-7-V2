import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="flex container mx-auto">
          <div className="flex-1">
            <a className="font-bold text-2xl">CS — Ticket System</a>
          </div>
          <div className="md:flex flex-wrap gap-2">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
            <button className="btn btn-secondary">+ New Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
