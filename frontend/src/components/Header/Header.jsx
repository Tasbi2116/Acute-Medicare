// import {useContext, useEffect, useRef} from "react";
// import logo from "../../assets/images/logo.png";
// import {NavLink, Link} from 'react-router-dom';
// import UserImage from "../../assets/images/avatar-icon.png";
// import {BiMenu} from "react-icons/bi";
// import { AuthContext } from "../../providers/AuthProvider";
// export let LoggedEmail = '';

// const navLinks = [
//   {
//     path:'/',
//     display:'Home'
//   },

//   {
//     path:'/doctors',
//     display:'Find Doctor'
//   },

//   {
//     path:'/services',
//     display:'Services'
//   },

//   {
//     path:'/contact',
//     display:'Contact'
//   },
// ] 

// const Header = () => {

//   const { user, logOut } = useContext(AuthContext);
//     LoggedEmail = user?.email;

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     };

//   const headerRef = useRef(null)
//   const mennuRef = useRef(null)

//   const handleStickyHeader = ()=>{
//     window.addEventListener('scroll', ()=>{
//       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
//         headerRef.current.classList.add('sticky__header')
//       }
//       else{
//         headerRef.current.classList.remove('sticky__header')
//       }
//     })
//   }

//   useEffect(()=>{
//     handleStickyHeader()
//     return ()=> window.removeEventListener('scroll', handleStickyHeader)
//   })

//   const toggleMenu = ()=> mennuRef.current.classList.toggle('show__menu')

//   return <header className="header flex items-center" ref={headerRef}>
//     <div className="container">

//       <div className="flex items-center justify-between">
//         {/*====== logo ======= */}
//         <div>
//           <img src={logo} alt=""/>
//         </div>

//         {/*====== menu ======= */}
//         <div className="navigation" ref={mennuRef} onClick={toggleMenu}>
//           <ul className="flex items-center gap-[2.7rem]">
//             {
//             navLinks.map((link,index)=><li key={index}>
//               <NavLink to={link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>{link.display}</NavLink>
//               </li>)
//             }
//           </ul>
//         </div>

//         {/*====== nav right ======= */}
//         <div className="flex items-center gap-4">
//           <div className="hidden">
//             <Link to="/">
//               <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
//               <img src={UserImage} className="w-full rounded-full" alt="" />
//               </figure>
//             </Link>
//           </div>

//           {/* <Link to='/login'>
//             <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
//           </Link> */}
//           <div className="border-2 border-b-red-600 p-4 flex items-center justify-between md:justify-start space-x-4 md:space-x-8">
//             {
//               user ? (
//                 <>
//                   <Link to="" className="flex items-center space-x-2">
//                     <h3 className="text-lg font-semibold text-gray-800">Welcome</h3>
//                     <div className="rounded-md bg-orange-600 px-3 py-1 text-white text-sm">
//                       {user?.displayName}
//                     </div>
//                   </Link>
//                   <button 
//                     className="transition-all duration-300 bg-slate-600 hover:bg-slate-700 text-white rounded-full px-4 py-1 ml-4 md:ml-8"
//                     onClick={handleLogOut}
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link to="/login" className="btn transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1">
//                   Login
//                 </Link>
//               )
//             }
//           </div>


//           <span className="md:hidden" onClick={toggleMenu}>
//             <BiMenu className="w-6 h-6 cursor-pointer"/>
//           </span>
//         </div>

//       </div>
//     </div>

//   </header>
// }

// export default Header

import { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from 'react-router-dom';
import UserImage from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";

export let LoggedEmail = '';

const navLinks = [
  { path: '/', display: 'Home' },
  { path: '/doctors', display: 'Find Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  LoggedEmail = user?.email;

  const handleLogOut = () => {
    logOut().catch(error => console.log(error));
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center bg-white shadow-md" ref={headerRef}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/*====== Logo =======*/}
        <div>
          <Link to="/">
            <img src={logo} alt="Acute Medicare" className="w-20" />
          </Link>
        </div>

        {/*====== Navigation =======*/}
        <div ref={menuRef} className="navigation hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primaryColor text-lg font-semibold"
                      : "text-gray-600 text-lg font-medium hover:text-primaryColor"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/*====== User and Menu =======*/}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="items-center space-x-3 grid grid-cols-1">
              <Link to="" className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-800">Welcome</h3>
                <div className="rounded-md bg-orange-600 px-3 py-1 text-white text-sm">
                  {user?.displayName}
                </div>
              </Link>
              <button
                onClick={handleLogOut}
                className="transition-all duration-300 badge badge-primary  p-2 hover:bg-slate-700 text-white rounded-full "
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
