"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import * as Avatar from "@radix-ui/react-avatar";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes } from "../../utils/routes";
import Image from "next/image";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Menu, MenuItem } from "@mui/material";

const Index = () => {
    const router = useRouter();
    const loginState = useSelector((state) => state.login);
    const signupState = useSelector((state) => state.signup);

    console.log("jkjkjk===", loginState.data,signupState.data);
    const [toggle, setToggle] = useState(false);
    const [isNavbarBg, setIsNavbarBg] = useState(false);
    const [routePath, setRoutePath] = useState("/");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenSideNavbar = () => setToggle(true);
    const handleCloseSideNavbar = () => setToggle(false);

    const handleDropdownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.remove("authToken");
        handleDropdownClose();
        router.push("/login");
    };

    const navbarVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setIsNavbarBg(true);
        } else {
            setIsNavbarBg(false);
        }
    };
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", navbarVisible);
    }

    console.log('loginState',loginState)
    return (
        <nav
            className={`${
                toggle
                    ? "bg-[--shadow-color] lg:bg-[--white]"
                    : isNavbarBg
                    ? "bg-[--white] shadow-xl"
                    : "bg-[transparent]"
            } overflow-x-hidden w-[100%] fixed top-0 left-0 z-50 transition-all ease-in-out duration-500`}
        >
            {/* Web Navbar */}
            <div className="w-[90%] mx-auto ">
                <div className="flex justify-between items-center py-4">
                    <h1
                        className={`font-medium text-xl md:text-3xl ${
                            isNavbarBg ? "text-[--black]" : "text-[--primary]"
                        }`}
                    >
                        EEVEE
                    </h1>
                    {/* <Image src="/images/logo.png" alt='logo' width={1000} height={1000} className=' h-full object-contain w-[95px]' /> */}
                    <div className=" cursor-pointer lg:hidden flex items-center gap-2">
                        <AccountCircleRoundedIcon
                            size="20px"
                            sx={{
                                color: isNavbarBg ? "black" : "white",
                                cursor: "pointer",
                            }}
                            onClick={handleDropdownClick}
                        />

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleDropdownClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            PaperProps={{
                                sx: {
                                    backgroundColor: "var(--black)",
                                    color: "var(--white)",
                                },
                            }}
                        >
                            <MenuItem disabled>
                                <p className="text-sm font-medium">
                                    {loginState?.data?.user?.fullName}
                                </p>
                            </MenuItem>
                            <MenuItem disabled>
                                <p className="text-sm">
                                    {loginState?.data?.user?.email}
                                </p>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <p className="text-sm font-medium">Logout</p>
                            </MenuItem>
                        </Menu>
                        {!toggle && (
                            <MenuIcon
                                fontSize="large"
                                className={`${
                                    isNavbarBg
                                        ? "text-[--black]"
                                        : "text-[--white] hover:text-[--secondary]"
                                }`}
                                onClick={handleOpenSideNavbar}
                            />
                        )}
                    </div>
                    <div className="navMenuItems hidden lg:flex items-center lg:space-x-7">
                        {Routes.map((route, index) => (
                            <Link href={route.path} key={index}>
                                <li
                                    className={`relative list-none   hover:text-[--secondary] transition-all ease-in-out duration-500 p-1 ${
                                        isNavbarBg
                                            ? "text-[--black]"
                                            : "text-[--white]"
                                    } ${
                                        routePath === route.path &&
                                        "!text-[--secondary]"
                                    }`}
                                    onClick={() => setRoutePath(route.path)}
                                >
                                    {route.name}
                                </li>
                            </Link>
                        ))}
                    </div>
                    <div className="relative navMenuItems hidden lg:flex items-center lg:space-x-7">
                        <AccountCircleRoundedIcon
                            size="20px"
                            sx={{
                                color: isNavbarBg ? "black" : "white",
                                cursor: "pointer",
                            }}
                            onClick={handleDropdownClick}
                        />

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleDropdownClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            PaperProps={{
                                sx: {
                                    backgroundColor: "var(--black)",
                                    color: "var(--white)",
                                },
                            }}
                        >
                            <MenuItem disabled>
                                <p className="text-sm font-medium">
                                    {loginState?.data?.user?.fullName}
                                </p>
                            </MenuItem>
                            <MenuItem disabled>
                                <p className="text-sm">
                                    {loginState?.data?.user?.email}
                                </p>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <p className="text-sm font-medium">Logout</p>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`${
                    toggle && "bg-[--black] lg:hidden fixed w-[100%] !h-[100vh]"
                }`}
            >
                <div
                    className={`fixed top-0 left-0 w-[320px] !h-[100vh] bg-[--black] ition-all ease-in-out duration-500 ${
                        toggle ? "translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <div className="flex justify-between items-center p-3">
                        <h1
                            className={`font-medium text-xl md:text-3xl ${
                                isNavbarBg
                                    ? "text-[--white]"
                                    : "text-[--primary]"
                            }`}
                        >
                            EEVEE
                        </h1>
                        {/* <Image src="/images/logo.png" alt='logo' width={1000} height={1000} className=' h-full object-contain w-[90px]' /> */}
                        <CloseIcon
                            fontSize="medium"
                            className="cursor-pointer text-[--white] hover:text-[--secondary]"
                            onClick={handleCloseSideNavbar}
                        />
                    </div>
                    <div className="w-trans[100%] flex items-start flex-col py-4 space-y-4 list-none px-4 transition-all ease-in-out duration-500">
                        {Routes.map((route, index) => (
                            <Link
                                href={route.path}
                                key={index}
                                className="w-[100%]"
                                onClick={handleCloseSideNavbar}
                            >
                                <li
                                    className={`list-none w-[100%]  py-[8px] text-[20px] capitalize font-medium ml-1 ${
                                        routePath === route.path
                                            ? "text-[--secondary] "
                                            : "text-[--white] "
                                    }`}
                                >
                                    {route.name}
                                </li>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Index;