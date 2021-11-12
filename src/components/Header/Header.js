import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_title.png';
import useAuth from '../../hooks/useAuth';
import { Transition } from '@headlessui/react';
import { BiUser } from 'react-icons/bi';
import './Header.css';

const Header = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-white">
			<nav className="relative z-20">
				<div className="container mx-auto">
					<div className="text-black">
						<div className="flex  items-center justify-between ">
							<NavLink to="/home">
								<img
									className="h-7 md:mb-4 my-4"
									src={logo}
									alt="logo"
								/>
							</NavLink>
							<div className="hidden md:flex items-center space-x-10  ">
								<NavLink
									to="/home"
									className="font-base text-black  pb-2 link link-underline link-underline-black"
									activeStyle={{
										color: '#000000',
										borderBottom: '2px solid black',
										fontWeight: '500',
										pointerEvents: 'none',
									}}
								>
									Home
								</NavLink>
								<NavLink
									to="/explore"
									className="font-base text-black  pb-2 link link-underline link-underline-black"
									activeStyle={{
										color: '#000000',
										borderBottom: '2px solid black',
										fontWeight: '500',
										pointerEvents: 'none',
									}}
								>
									All Sunglasses
								</NavLink>
								<NavLink
									to="/dashboard"
									className="font-base text-black  pb-2 link link-underline link-underline-black"
									activeStyle={{
										color: '#000000',
										borderBottom: '2px solid black',
										fontWeight: '500',
										pointerEvents: 'none',
									}}
								>
									Dashboard
								</NavLink>
							</div>
							<div>
								<div>
									{/* <!-- Header Icons --> */}
									{user.displayName ? (
										<div className=" hidden md:flex items-center justify-center ">
											<div className="flex flex-col items-center justify-center h-24 pt-5 ">
												<Link to="/dashboard">
													<div className="flex w-36 items-center justify-center h-8 mr-2 mb-3 ">
														<div className="w-3 h-3 m-1 text-xl border-bra mt-4">
															<BiUser className="text-black text-xl h-4 w-4" />
														</div>
														<p className="font-semibold text-black  py-1 transition duration-300 ease-in-out text-left pl-1 mt-4 text-sm">
															{user.displayName.toUpperCase()
																.length > 12
																? user.displayName.split(
																		' '
																  )[0]
																: user.displayName.toUpperCase()}
														</p>
													</div>
												</Link>
												<div
													onClick={logOut}
													className="cursor-default  text-black px-8 py-1 transition duration-300 ease-in-out hover:bg-brand-1 hover:text-white bg-white mb-10 uppercase border-2 shadow-xl border-black"
												>
													Sign Out
												</div>
											</div>
										</div>
									) : (
										<div className="hidden md:flex justify-center items-center h-24">
											{' '}
											<NavLink
												to="/login"
												className="cursor-default  text-black px-8 py-1 transition duration-300 ease-in-out hover:bg-brand-1 hover:text-white bg-white uppercase border-2 shadow-xl border-black mb-2"
												activeStyle={{
													backgroundColor: '#FFFFFF',
													color: '#1e1e1e',
													width: 'full',
												}}
											>
												Sign In
											</NavLink>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="-mr-2 md:hidden flex absolute right-5 top-2">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-brand-2 inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-brand-2 hover:bg-white focus:outline-none "
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
									className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full "
								>
									Home
								</NavLink>
								<NavLink
									to="/about"
									className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
								>
									About Us
								</NavLink>

								{user.displayName ? (
									<div className="flex items-center flex-col">
										<NavLink
											to="/addpackage"
											className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											Add Package
										</NavLink>
										<NavLink
											to="/alltours"
											className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											All Tours
										</NavLink>
										<NavLink
											to="/mytours"
											className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
										>
											My Tours
										</NavLink>
										<button
											onClick={logOut}
											className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
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
											<p className="font-semibold text-white  py-1 transition duration-300 ease-in-out text-left pl-1 text-lg uppercase">
												{user.displayName}
											</p>
										</div>
									</div>
								) : (
									<div className="flex items-center flex-col">
										{' '}
										<NavLink
											to="/login"
											className="font-semibold text-white hover:bg-white hover:text-brand-2 block px-3 py-2  text-base w-full"
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
