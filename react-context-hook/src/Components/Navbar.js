import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, authToggle } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <nav
        style={{
          background: theme.ui,
          color: theme.syntax,
          borderRadius: theme.border,
        }}
      >
        <h1>Context App</h1>
        <div onClick={authToggle}>
          {isAuthenticated ? "Logged in" : "Logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <AuthContext.Consumer>
//       {(authContext) => {
//         return (
//           <ThemeContext.Consumer>
//             {(context) => {
//               const { isAuthenticated, authToggle } = authContext;
//               const { isLightTheme, light, dark } = context;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav
//                   style={{
//                     background: theme.ui,
//                     color: theme.syntax,
//                     borderRadius: theme.border,
//                   }}
//                 >
//                   <h1>Context App</h1>
//                   <div onClick={authToggle}>
//                     {isAuthenticated ? "Logged in" : "Logged out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };
