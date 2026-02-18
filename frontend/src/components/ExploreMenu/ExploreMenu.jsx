import React, { useRef } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  const scrollRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const mouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add("dragging");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const mouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("dragging");
  };

  const mouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("dragging");
  };

  const mouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a wide variety of delicious dishes crafted to satisfy every
        craving. From local favorites to international flavors, we have
        something special for everyone.
      </p>

      <div
        className="explore-menu-list"
        ref={scrollRef}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
      >
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => {setCategory(prev => prev == item.menu_name ? "All" : item.menu_name)}} key={index} className="explore-menu-list-item">
              <img className= {category == item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <div className="section-divider"></div>
    </div>
  );
};

export default ExploreMenu;
