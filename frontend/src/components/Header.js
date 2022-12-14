import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { links } from "../constants/data.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { PrimaryColor } from "../utils/style";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  align-items: center;
  margin: 0px;
  padding: 10px 0;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 100%;
  z-index: 999;
`;

const Logo = styled.div`
  width: 100px;
  cursor: pointer;
  font-size: 22px;
  color: ${PrimaryColor};
  font-weight: 900;
  margin-left: 10px;
`;

const Bars = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
  color: #4dad6c;
`;

// const NavBar = styled.div`
//   height: 0;
//   overflow: hidden;
//   transition: var(--transition);
// `;

// const Lists = styled.ul`
//   font-size: 1rem;
//   text-transform: capitalize;
//   letter-spacing: var(--spacing);
//   display: block;
//   padding: 0.5rem 1rem;
//   transition: var(--transition);
// `;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  const logoHandler = () => {
    navigate("/");
  };

  const barHandler = () => {
    setIsToggled(!isToggled);
  };

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (isToggled) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [isToggled]);

  return (
    <HeaderContainer>
      <Logo onClick={logoHandler}>Maskara</Logo>
      <Bars onClick={barHandler}>
        {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
      </Bars>
      {/* <NavBar ref={linksContainerRef}>
        <Lists ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </Lists>
      </NavBar> */}
    </HeaderContainer>
  );
}

export default Header;
