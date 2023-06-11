import React from 'react';

const Header = () => {

    return (
        <header className="">
            <nav className="mx-auto flex max-w-4xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="TailwindCSS"
                        />
                    </a>
                </div>
                <div className="lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Products
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Company
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-sm font-semibold leading-6 text-gray-900">
                    Log in
                </button>
            </div>

        </nav>
        </header>
    );
};

export default Header;
