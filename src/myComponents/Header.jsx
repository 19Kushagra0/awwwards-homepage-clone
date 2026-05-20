import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setExpandedSection(null);
    }
  };

  const toggleSection = (sectionName) => {
    if (expandedSection === sectionName) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  return (
    <div className="headerWrapper">
      <div className="header">
        <div className="hambergerContainer" onClick={toggleMenu}>
          <span className="hamberger material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </div>
        <div className="headerTitle">
          <span className="point">W.</span>
        </div>
        <div className="headerButtons1">
          <button className="headerButton">
            Explore
            <span className="headerIcon material-symbols-outlined">
              stat_minus_1
            </span>
          </button>
          <button className="headerButton">Directory</button>
          <button className="headerButton">
            Academy
            <div className="newTag">New</div>
          </button>
          <button className="headerButton">Jobs</button>
          <button className="headerButton">Market</button>
        </div>
        <div className="inputContainer">
          <div className="inputBox">
            <span className="searchIcon material-symbols-outlined">search</span>
            <input
              placeholder="Search by Inspiration"
              className="headerInput"
              type="text"
            />
          </div>
        </div>

        <div className="headerButtons2">
          <div className="headerProfileButton">
            <img
              className="headerProfileicon"
              src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user5.jpg"
              alt=""
            />
          </div>
          <div className="headerProButton">Be Pro</div>
          <div className="headerSubmitButton">Submit Website</div>
        </div>
      </div>

      {/* Drawer Overlay Menu */}
      <div className={`drawerMenu ${isMenuOpen ? "open" : ""}`}>
        <div className="drawerContent">
          {/* Explore */}
          <div className="drawerItem active">
            <span>Explore</span>
          </div>

          {/* Awards Accordion */}
          <div className="accordionWrapper">
            <div
              className={`drawerItem collapsible ${expandedSection === "awards" ? "expanded" : ""}`}
              onClick={() => toggleSection("awards")}
            >
              <span>Awards</span>
              <span className="material-symbols-outlined chevronIcon">expand_more</span>
            </div>
            <div className={`accordionSubMenu ${expandedSection === "awards" ? "show" : ""}`}>
              <div className="subItem">Site of the Day</div>
              <div className="subItem">Site of the Month</div>
              <div className="subItem">Site of the Year</div>
              <div className="subItem">Nominees</div>
            </div>
          </div>

          {/* By Category Accordion */}
          <div className="accordionWrapper">
            <div
              className={`drawerItem collapsible ${expandedSection === "category" ? "expanded" : ""}`}
              onClick={() => toggleSection("category")}
            >
              <span>By Category</span>
              <span className="material-symbols-outlined chevronIcon">expand_more</span>
            </div>
            <div className={`accordionSubMenu ${expandedSection === "category" ? "show" : ""}`}>
              <div className="subItem">Animation</div>
              <div className="subItem">Business & Corporate</div>
              <div className="subItem">Design Agencies</div>
              <div className="subItem">E-Commerce</div>
              <div className="subItem">Mobile & App</div>
            </div>
          </div>

          {/* By Technology Accordion */}
          <div className="accordionWrapper">
            <div
              className={`drawerItem collapsible ${expandedSection === "technology" ? "expanded" : ""}`}
              onClick={() => toggleSection("technology")}
            >
              <span>By Technology</span>
              <span className="material-symbols-outlined chevronIcon">expand_more</span>
            </div>
            <div className={`accordionSubMenu ${expandedSection === "technology" ? "show" : ""}`}>
              <div className="subItem">CSS3</div>
              <div className="subItem">GSAP Animation</div>
              <div className="subItem">HTML5</div>
              <div className="subItem">React</div>
              <div className="subItem">Three.js</div>
              <div className="subItem">WebGL</div>
            </div>
          </div>

          {/* Collections Accordion */}
          <div className="accordionWrapper">
            <div
              className={`drawerItem collapsible ${expandedSection === "collections" ? "expanded" : ""}`}
              onClick={() => toggleSection("collections")}
            >
              <span>Collections</span>
              <span className="material-symbols-outlined chevronIcon">expand_more</span>
            </div>
            <div className={`accordionSubMenu ${expandedSection === "collections" ? "show" : ""}`}>
              <div className="subItem">Creative Portfolios</div>
              <div className="subItem">Clean & Minimalist</div>
              <div className="subItem">Micro-interactions</div>
              <div className="subItem">Typography Focus</div>
            </div>
          </div>

          {/* Blog */}
          <div className="drawerItem">
            <span>Blog</span>
          </div>

          {/* Directory */}
          <div className="drawerItem secondary">
            <span>Directory</span>
          </div>

          {/* Academy */}
          <div className="drawerItem secondary inlineBadge">
            <span>Academy</span>
            <div className="newTag">New</div>
          </div>

          {/* Jobs */}
          <div className="drawerItem secondary">
            <span>Jobs</span>
          </div>

          {/* Market */}
          <div className="drawerItem secondary">
            <span>Market</span>
          </div>
        </div>
      </div>
    </div>
  );
}
