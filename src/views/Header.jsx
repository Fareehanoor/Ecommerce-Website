// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import NavBar from "./NavBar";

// const Header = () => {
//   return (
//     <MainHeader>
//       <NavLink to="/">
//         <img src="/public/logo e.jpeg" alt="" />
//       </NavLink>
//       <NavBar />
//     </MainHeader>
//   );
// };

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;

//   .logo {
//     height: 5rem;
//   }
// `;

// export default Header;

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
