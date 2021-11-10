import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_title_dark.png';
import useAuth from '../../hooks/useAuth';
import { Transition } from '@headlessui/react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-brand-1 md:h-screen md:w-72 xl:w-80">
			<nav className="relative z-20">
				<div className="container mx-auto">
					<div className="text-black flex flex-col items-center">
						<NavLink to="/home">
							<img
								className="h-7 md:mt-32 md:my-10 my-5"
								src={logo}
								alt="logo"
							/>
						</NavLink>
						<div className="flex items-end justify-center">
							<div>
								{/* <!-- Header Icons --> */}
								{user.displayName ? (
									<div className="flex items-center justify-center">
										<div className="h-24 my-5">
											<button
												onClick={logOut}
												className="font-semibold text-brand-1 px-8 py-2 transition duration-300 ease-in-out bg-white mb-2"
											>
												Log Out
											</button>
											<Link to="/mytours">
												<div className="flex w-36 items-center justify-center h-8 mr-1">
													<p className="font-semibold text-white  py-1 transition duration-300 ease-in-out text-left pl-1 mt-4">
														{user.displayName
															.length > 10
															? user.displayName.split(
																	' '
															  )[0]
															: user.displayName}
													</p>
												</div>
											</Link>
										</div>
									</div>
								) : (
									<div className="flex justify-center items-end">
										{' '}
										<NavLink
											to="/login"
											className="font-semibold text-brand-1 px-8 py-2 transition duration-300 ease-in-out bg-white mb-10"
											activeStyle={{
												backgroundColor: '#FFFFFF',
												color: '#1e1e1e',
												width: 'full',
											}}
										>
											Login
										</NavLink>
									</div>
								)}
								<div className="hidden md:flex flex-col md:w-72 xl:w-80 uppercase text-sm lg:text-base">
									<NavLink
										to="/home"
										className="font-semibold text-bluegray-300 transition duration-500 ease-in-out hover:text-white link link-underline link-underline-red px-3 lg:px-6 py-4"
										activeStyle={{
											backgroundColor: '#FFFFFF',
											color: '#1e1e1e',
										}}
									>
										Home
									</NavLink>
									<NavLink
										to="/explore"
										className="font-semibold text-bluegray-300 transition duration-500 ease-in-out hover:text-white link link-underline link-underline-red px-3 lg:px-6 py-4"
										activeStyle={{
											backgroundColor: '#FFFFFF',
											color: '#1e1e1e',
										}}
									>
										All Products
									</NavLink>
								</div>
							</div>
						</div>

						<div className="-mr-2 md:hidden flex absolute right-5 top-2">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-brand-2 inline-flex items-center justify-center p-2 rounded-xl text-bg-brand-1 hover:text-brand-2 hover:bg-bg-brand-1 focus:outline-none "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden " id="mobile-menu">
							<div
								ref={ref}
								className=" pt-2 space-y-2  text-center mx-auto bg-brand-2"
							>
								<NavLink
									to="/home"
									className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full "
								>
									Home
								</NavLink>
								<NavLink
									to="/about"
									className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
								>
									About Us
								</NavLink>

								{user.displayName ? (
									<div className="flex items-center flex-col">
										<NavLink
											to="/addpackage"
											className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											Add Package
										</NavLink>
										<NavLink
											to="/alltours"
											className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											All Tours
										</NavLink>
										<NavLink
											to="/mytours"
											className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											My Tours
										</NavLink>
										<button
											onClick={logOut}
											className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											Log Out
										</button>
										<div className="flex items-center justify-center h-8 mr-1 py-6 bg-brand-2 w-full">
											<div className="w-6 h-6 m-1 text-xl border-bra">
												{user.photoURL ? (
													<img
														className="rounded-full"
														src={user.photoURL}
														alt=""
													/>
												) : (
													<FaUserCircle className="text-brand-2 text-xl h-6 w-6" />
												)}
											</div>
											<p className="font-semibold text-bg-brand-1  py-1 transition duration-300 ease-in-out text-left pl-1 text-lg uppercase">
												{user.displayName}
											</p>
										</div>
									</div>
								) : (
									<div className="flex items-center flex-col">
										{' '}
										<NavLink
											to="/login"
											className="font-semibold text-bg-brand-1 hover:bg-bg-brand-1 hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											Login
										</NavLink>
									</div>
								)}
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Header;
