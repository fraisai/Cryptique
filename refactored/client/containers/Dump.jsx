<>
<div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

    <aside id="sidebar" className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
    <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <ul className="pb-2 space-y-2">
            <li>
                <form action="#" method="GET" className="lg:hidden">
                <label for="mobile-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"></input>
                </div>
                </form>
            </li>
            <li>
                <a href="https://flowbite-admin-dashboard.vercel.app/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="ml-3" sidebar-toggle-item="">Dashboard</span>
                </a>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Layouts</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-layouts" className="hidden py-2 space-y-2">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/layouts/stacked/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Stacked</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/layouts/sidebar/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sidebar</a>
                </li>
                </ul>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-crud" data-collapse-toggle="dropdown-crud">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z"></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">CRUD</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-crud" className="space-y-2 py-2 hidden ">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/crud/products/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Products</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/crud/users/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Users</a>
                </li>
                </ul>
            </li>
            <li>
                <a href="https://flowbite-admin-dashboard.vercel.app/settings/" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ">
                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">Settings</span>
                </a>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Pages</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/pricing/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Pricing</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/maintenance/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Maintenance</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/404/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">404 not found</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/500/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">500 server error</a>
                </li>
                </ul>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Authentication</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-auth" className="hidden py-2 space-y-2">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-in/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign in</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-up/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign up</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/forgot-password/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Forgot password</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/reset-password/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Reset password</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/profile-lock/" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Profile lock</a>
                </li>
                </ul>
            </li>
            <li>
                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-playground" data-collapse-toggle="dropdown-playground">
                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"></path>
                    </svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Playground</span>
                    <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-playground" className="space-y-2 py-2 hidden ">
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/playground/stacked/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Stacked</a>
                </li>
                <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/playground/sidebar/" className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Sidebar</a>
                </li>
                </ul>
            </li>
            </ul>
            <div className="pt-2 space-y-2">
            <a href="https://github.com/themesberg/flowbite-admin-dashboard" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                <span className="ml-3" sidebar-toggle-item="">GitHub Repository</span>
            </a>
            <a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                <span className="ml-3" sidebar-toggle-item="">Flowbite Docs</span>
            </a>
            <a href="https://flowbite.com/docs/components/alerts/" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                <span className="ml-3" sidebar-toggle-item="">Components</span>
            </a>
            <a href="https://github.com/themesberg/flowbite-admin-dashboard/issues" target="_blank" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                <span className="ml-3" sidebar-toggle-item="">Support</span>
            </a>
            </div>
        </div>
        </div>
        <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800" sidebar-bottom-menu="">
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
        </a>
        <a href="https://flowbite-admin-dashboard.vercel.app/settings/" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
        </a>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(71px, -64px, 0px);" data-popper-placement="top">
            Settings page
            <div className="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(54.5px, 0px, 0px);"></div>
        </div>
        <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlinkHref="#a" y="420"></use><use xlinkHref="#a" y="840"></use><use xlinkHref="#a" y="1260"></use></g><use xlinkHref="#a" y="1680"></use></g><use xlinkHref="#b" x="247" y="210"></use></g><use xlinkHref="#c" x="494"></use></g><use xlinkHref="#d" x="988"></use><use xlinkHref="#c" x="1976"></use><use xlinkHref="#e" x="2470"></use></g></svg>
        </button>
        
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" id="language-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(183.5px, 838px, 0px);" data-popper-placement="bottom">
            <ul className="py-1" role="none">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                    <svg className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                    <g fillRule="evenodd">
                        <g stroke-width="1pt">
                        <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                        <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path>
                        <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path>
                    </g>
                    </svg>              
                    English (US)
                </div>
                </a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                    <svg className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                    <path fill="#ffce00" d="M0 341.3h512V512H0z"></path>
                    <path d="M0 0h512v170.7H0z"></path>
                    <path fill="#d00" d="M0 170.7h512v170.6H0z"></path>
                    </svg>
                    Deutsch
                </div>
                </a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                    <svg className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                    <g fillRule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z"></path>
                        <path fill="#009246" d="M0 0h170.7v512H0z"></path>
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path>
                    </g>
                    </svg>              
                    Italiano
                </div>
                </a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div className="inline-flex items-center">
                    <svg className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                    <defs>
                        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path>
                    </defs>
                    <path fill="#de2910" d="M0 0h512v512H0z"></path>
                    <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a"></use>
                    <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a"></use>
                    <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a"></use>
                    <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a"></use>
                    <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a"></use>
                    </svg>
                    中文 (繁體)
                </div>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </aside>


    <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
            <div className="px-4 pt-6">
                <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                {/* <!-- Main widget --> */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
                        <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                        12.5%
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    </div>
                    <div id="main-chart" style="min-height: 435px;"><div id="apexcharts9hldmerp" className="apexcharts-canvas apexcharts9hldmerp apexcharts-theme-light" style="width: 871px; height: 420px;"><svg id="SvgjsSvg2023" width="871" height="420" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><foreignObject x="0" y="0" width="871" height="420"><div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style="inset: auto 0px 1px; position: absolute; max-height: 210px;"><div className="apexcharts-legend-series" rel="1" seriesname="Revenue" data:collapsed="false" style="margin: 2px 10px;"><span className="apexcharts-legend-marker" rel="1" data:collapsed="false" style="background: rgb(26, 86, 219); color: rgb(26, 86, 219); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="1" i="0" data:default-text="Revenue" data:collapsed="false" style="color: rgb(107, 114, 128); font-size: 14px; font-weight: 500; font-family: Inter, sans-serif;">Revenue</span></div><div className="apexcharts-legend-series" rel="2" seriesname="Revenuexxpreviousxperiodx" data:collapsed="false" style="margin: 2px 10px;"><span className="apexcharts-legend-marker" rel="2" data:collapsed="false" style="background: rgb(253, 186, 140); color: rgb(253, 186, 140); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span className="apexcharts-legend-text" rel="2" i="1" data:default-text="Revenue%20(previous%20period)" data:collapsed="false" style="color: rgb(107, 114, 128); font-size: 14px; font-weight: 500; font-family: Inter, sans-serif;">Revenue (previous period)</span></div></div>
                    
                
                </foreignObject><g id="SvgjsG2025" className="apexcharts-inner apexcharts-graphical" transform="translate(93.796875, 30)"><defs id="SvgjsDefs2024"><clipPath id="gridRectMask9hldmerp"><rect id="SvgjsRect2031" width="751.75" height="315.494" x="-4" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask9hldmerp"></clipPath><clipPath id="nonForecastMask9hldmerp"></clipPath><clipPath id="gridRectMarkerMask9hldmerp"><rect id="SvgjsRect2032" width="767.75" height="335.494" x="-12" y="-12" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient2050" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2051" stop-opacity="0.45" stop-color="rgba(26,86,219,0.45)" offset="0"></stop><stop id="SvgjsStop2052" stop-opacity="0" stop-color="rgba(141,171,237,0)" offset="1"></stop><stop id="SvgjsStop2053" stop-opacity="0" stop-color="rgba(141,171,237,0)" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient2072" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2073" stop-opacity="0.45" stop-color="rgba(253,186,140,0.45)" offset="0"></stop><stop id="SvgjsStop2074" stop-opacity="0" stop-color="rgba(254,221,198,0)" offset="1"></stop><stop id="SvgjsStop2075" stop-opacity="0" stop-color="rgba(254,221,198,0)" offset="1"></stop></linearGradient></defs><line id="SvgjsLine2030" x1="0" y1="0" x2="0" y2="311.494" stroke="#f3f4f6" stroke-dasharray="10" stroke-linecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="311.494" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2078" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2079" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText2081" font-family="Inter, sans-serif" x="0" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2082">01 Feb</tspan><title>01 Feb</title></text><text id="SvgjsText2084" font-family="Inter, sans-serif" x="123.95833333333334" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2085">02 Feb</tspan><title>02 Feb</title></text><text id="SvgjsText2087" font-family="Inter, sans-serif" x="247.91666666666666" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2088">03 Feb</tspan><title>03 Feb</title></text><text id="SvgjsText2090" font-family="Inter, sans-serif" x="371.87499999999994" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2091">04 Feb</tspan><title>04 Feb</title></text><text id="SvgjsText2093" font-family="Inter, sans-serif" x="495.8333333333333" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2094">05 Feb</tspan><title>05 Feb</title></text><text id="SvgjsText2096" font-family="Inter, sans-serif" x="619.7916666666667" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2097">06 Feb</tspan><title>06 Feb</title></text><text id="SvgjsText2099" font-family="Inter, sans-serif" x="743.7500000000001" y="340.494" text-anchor="middle" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2100">07 Feb</tspan><title>07 Feb</title></text></g><line id="SvgjsLine2101" x1="0" y1="312.494" x2="743.75" y2="312.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"></line></g><g id="SvgjsG2114" className="apexcharts-grid"><g id="SvgjsG2115" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine2124" x1="0" y1="0" x2="743.75" y2="0" stroke="#f3f4f6" stroke-dasharray="1" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2125" x1="0" y1="77.8735" x2="743.75" y2="77.8735" stroke="#f3f4f6" stroke-dasharray="1" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2126" x1="0" y1="155.747" x2="743.75" y2="155.747" stroke="#f3f4f6" stroke-dasharray="1" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2127" x1="0" y1="233.62050000000002" x2="743.75" y2="233.62050000000002" stroke="#f3f4f6" stroke-dasharray="1" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2128" x1="0" y1="311.494" x2="743.75" y2="311.494" stroke="#f3f4f6" stroke-dasharray="1" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG2116" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine2117" x1="0" y1="312.494" x2="0" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2118" x1="123.95833333333333" y1="312.494" x2="123.95833333333333" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2119" x1="247.91666666666666" y1="312.494" x2="247.91666666666666" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2120" x1="371.875" y1="312.494" x2="371.875" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2121" x1="495.8333333333333" y1="312.494" x2="495.8333333333333" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2122" x1="619.7916666666666" y1="312.494" x2="619.7916666666666" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2123" x1="743.75" y1="312.494" x2="743.75" y2="318.494" stroke="#f3f4f6" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine2130" x1="0" y1="311.494" x2="743.75" y2="311.494" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2129" x1="0" y1="1" x2="0" y2="311.494" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG2033" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG2034" className="apexcharts-series" seriesName="Revenue" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2054" d="M 0 311.494L 0 172.87917000000016C 43.385416666666664 172.87917000000016 80.57291666666669 226.61188500000026 123.95833333333334 226.61188500000026C 167.34375 226.61188500000026 204.53125000000003 250.75266999999985 247.91666666666669 250.75266999999985C 291.30208333333337 250.75266999999985 328.48958333333337 106.68669499999987 371.875 106.68669499999987C 415.2604166666667 106.68669499999987 452.4479166666667 172.87917000000016 495.83333333333337 172.87917000000016C 539.21875 172.87917000000016 576.40625 211.81592 619.7916666666666 211.81592C 663.1770833333333 211.81592 700.3645833333334 289.68942000000015 743.75 289.68942000000015C 743.75 289.68942000000015 743.75 289.68942000000015 743.75 311.494M 743.75 289.68942000000015z" fill="url(#SvgjsLinearGradient2050)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMask9hldmerp)" pathTo="M 0 311.494L 0 172.87917000000016C 43.385416666666664 172.87917000000016 80.57291666666669 226.61188500000026 123.95833333333334 226.61188500000026C 167.34375 226.61188500000026 204.53125000000003 250.75266999999985 247.91666666666669 250.75266999999985C 291.30208333333337 250.75266999999985 328.48958333333337 106.68669499999987 371.875 106.68669499999987C 415.2604166666667 106.68669499999987 452.4479166666667 172.87917000000016 495.83333333333337 172.87917000000016C 539.21875 172.87917000000016 576.40625 211.81592 619.7916666666666 211.81592C 663.1770833333333 211.81592 700.3645833333334 289.68942000000015 743.75 289.68942000000015C 743.75 289.68942000000015 743.75 289.68942000000015 743.75 311.494M 743.75 289.68942000000015z" pathFrom="M -1 2647.699L -1 2647.699L 123.95833333333334 2647.699L 247.91666666666669 2647.699L 371.875 2647.699L 495.83333333333337 2647.699L 619.7916666666666 2647.699L 743.75 2647.699"></path><path id="SvgjsPath2055" d="M 0 172.87917000000016C 43.385416666666664 172.87917000000016 80.57291666666669 226.61188500000026 123.95833333333334 226.61188500000026C 167.34375 226.61188500000026 204.53125000000003 250.75266999999985 247.91666666666669 250.75266999999985C 291.30208333333337 250.75266999999985 328.48958333333337 106.68669499999987 371.875 106.68669499999987C 415.2604166666667 106.68669499999987 452.4479166666667 172.87917000000016 495.83333333333337 172.87917000000016C 539.21875 172.87917000000016 576.40625 211.81592 619.7916666666666 211.81592C 663.1770833333333 211.81592 700.3645833333334 289.68942000000015 743.75 289.68942000000015" fill="none" fill-opacity="1" stroke="#1a56db" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMask9hldmerp)" pathTo="M 0 172.87917000000016C 43.385416666666664 172.87917000000016 80.57291666666669 226.61188500000026 123.95833333333334 226.61188500000026C 167.34375 226.61188500000026 204.53125000000003 250.75266999999985 247.91666666666669 250.75266999999985C 291.30208333333337 250.75266999999985 328.48958333333337 106.68669499999987 371.875 106.68669499999987C 415.2604166666667 106.68669499999987 452.4479166666667 172.87917000000016 495.83333333333337 172.87917000000016C 539.21875 172.87917000000016 576.40625 211.81592 619.7916666666666 211.81592C 663.1770833333333 211.81592 700.3645833333334 289.68942000000015 743.75 289.68942000000015" pathFrom="M -1 2647.699L -1 2647.699L 123.95833333333334 2647.699L 247.91666666666669 2647.699L 371.875 2647.699L 495.83333333333337 2647.699L 619.7916666666666 2647.699L 743.75 2647.699"></path><g id="SvgjsG2035" className="apexcharts-series-markers-wrap" data:realIndex="0"><g id="SvgjsG2037" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2038" r="5" cx="0" cy="172.87917000000016" className="apexcharts-marker no-pointer-events wg20ns2qg" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="0" j="0" index="0" default-marker-size="5"></circle><circle id="SvgjsCircle2039" r="5" cx="123.95833333333334" cy="226.61188500000026" className="apexcharts-marker no-pointer-events wnioi28ulg" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="1" j="1" index="0" default-marker-size="5"></circle></g><g id="SvgjsG2040" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2041" r="5" cx="247.91666666666669" cy="250.75266999999985" className="apexcharts-marker no-pointer-events w4glc09yi" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="2" j="2" index="0" default-marker-size="5"></circle></g><g id="SvgjsG2042" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2043" r="5" cx="371.875" cy="106.68669499999987" className="apexcharts-marker no-pointer-events wvhe4jbfz" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="3" j="3" index="0" default-marker-size="5"></circle></g><g id="SvgjsG2044" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2045" r="5" cx="495.83333333333337" cy="172.87917000000016" className="apexcharts-marker no-pointer-events w8m90v6qr" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="4" j="4" index="0" default-marker-size="5"></circle></g><g id="SvgjsG2046" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2047" r="5" cx="619.7916666666666" cy="211.81592" className="apexcharts-marker no-pointer-events wvnzser36k" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="5" j="5" index="0" default-marker-size="5"></circle></g><g id="SvgjsG2048" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2049" r="5" cx="743.75" cy="289.68942000000015" className="apexcharts-marker no-pointer-events wv5xpp1sk" stroke="#ffffff" fill="#1a56db" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="6" j="6" index="0" default-marker-size="5"></circle></g></g></g><g id="SvgjsG2056" className="apexcharts-series" seriesName="Revenuexxpreviousxperiodx" data:longestSeries="true" rel="2" data:realIndex="1"><path id="SvgjsPath2076" d="M 0 311.494L 0 95.00567000000001C 43.385416666666664 95.00567000000001 80.57291666666669 29.202562500000113 123.95833333333334 29.202562500000113C 167.34375 29.202562500000113 204.53125000000003 146.40218000000004 247.91666666666669 146.40218000000004C 291.30208333333337 146.40218000000004 328.48958333333337 172.87917000000016 371.875 172.87917000000016C 415.2604166666667 172.87917000000016 452.4479166666667 83.32464500000015 495.83333333333337 83.32464500000015C 539.21875 83.32464500000015 576.40625 17.13216999999986 619.7916666666666 17.13216999999986C 663.1770833333333 17.13216999999986 700.3645833333334 71.64361999999983 743.75 71.64361999999983C 743.75 71.64361999999983 743.75 71.64361999999983 743.75 311.494M 743.75 71.64361999999983z" fill="url(#SvgjsLinearGradient2072)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-area" index="1" clip-path="url(#gridRectMask9hldmerp)" pathTo="M 0 311.494L 0 95.00567000000001C 43.385416666666664 95.00567000000001 80.57291666666669 29.202562500000113 123.95833333333334 29.202562500000113C 167.34375 29.202562500000113 204.53125000000003 146.40218000000004 247.91666666666669 146.40218000000004C 291.30208333333337 146.40218000000004 328.48958333333337 172.87917000000016 371.875 172.87917000000016C 415.2604166666667 172.87917000000016 452.4479166666667 83.32464500000015 495.83333333333337 83.32464500000015C 539.21875 83.32464500000015 576.40625 17.13216999999986 619.7916666666666 17.13216999999986C 663.1770833333333 17.13216999999986 700.3645833333334 71.64361999999983 743.75 71.64361999999983C 743.75 71.64361999999983 743.75 71.64361999999983 743.75 311.494M 743.75 71.64361999999983z" pathFrom="M -1 2647.699L -1 2647.699L 123.95833333333334 2647.699L 247.91666666666669 2647.699L 371.875 2647.699L 495.83333333333337 2647.699L 619.7916666666666 2647.699L 743.75 2647.699"></path><path id="SvgjsPath2077" d="M 0 95.00567000000001C 43.385416666666664 95.00567000000001 80.57291666666669 29.202562500000113 123.95833333333334 29.202562500000113C 167.34375 29.202562500000113 204.53125000000003 146.40218000000004 247.91666666666669 146.40218000000004C 291.30208333333337 146.40218000000004 328.48958333333337 172.87917000000016 371.875 172.87917000000016C 415.2604166666667 172.87917000000016 452.4479166666667 83.32464500000015 495.83333333333337 83.32464500000015C 539.21875 83.32464500000015 576.40625 17.13216999999986 619.7916666666666 17.13216999999986C 663.1770833333333 17.13216999999986 700.3645833333334 71.64361999999983 743.75 71.64361999999983" fill="none" fill-opacity="1" stroke="#fdba8c" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" className="apexcharts-area" index="1" clip-path="url(#gridRectMask9hldmerp)" pathTo="M 0 95.00567000000001C 43.385416666666664 95.00567000000001 80.57291666666669 29.202562500000113 123.95833333333334 29.202562500000113C 167.34375 29.202562500000113 204.53125000000003 146.40218000000004 247.91666666666669 146.40218000000004C 291.30208333333337 146.40218000000004 328.48958333333337 172.87917000000016 371.875 172.87917000000016C 415.2604166666667 172.87917000000016 452.4479166666667 83.32464500000015 495.83333333333337 83.32464500000015C 539.21875 83.32464500000015 576.40625 17.13216999999986 619.7916666666666 17.13216999999986C 663.1770833333333 17.13216999999986 700.3645833333334 71.64361999999983 743.75 71.64361999999983" pathFrom="M -1 2647.699L -1 2647.699L 123.95833333333334 2647.699L 247.91666666666669 2647.699L 371.875 2647.699L 495.83333333333337 2647.699L 619.7916666666666 2647.699L 743.75 2647.699"></path><g id="SvgjsG2057" className="apexcharts-series-markers-wrap" data:realIndex="1"><g id="SvgjsG2059" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2060" r="5" cx="0" cy="95.00567000000001" className="apexcharts-marker no-pointer-events we3jmk6th" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="0" j="0" index="1" default-marker-size="5"></circle><circle id="SvgjsCircle2061" r="5" cx="123.95833333333334" cy="29.202562500000113" className="apexcharts-marker no-pointer-events wf2owftrw" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="1" j="1" index="1" default-marker-size="5"></circle></g><g id="SvgjsG2062" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2063" r="5" cx="247.91666666666669" cy="146.40218000000004" className="apexcharts-marker no-pointer-events wpdeei3p9" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="2" j="2" index="1" default-marker-size="5"></circle></g><g id="SvgjsG2064" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2065" r="5" cx="371.875" cy="172.87917000000016" className="apexcharts-marker no-pointer-events wucnpmcsj" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="3" j="3" index="1" default-marker-size="5"></circle></g><g id="SvgjsG2066" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2067" r="5" cx="495.83333333333337" cy="83.32464500000015" className="apexcharts-marker no-pointer-events w2hxvheko" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="4" j="4" index="1" default-marker-size="5"></circle></g><g id="SvgjsG2068" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2069" r="5" cx="619.7916666666666" cy="17.13216999999986" className="apexcharts-marker no-pointer-events wkcvzjq5s" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="5" j="5" index="1" default-marker-size="5"></circle></g><g id="SvgjsG2070" className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask9hldmerp)"><circle id="SvgjsCircle2071" r="5" cx="743.75" cy="71.64361999999983" className="apexcharts-marker no-pointer-events w74cj77mo" stroke="#ffffff" fill="#fdba8c" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" rel="6" j="6" index="1" default-marker-size="5"></circle></g></g></g><g id="SvgjsG2036" className="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG2058" className="apexcharts-datalabels" data:realIndex="1"></g></g><line id="SvgjsLine2131" x1="0" y1="0" x2="743.75" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine2132" x1="0" y1="0" x2="743.75" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2133" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG2134" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG2135" className="apexcharts-point-annotations"></g><rect id="SvgjsRect2136" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-zoom-rect"></rect><rect id="SvgjsRect2137" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-selection-rect"></rect></g><rect id="SvgjsRect2029" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2102" className="apexcharts-yaxis" rel="0" transform="translate(40.796875, 0)"><g id="SvgjsG2103" className="apexcharts-yaxis-texts-g"><text id="SvgjsText2104" font-family="Inter, sans-serif" x="20" y="31.4" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2105">$6800</tspan><title>$6800</title></text><text id="SvgjsText2106" font-family="Inter, sans-serif" x="20" y="109.27350000000001" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2107">$6600</tspan><title>$6600</title></text><text id="SvgjsText2108" font-family="Inter, sans-serif" x="20" y="187.14700000000002" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2109">$6400</tspan><title>$6400</title></text><text id="SvgjsText2110" font-family="Inter, sans-serif" x="20" y="265.02049999999997" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2111">$6200</tspan><title>$6200</title></text><text id="SvgjsText2112" font-family="Inter, sans-serif" x="20" y="342.894" text-anchor="end" dominant-baseline="auto" font-size="14px" font-weight="500" fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Inter, sans-serif;"><tspan id="SvgjsTspan2113">$6000</tspan><title>$6000</title></text></g></g><g id="SvgjsG2026" className="apexcharts-annotations"></g></svg><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="order: 2;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(253, 186, 140);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Inter, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                    <div>
                        <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        {/* <!-- Dropdown menu --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="weekly-sales-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(355px, 707px, 0px);" data-popper-placement="bottom">
                            <div className="px-4 py-3" role="none">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                Sep 16, 2021 - Sep 22, 2021
                            </p>
                            </div>
                            <ul className="py-1" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                            </li>
                            </ul>
                            <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                        Sales Report
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </div>
                </div>
                {/* <!--Tabs widget --> */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Statistics this month
                    <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg><span className="sr-only">Show information</span></button>
                    </h3>
                    <div data-popover="" id="popover-description" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(221px, -5956px, 0px);" data-popper-placement="top-start">
                    <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Statistics</h3>
                        <p>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</p>
                        <a href="#" className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></a>
                    </div>
                    <div data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(7px, 0px, 0px);"></div>
                    </div>
                    <div className="sm:hidden">
                        <label for="tabs" className="sr-only">Select tab</label>
                        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Statistics</option>
                            <option>Services</option>
                            <option>FAQ</option>
                        </select>
                    </div>
                    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                        <li className="w-full">
                            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Top products</button>
                        </li>
                        <li className="w-full">
                            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Top Customers</button>
                        </li>
                    </ul>
                    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                        <div className="pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center min-w-0">
                                <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image"/>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    iPhone 14 Pro 
                                    </p>
                                    <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                    </svg>
                                    2.5% 
                                    <span className="ml-2 text-gray-500">vs last month</span>
                                    </div>
                                </div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $445,467
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center min-w-0">
                                <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image"/>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Apple iMac 27"
                                    </p>
                                    <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                    </svg>
                                    12.5% 
                                    <span className="ml-2 text-gray-500">vs last month</span>
                                    </div>
                                </div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $256,982
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center min-w-0">
                                <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image"/>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Apple Watch SE
                                    </p>
                                    <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                                    </svg>
                                    1.35% 
                                    <span className="ml-2 text-gray-500">vs last month</span>
                                    </div>
                                </div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $201,869
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center min-w-0">
                                <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image"/>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Apple iPad Air
                                    </p>
                                    <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                    </svg>
                                    12.5% 
                                    <span className="ml-2 text-gray-500">vs last month</span>
                                    </div>
                                </div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $103,967
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center min-w-0">
                                <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image"/>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Apple iMac 24"
                                    </p>
                                    <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                                    </svg>
                                    2% 
                                    <span className="ml-2 text-gray-500">vs last month</span>
                                    </div>
                                </div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $98,543
                                </div>
                            </div>
                            </li>               
                        </ul>
                        </div>
                        <div className="hidden pt-4" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $3320
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $2467
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $2235
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Thomes Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $1842
                                </div>
                            </div>
                            </li>
                            <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $1044
                                </div>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                    <div>
                        <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="stats-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        {/* <!-- Dropdown menu --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="stats-dropdown" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(355px, 451px, 0px);" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                            <div className="px-4 py-3" role="none">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                                Sep 16, 2021 - Sep 22, 2021
                            </p>
                            </div>
                            <ul className="py-1" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                            </li>
                            </ul>
                            <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                        Full Report
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                        </svg>
                        12.5% 
                        </span>
                        Since last month
                    </p>
                    </div>
                    <div className="w-full" id="new-products-chart" style="min-height: 155px;"><div id="apexchartsh0n1f1w2" className="apexcharts-canvas apexchartsh0n1f1w2 apexcharts-theme-light" style="width: 436px; height: 140px;"><svg id="SvgjsSvg2138" width="436" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2140" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)"><defs id="SvgjsDefs2139"><linearGradient id="SvgjsLinearGradient2143" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2144" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop2145" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop2146" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMaskh0n1f1w2"><rect id="SvgjsRect2148" width="423" height="100" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskh0n1f1w2"></clipPath><clipPath id="nonForecastMaskh0n1f1w2"></clipPath><clipPath id="gridRectMarkerMaskh0n1f1w2"><rect id="SvgjsRect2149" width="418" height="99" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><rect id="SvgjsRect2147" width="53.22857142857143" height="95" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient2143)" className="apexcharts-xcrosshairs" y2="95" filter="none" fill-opacity="0.9"></rect><g id="SvgjsG2168" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2169" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG2178" className="apexcharts-grid"><g id="SvgjsG2179" className="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2181" x1="0" y1="0" x2="414" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2182" x1="0" y1="23.75" x2="414" y2="23.75" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2183" x1="0" y1="47.5" x2="414" y2="47.5" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2184" x1="0" y1="71.25" x2="414" y2="71.25" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2185" x1="0" y1="95" x2="414" y2="95" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG2180" className="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2187" x1="0" y1="95" x2="414" y2="95" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2186" x1="0" y1="1" x2="0" y2="95" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG2150" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG2151" className="apexcharts-series" rel="1" seriesName="Quantity" data:realIndex="0"><path id="SvgjsPath2155" d="M 2.957142857142859 95L 2.957142857142859 17.25Q 2.957142857142859 14.25 5.957142857142859 14.25L 48.18571428571428 14.25Q 51.18571428571428 14.25 51.18571428571428 17.25L 51.18571428571428 17.25L 51.18571428571428 95L 51.18571428571428 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 2.957142857142859 95L 2.957142857142859 17.25Q 2.957142857142859 14.25 5.957142857142859 14.25L 48.18571428571428 14.25Q 51.18571428571428 14.25 51.18571428571428 17.25L 51.18571428571428 17.25L 51.18571428571428 95L 51.18571428571428 95z" pathFrom="M 2.957142857142859 95L 2.957142857142859 95L 51.18571428571428 95L 51.18571428571428 95L 51.18571428571428 95L 51.18571428571428 95L 51.18571428571428 95L 2.957142857142859 95" cy="14.25" cx="59.60000000000001" j="0" val="170" barHeight="80.75" barWidth="53.22857142857143"></path><path id="SvgjsPath2157" d="M 62.10000000000001 95L 62.10000000000001 12.5Q 62.10000000000001 9.5 65.10000000000001 9.5L 107.32857142857144 9.5Q 110.32857142857144 9.5 110.32857142857144 12.5L 110.32857142857144 12.5L 110.32857142857144 95L 110.32857142857144 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 62.10000000000001 95L 62.10000000000001 12.5Q 62.10000000000001 9.5 65.10000000000001 9.5L 107.32857142857144 9.5Q 110.32857142857144 9.5 110.32857142857144 12.5L 110.32857142857144 12.5L 110.32857142857144 95L 110.32857142857144 95z" pathFrom="M 62.10000000000001 95L 62.10000000000001 95L 110.32857142857144 95L 110.32857142857144 95L 110.32857142857144 95L 110.32857142857144 95L 110.32857142857144 95L 62.10000000000001 95" cy="9.5" cx="118.74285714285716" j="1" val="180" barHeight="85.5" barWidth="53.22857142857143"></path><path id="SvgjsPath2159" d="M 121.24285714285716 95L 121.24285714285716 20.099999999999994Q 121.24285714285716 17.099999999999994 124.24285714285716 17.099999999999994L 166.4714285714286 17.099999999999994Q 169.4714285714286 17.099999999999994 169.4714285714286 20.099999999999994L 169.4714285714286 20.099999999999994L 169.4714285714286 95L 169.4714285714286 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 121.24285714285716 95L 121.24285714285716 20.099999999999994Q 121.24285714285716 17.099999999999994 124.24285714285716 17.099999999999994L 166.4714285714286 17.099999999999994Q 169.4714285714286 17.099999999999994 169.4714285714286 20.099999999999994L 169.4714285714286 20.099999999999994L 169.4714285714286 95L 169.4714285714286 95z" pathFrom="M 121.24285714285716 95L 121.24285714285716 95L 169.4714285714286 95L 169.4714285714286 95L 169.4714285714286 95L 169.4714285714286 95L 169.4714285714286 95L 121.24285714285716 95" cy="17.099999999999994" cx="177.8857142857143" j="2" val="164" barHeight="77.9" barWidth="53.22857142857143"></path><path id="SvgjsPath2161" d="M 180.3857142857143 95L 180.3857142857143 29.125Q 180.3857142857143 26.125 183.3857142857143 26.125L 225.61428571428573 26.125Q 228.61428571428573 26.125 228.61428571428573 29.125L 228.61428571428573 29.125L 228.61428571428573 95L 228.61428571428573 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 180.3857142857143 95L 180.3857142857143 29.125Q 180.3857142857143 26.125 183.3857142857143 26.125L 225.61428571428573 26.125Q 228.61428571428573 26.125 228.61428571428573 29.125L 228.61428571428573 29.125L 228.61428571428573 95L 228.61428571428573 95z" pathFrom="M 180.3857142857143 95L 180.3857142857143 95L 228.61428571428573 95L 228.61428571428573 95L 228.61428571428573 95L 228.61428571428573 95L 228.61428571428573 95L 180.3857142857143 95" cy="26.125" cx="237.02857142857144" j="3" val="145" barHeight="68.875" barWidth="53.22857142857143"></path><path id="SvgjsPath2163" d="M 239.52857142857144 95L 239.52857142857144 5.849999999999994Q 239.52857142857144 2.8499999999999943 242.52857142857144 2.8499999999999943L 284.75714285714287 2.8499999999999943Q 287.75714285714287 2.8499999999999943 287.75714285714287 5.849999999999994L 287.75714285714287 5.849999999999994L 287.75714285714287 95L 287.75714285714287 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 239.52857142857144 95L 239.52857142857144 5.849999999999994Q 239.52857142857144 2.8499999999999943 242.52857142857144 2.8499999999999943L 284.75714285714287 2.8499999999999943Q 287.75714285714287 2.8499999999999943 287.75714285714287 5.849999999999994L 287.75714285714287 5.849999999999994L 287.75714285714287 95L 287.75714285714287 95z" pathFrom="M 239.52857142857144 95L 239.52857142857144 95L 287.75714285714287 95L 287.75714285714287 95L 287.75714285714287 95L 287.75714285714287 95L 287.75714285714287 95L 239.52857142857144 95" cy="2.8499999999999943" cx="296.1714285714286" j="4" val="194" barHeight="92.15" barWidth="53.22857142857143"></path><path id="SvgjsPath2165" d="M 298.6714285714286 95L 298.6714285714286 17.25Q 298.6714285714286 14.25 301.6714285714286 14.25L 343.9 14.25Q 346.9 14.25 346.9 17.25L 346.9 17.25L 346.9 95L 346.9 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 298.6714285714286 95L 298.6714285714286 17.25Q 298.6714285714286 14.25 301.6714285714286 14.25L 343.9 14.25Q 346.9 14.25 346.9 17.25L 346.9 17.25L 346.9 95L 346.9 95z" pathFrom="M 298.6714285714286 95L 298.6714285714286 95L 346.9 95L 346.9 95L 346.9 95L 346.9 95L 346.9 95L 298.6714285714286 95" cy="14.25" cx="355.31428571428575" j="5" val="170" barHeight="80.75" barWidth="53.22857142857143"></path><path id="SvgjsPath2167" d="M 357.81428571428575 95L 357.81428571428575 24.375Q 357.81428571428575 21.375 360.81428571428575 21.375L 403.0428571428572 21.375Q 406.0428571428572 21.375 406.0428571428572 24.375L 406.0428571428572 24.375L 406.0428571428572 95L 406.0428571428572 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="5" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskh0n1f1w2)" pathTo="M 357.81428571428575 95L 357.81428571428575 24.375Q 357.81428571428575 21.375 360.81428571428575 21.375L 403.0428571428572 21.375Q 406.0428571428572 21.375 406.0428571428572 24.375L 406.0428571428572 24.375L 406.0428571428572 95L 406.0428571428572 95z" pathFrom="M 357.81428571428575 95L 357.81428571428575 95L 406.0428571428572 95L 406.0428571428572 95L 406.0428571428572 95L 406.0428571428572 95L 406.0428571428572 95L 357.81428571428575 95" cy="21.375" cx="414.4571428571429" j="6" val="155" barHeight="73.625" barWidth="53.22857142857143"></path><g id="SvgjsG2153" className="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG2154" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2156" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2158" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2160" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2162" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2164" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2166" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG2152" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2188" x1="0" y1="0" x2="414" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine2189" x1="0" y1="0" x2="414" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2190" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG2191" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG2192" className="apexcharts-point-annotations"></g></g><g id="SvgjsG2177" className="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2141" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 70px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text"></div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
                    <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                    <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                        </svg>
                        3,4% 
                        </span>
                        Since last month
                    </p>
                    </div>
                    <div className="w-full" id="week-signups-chart" style="min-height: 155px;"><div id="apexcharts8938dncz" className="apexcharts-canvas apexcharts8938dncz apexcharts-theme-light" style="width: 436px; height: 140px;"><svg id="SvgjsSvg2283" width="436" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2285" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)"><defs id="SvgjsDefs2284"><linearGradient id="SvgjsLinearGradient2288" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2289" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop2290" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop2291" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMask8938dncz"><rect id="SvgjsRect2293" width="418" height="95" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask8938dncz"></clipPath><clipPath id="nonForecastMask8938dncz"></clipPath><clipPath id="gridRectMarkerMask8938dncz"><rect id="SvgjsRect2294" width="418" height="99" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><rect id="SvgjsRect2292" width="14.785714285714286" height="95" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient2288)" className="apexcharts-xcrosshairs" y2="95" filter="none" fill-opacity="0.9"></rect><g id="SvgjsG2320" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2321" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG2330" className="apexcharts-grid"><g id="SvgjsG2331" className="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2333" x1="0" y1="0" x2="414" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2334" x1="0" y1="19" x2="414" y2="19" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2335" x1="0" y1="38" x2="414" y2="38" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2336" x1="0" y1="57" x2="414" y2="57" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2337" x1="0" y1="76" x2="414" y2="76" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line><line id="SvgjsLine2338" x1="0" y1="95" x2="414" y2="95" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline"></line></g><g id="SvgjsG2332" className="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2340" x1="0" y1="95" x2="414" y2="95" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine2339" x1="0" y1="1" x2="0" y2="95" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG2295" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG2296" className="apexcharts-series" rel="1" seriesName="Users" data:realIndex="0"><rect id="SvgjsRect2299" width="14.785714285714286" height="95" x="22.17857142857143" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2301" d="M 22.17857142857143 95L 22.17857142857143 55.75666666666667Q 22.17857142857143 52.75666666666667 25.17857142857143 52.75666666666667L 33.964285714285715 52.75666666666667Q 36.964285714285715 52.75666666666667 36.964285714285715 55.75666666666667L 36.964285714285715 55.75666666666667L 36.964285714285715 95L 36.964285714285715 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 22.17857142857143 95L 22.17857142857143 55.75666666666667Q 22.17857142857143 52.75666666666667 25.17857142857143 52.75666666666667L 33.964285714285715 52.75666666666667Q 36.964285714285715 52.75666666666667 36.964285714285715 55.75666666666667L 36.964285714285715 55.75666666666667L 36.964285714285715 95L 36.964285714285715 95z" pathFrom="M 22.17857142857143 95L 22.17857142857143 95L 36.964285714285715 95L 36.964285714285715 95L 36.964285714285715 95L 36.964285714285715 95L 36.964285714285715 95L 22.17857142857143 95" cy="52.75666666666667" cx="81.32142857142858" j="0" val="1334" barHeight="42.24333333333333" barWidth="14.785714285714286"></path><rect id="SvgjsRect2302" width="14.785714285714286" height="95" x="81.32142857142858" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2304" d="M 81.32142857142858 95L 81.32142857142858 20.891666666666666Q 81.32142857142858 17.891666666666666 84.32142857142858 17.891666666666666L 93.10714285714288 17.891666666666666Q 96.10714285714288 17.891666666666666 96.10714285714288 20.891666666666666L 96.10714285714288 20.891666666666666L 96.10714285714288 95L 96.10714285714288 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 81.32142857142858 95L 81.32142857142858 20.891666666666666Q 81.32142857142858 17.891666666666666 84.32142857142858 17.891666666666666L 93.10714285714288 17.891666666666666Q 96.10714285714288 17.891666666666666 96.10714285714288 20.891666666666666L 96.10714285714288 20.891666666666666L 96.10714285714288 95L 96.10714285714288 95z" pathFrom="M 81.32142857142858 95L 81.32142857142858 95L 96.10714285714288 95L 96.10714285714288 95L 96.10714285714288 95L 96.10714285714288 95L 96.10714285714288 95L 81.32142857142858 95" cy="17.891666666666666" cx="140.46428571428572" j="1" val="2435" barHeight="77.10833333333333" barWidth="14.785714285714286"></path><rect id="SvgjsRect2305" width="14.785714285714286" height="95" x="140.46428571428572" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2307" d="M 140.46428571428572 95L 140.46428571428572 42.48833333333333Q 140.46428571428572 39.48833333333333 143.46428571428572 39.48833333333333L 152.25 39.48833333333333Q 155.25 39.48833333333333 155.25 42.48833333333333L 155.25 42.48833333333333L 155.25 95L 155.25 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 140.46428571428572 95L 140.46428571428572 42.48833333333333Q 140.46428571428572 39.48833333333333 143.46428571428572 39.48833333333333L 152.25 39.48833333333333Q 155.25 39.48833333333333 155.25 42.48833333333333L 155.25 42.48833333333333L 155.25 95L 155.25 95z" pathFrom="M 140.46428571428572 95L 140.46428571428572 95L 155.25 95L 155.25 95L 155.25 95L 155.25 95L 155.25 95L 140.46428571428572 95" cy="39.48833333333333" cx="199.60714285714286" j="2" val="1753" barHeight="55.51166666666667" barWidth="14.785714285714286"></path><rect id="SvgjsRect2308" width="14.785714285714286" height="95" x="199.60714285714286" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2310" d="M 199.60714285714286 95L 199.60714285714286 55.946666666666665Q 199.60714285714286 52.946666666666665 202.60714285714286 52.946666666666665L 211.39285714285714 52.946666666666665Q 214.39285714285714 52.946666666666665 214.39285714285714 55.946666666666665L 214.39285714285714 55.946666666666665L 214.39285714285714 95L 214.39285714285714 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 199.60714285714286 95L 199.60714285714286 55.946666666666665Q 199.60714285714286 52.946666666666665 202.60714285714286 52.946666666666665L 211.39285714285714 52.946666666666665Q 214.39285714285714 52.946666666666665 214.39285714285714 55.946666666666665L 214.39285714285714 55.946666666666665L 214.39285714285714 95L 214.39285714285714 95z" pathFrom="M 199.60714285714286 95L 199.60714285714286 95L 214.39285714285714 95L 214.39285714285714 95L 214.39285714285714 95L 214.39285714285714 95L 214.39285714285714 95L 199.60714285714286 95" cy="52.946666666666665" cx="258.75" j="3" val="1328" barHeight="42.053333333333335" barWidth="14.785714285714286"></path><rect id="SvgjsRect2311" width="14.785714285714286" height="95" x="258.75" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2313" d="M 258.75 95L 258.75 61.425Q 258.75 58.425 261.75 58.425L 270.5357142857143 58.425Q 273.5357142857143 58.425 273.5357142857143 61.425L 273.5357142857143 61.425L 273.5357142857143 95L 273.5357142857143 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 258.75 95L 258.75 61.425Q 258.75 58.425 261.75 58.425L 270.5357142857143 58.425Q 273.5357142857143 58.425 273.5357142857143 61.425L 273.5357142857143 61.425L 273.5357142857143 95L 273.5357142857143 95z" pathFrom="M 258.75 95L 258.75 95L 273.5357142857143 95L 273.5357142857143 95L 273.5357142857143 95L 273.5357142857143 95L 273.5357142857143 95L 258.75 95" cy="58.425" cx="317.89285714285717" j="4" val="1155" barHeight="36.575" barWidth="14.785714285714286"></path><rect id="SvgjsRect2314" width="14.785714285714286" height="95" x="317.89285714285717" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2316" d="M 317.89285714285717 95L 317.89285714285717 46.32Q 317.89285714285717 43.32 320.89285714285717 43.32L 329.67857142857144 43.32Q 332.67857142857144 43.32 332.67857142857144 46.32L 332.67857142857144 46.32L 332.67857142857144 95L 332.67857142857144 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 317.89285714285717 95L 317.89285714285717 46.32Q 317.89285714285717 43.32 320.89285714285717 43.32L 329.67857142857144 43.32Q 332.67857142857144 43.32 332.67857142857144 46.32L 332.67857142857144 46.32L 332.67857142857144 95L 332.67857142857144 95z" pathFrom="M 317.89285714285717 95L 317.89285714285717 95L 332.67857142857144 95L 332.67857142857144 95L 332.67857142857144 95L 332.67857142857144 95L 332.67857142857144 95L 317.89285714285717 95" cy="43.32" cx="377.03571428571433" j="5" val="1632" barHeight="51.68" barWidth="14.785714285714286"></path><rect id="SvgjsRect2317" width="14.785714285714286" height="95" x="377.03571428571433" y="0" rx="3" ry="3" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#E5E7EB" className="apexcharts-backgroundBar"></rect><path id="SvgjsPath2319" d="M 377.03571428571433 95L 377.03571428571433 55.69333333333333Q 377.03571428571433 52.69333333333333 380.03571428571433 52.69333333333333L 388.8214285714286 52.69333333333333Q 391.8214285714286 52.69333333333333 391.8214285714286 55.69333333333333L 391.8214285714286 55.69333333333333L 391.8214285714286 95L 391.8214285714286 95z" fill="rgba(26,86,219,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" className="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask8938dncz)" pathTo="M 377.03571428571433 95L 377.03571428571433 55.69333333333333Q 377.03571428571433 52.69333333333333 380.03571428571433 52.69333333333333L 388.8214285714286 52.69333333333333Q 391.8214285714286 52.69333333333333 391.8214285714286 55.69333333333333L 391.8214285714286 55.69333333333333L 391.8214285714286 95L 391.8214285714286 95z" pathFrom="M 377.03571428571433 95L 377.03571428571433 95L 391.8214285714286 95L 391.8214285714286 95L 391.8214285714286 95L 391.8214285714286 95L 391.8214285714286 95L 377.03571428571433 95" cy="52.69333333333333" cx="436.1785714285715" j="6" val="1336" barHeight="42.30666666666667" barWidth="14.785714285714286"></path><g id="SvgjsG2298" className="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG2300" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2303" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2306" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2309" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2312" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2315" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG2318" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG2297" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2341" x1="0" y1="0" x2="414" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine2342" x1="0" y1="0" x2="414" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2343" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG2344" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG2345" className="apexcharts-point-annotations"></g></g><g id="SvgjsG2329" className="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2286" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 70px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219);"></span><div className="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label"></span><span className="apexcharts-tooltip-text-y-value"></span></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                    <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience by age</h3>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">50+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 18%"></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">40+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 15%"></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">30+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 60%"></div>
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-16 text-sm font-medium dark:text-white">20+</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 30%"></div>
                        </div>
                    </div>
                    </div>
                    <div id="traffic-channels-chart" className="w-full"></div>
                </div>
                </div>

                <div className="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
                <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Smart chat</h3>
                    <a href="#" className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                        View all
                    </a>
                    </div>
                    {/* <!-- Chat --> */}
                    <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit">
                    <article className="mb-5">
                        <footer className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                                    <img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough"/>
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                            </div>
                            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownComment1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1135px, 1257px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="mb-2 text-gray-900 dark:text-white">
                        Hello <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@designteam</a> Let's schedule a kick-off meeting and workshop this week. It would be great to gather everyone involved in the design project. Let me know about your availability in the thread.
                        </p>
                        <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
                        <a href="#" className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                        4 replies
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                        </a>
                    </article>
                    <article className="mb-5">
                        <footer className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                                    <img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar"/>Bonnie Green</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                            </div>
                            <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownComment2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1135px, 1437px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="mb-3 text-gray-900 dark:text-white">Hello everyone,</p>
                        <p className="mb-2 text-gray-900 dark:text-white">
                        Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
                        </p>
                        <p className="mb-3 text-gray-900 dark:text-white">Cheers!</p>
                        <div className="flex items-center mb-2 space-x-2">
                        <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C"></path>
                                <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D"></path>
                            </svg>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">14</span>
                        </button>
                        <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.24467 6.07733C3.87207 5.63882 4.81784 5.72291 5.38116 6.18812L4.73508 5.24903C4.21514 4.5075 4.40135 3.70523 5.14355 3.18462C5.88575 2.66601 7.98887 4.06031 7.98887 4.06031C7.46426 3.31143 7.56238 2.36233 8.31125 1.83705C9.06012 1.31377 10.0933 1.49465 10.6179 2.24486L17.5727 12.0697L16.6864 20.663L9.28906 17.9652L2.83686 8.3987C2.30758 7.64516 2.49046 6.60594 3.24467 6.07733Z" fill="#EF9645"></path>
                            <path d="M1.79857 11.5433C1.79857 11.5433 1.04302 10.442 2.14497 9.68715C3.24559 8.93226 4.00047 10.0329 4.00047 10.0329L7.50523 15.1442C7.62603 14.9426 7.75819 14.7437 7.90569 14.5475L3.04135 7.45454C3.04135 7.45454 2.28647 6.35392 3.38775 5.59904C4.48837 4.84416 5.24325 5.94478 5.24325 5.94478L9.81859 12.6172C9.98879 12.4784 10.163 12.3389 10.3425 12.2021L5.03835 4.46572C5.03835 4.46572 4.28347 3.3651 5.38475 2.61022C6.48537 1.85534 7.24025 2.95596 7.24025 2.95596L12.5444 10.691C12.7393 10.5715 12.9322 10.4681 13.1258 10.3586L8.168 3.12883C8.168 3.12883 7.41312 2.02821 8.51373 1.27333C9.61435 0.518448 10.3692 1.61907 10.3692 1.61907L15.6113 9.26398L16.4083 10.4267C13.1058 12.692 12.7914 16.9536 14.6783 19.7055C15.0554 20.2561 15.606 19.879 15.606 19.879C13.3414 16.5758 14.0328 12.8642 17.336 10.5995L16.3622 5.72586C16.3622 5.72586 15.9985 4.44169 17.282 4.07727C18.5661 3.71351 18.9306 4.99767 18.9306 4.99767L20.0552 8.33757C20.5011 9.66178 20.9756 10.9813 21.6037 12.2294C23.3771 15.7536 22.3178 20.1333 18.9739 22.4273C15.3263 24.9283 10.3399 23.9985 7.83828 20.3516L1.79857 11.5433Z" fill="#FFDC5D"></path>
                            <path d="M8.00913 21.3583C5.33934 21.3583 2.64153 18.6605 2.64153 15.9907C2.64153 15.6216 2.37122 15.3232 2.00212 15.3232C1.63302 15.3232 1.30664 15.6216 1.30664 15.9907C1.30664 19.9954 4.00445 22.6932 8.00913 22.6932C8.37822 22.6932 8.67657 22.3668 8.67657 21.9977C8.67657 21.6286 8.37822 21.3583 8.00913 21.3583Z" fill="#5DADEC"></path>
                            <path d="M4.67212 22.6649C2.66978 22.6649 1.33489 21.33 1.33489 19.3277C1.33489 18.9586 1.03654 18.6602 0.667445 18.6602C0.298348 18.6602 0 18.9586 0 19.3277C0 21.9974 2.00234 23.9998 4.67212 23.9998C5.04121 23.9998 5.33956 23.7014 5.33956 23.3323C5.33956 22.9632 5.04121 22.6649 4.67212 22.6649ZM16.0187 1.30664C15.6503 1.30664 15.3512 1.60566 15.3512 1.97409C15.3512 2.34252 15.6503 2.64153 16.0187 2.64153C18.6885 2.64153 21.3583 5.03699 21.3583 7.98109C21.3583 8.34952 21.6573 8.64854 22.0257 8.64854C22.3941 8.64854 22.6931 8.34952 22.6931 7.98109C22.6931 4.3008 20.0234 1.30664 16.0187 1.30664Z" fill="#5DADEC"></path>
                            <path d="M19.3559 0C18.9875 0 18.6885 0.270983 18.6885 0.639413C18.6885 1.00784 18.9875 1.33489 19.3559 1.33489C21.3583 1.33489 22.6651 2.81996 22.6651 4.64408C22.6651 5.01251 22.9915 5.31153 23.3606 5.31153C23.7297 5.31153 24 5.01251 24 4.64408C24 2.0831 22.0257 0 19.3559 0Z" fill="#5DADEC"></path>
                        </svg>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8</span>
                        </button>
                        <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                            <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75255 5.29787C7.67789 5.37254 7.62122 5.46254 7.57388 5.56121L7.56855 5.55587L0.0910439 22.4003L0.0983774 22.4076C-0.0402924 22.6763 0.191713 23.223 0.667057 23.699C1.1424 24.1743 1.68908 24.4063 1.95775 24.2676L1.96442 24.2743L18.8088 16.7961L18.8035 16.7901C18.9015 16.7435 18.9915 16.6868 19.0668 16.6108C20.1082 15.5694 18.4195 12.1927 15.2961 9.06862C12.1713 5.94455 8.79458 4.25651 7.75255 5.29787Z" fill="#DD2E44"></path>
                            <path d="M8.66858 8.30273L0.279048 21.9737L0.0910439 22.3971L0.0983774 22.4044C-0.0402924 22.6731 0.191713 23.2197 0.667057 23.6958C0.821728 23.8504 0.982398 23.9678 1.13973 24.0671L11.3353 11.6361L8.66858 8.30273Z" fill="#EA596E"></path>
                            <path d="M15.3439 9.01304C18.4573 12.1278 20.186 15.4479 19.2033 16.4292C18.2213 17.4119 14.9012 15.6839 11.7858 12.5705C8.67174 9.45572 6.9437 6.13431 7.92573 5.15228C8.90841 4.17026 12.2285 5.8983 15.3439 9.01304Z" fill="#A0041E"></path>
                            <path d="M12.3913 9.37694C12.2587 9.48427 12.0853 9.54028 11.902 9.52028C11.3233 9.45761 10.8366 9.25627 10.496 8.93826C10.1353 8.60159 9.95727 8.14958 10.0059 7.6969C10.0913 6.90221 10.8886 6.17286 12.248 6.31953C12.7767 6.3762 13.0127 6.2062 13.0207 6.12486C13.03 6.04419 12.836 5.82752 12.3073 5.77019C11.7286 5.70752 11.242 5.50618 10.9006 5.18817C10.54 4.8515 10.3613 4.39949 10.4106 3.94681C10.4973 3.15213 11.294 2.42278 12.652 2.57011C13.0373 2.61145 13.2407 2.53211 13.3267 2.48078C13.3954 2.43878 13.4227 2.39878 13.4254 2.37544C13.4334 2.29477 13.242 2.0781 12.712 2.02077C12.346 1.98077 12.0807 1.65276 12.1213 1.28608C12.1607 0.920076 12.488 0.655404 12.8553 0.695405C14.2134 0.841408 14.8374 1.72343 14.7514 2.51878C14.6647 3.3148 13.868 4.04281 12.5087 3.89681C12.1233 3.85481 11.922 3.93481 11.8353 3.98615C11.7666 4.02748 11.7386 4.06815 11.736 4.09082C11.7273 4.17215 11.92 4.38816 12.45 4.44549C13.808 4.59216 14.432 5.47351 14.346 6.26887C14.26 7.06355 13.4634 7.7929 12.1047 7.64557C11.7193 7.60423 11.5166 7.68423 11.43 7.7349C11.3606 7.77757 11.334 7.81757 11.3313 7.84024C11.3226 7.9209 11.5153 8.13758 12.0447 8.19491C12.41 8.23491 12.676 8.56359 12.6353 8.92959C12.6167 9.11226 12.524 9.27027 12.3913 9.37694Z" fill="#AA8DD8"></path>
                            <path d="M20.4411 15.5411C21.7565 15.1698 22.6638 15.7565 22.8798 16.5265C23.0958 17.2958 22.6278 18.2699 21.3131 18.6399C20.7998 18.7839 20.6458 19.0292 20.6665 19.1072C20.6891 19.1859 20.9498 19.3152 21.4618 19.1706C22.7765 18.8005 23.6839 19.3872 23.8999 20.1566C24.1172 20.9266 23.6479 21.8993 22.3325 22.27C21.8198 22.414 21.6651 22.66 21.6878 22.738C21.7098 22.816 21.9698 22.9453 22.4825 22.8013C22.8358 22.702 23.2052 22.908 23.3045 23.262C23.4032 23.6167 23.1972 23.9847 22.8425 24.0847C21.5285 24.4547 20.6205 23.8693 20.4031 23.0986C20.1871 22.3293 20.6558 21.3566 21.9718 20.9859C22.4852 20.8413 22.6392 20.5966 22.6165 20.5179C22.5952 20.4399 22.3352 20.3099 21.8232 20.4539C20.5071 20.8246 19.6004 20.2392 19.3838 19.4679C19.1671 18.6985 19.6358 17.7259 20.9511 17.3545C21.4631 17.2112 21.6171 16.9645 21.5958 16.8872C21.5731 16.8085 21.3138 16.6792 20.8011 16.8232C20.4465 16.9232 20.0791 16.7165 19.9791 16.3625C19.8798 16.0092 20.0864 15.6411 20.4411 15.5411Z" fill="#77B255"></path>
                            <path d="M15.3333 13.7449C15.1373 13.7449 14.9439 13.6589 14.8119 13.4949C14.5819 13.2069 14.6292 12.7875 14.9159 12.5575C15.0612 12.4409 18.528 9.71812 23.4274 10.4188C23.7921 10.4708 24.0455 10.8081 23.9935 11.1728C23.9415 11.5368 23.6068 11.7928 23.2388 11.7382C18.91 11.1235 15.7806 13.5742 15.7499 13.5989C15.6259 13.6975 15.4793 13.7449 15.3333 13.7449Z" fill="#AA8DD8"></path>
                            <path d="M3.83539 10.9697C3.77205 10.9697 3.70739 10.9604 3.64338 10.9417C3.29071 10.8357 3.0907 10.4643 3.19671 10.1117C3.95206 7.59628 4.63674 3.58219 3.79539 2.5355C3.70138 2.41683 3.55938 2.30016 3.23404 2.32483C2.60869 2.37283 2.66803 3.69219 2.66869 3.70552C2.69669 4.07287 2.42069 4.39287 2.05401 4.42021C1.68134 4.44287 1.36666 4.1722 1.33933 3.80486C1.27066 2.8855 1.55667 1.1148 3.13404 0.995461C3.83805 0.942127 4.42273 1.1868 4.83541 1.70014C6.41611 3.66752 4.81141 9.37099 4.47407 10.495C4.3874 10.7837 4.12206 10.9697 3.83539 10.9697Z" fill="#77B255"></path>
                            <path d="M16.999 7.63774C17.5513 7.63774 17.9991 7.19002 17.9991 6.63772C17.9991 6.08542 17.5513 5.6377 16.999 5.6377C16.4467 5.6377 15.999 6.08542 15.999 6.63772C15.999 7.19002 16.4467 7.63774 16.999 7.63774Z" fill="#5C913B"></path>
                            <path d="M1.33336 13.6355C2.06976 13.6355 2.66673 13.0385 2.66673 12.3021C2.66673 11.5657 2.06976 10.9688 1.33336 10.9688C0.596967 10.9688 0 11.5657 0 12.3021C0 13.0385 0.596967 13.6355 1.33336 13.6355Z" fill="#9266CC"></path>
                            <path d="M21.666 14.3047C22.2183 14.3047 22.6661 13.857 22.6661 13.3047C22.6661 12.7524 22.2183 12.3047 21.666 12.3047C21.1137 12.3047 20.666 12.7524 20.666 13.3047C20.666 13.857 21.1137 14.3047 21.666 14.3047Z" fill="#5C913B"></path>
                            <path d="M15.666 22.3038C16.2183 22.3038 16.6661 21.856 16.6661 21.3037C16.6661 20.7514 16.2183 20.3037 15.666 20.3037C15.1137 20.3037 14.666 20.7514 14.666 21.3037C14.666 21.856 15.1137 22.3038 15.666 22.3038Z" fill="#5C913B"></path>
                            <path d="M18.6683 4.30052C19.4047 4.30052 20.0017 3.70355 20.0017 2.96715C20.0017 2.23076 19.4047 1.63379 18.6683 1.63379C17.9319 1.63379 17.335 2.23076 17.335 2.96715C17.335 3.70355 17.9319 4.30052 18.6683 4.30052Z" fill="#FFCC4D"></path>
                            <path d="M21.6699 6.9688C22.2222 6.9688 22.67 6.52107 22.67 5.96877C22.67 5.41648 22.2222 4.96875 21.6699 4.96875C21.1176 4.96875 20.6699 5.41648 20.6699 5.96877C20.6699 6.52107 21.1176 6.9688 21.6699 6.9688Z" fill="#FFCC4D"></path>
                            <path d="M19.668 9.63384C20.2203 9.63384 20.668 9.18611 20.668 8.63381C20.668 8.08151 20.2203 7.63379 19.668 7.63379C19.1157 7.63379 18.668 8.08151 18.668 8.63381C18.668 9.18611 19.1157 9.63384 19.668 9.63384Z" fill="#FFCC4D"></path>
                            <path d="M5.00198 16.9668C5.55427 16.9668 6.002 16.5191 6.002 15.9668C6.002 15.4145 5.55427 14.9668 5.00198 14.9668C4.44968 14.9668 4.00195 15.4145 4.00195 15.9668C4.00195 16.5191 4.44968 16.9668 5.00198 16.9668Z" fill="#FFCC4D"></path>
                            </svg>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">3</span>
                        </button>
                    </div>
                    </article>
                    <article className="mb-5">
                        <footer className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese avatar"/>Jese Leos</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                            </div>
                            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownComment3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1135px, 1685px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="mb-2 text-gray-900 dark:text-white">
                        Ok <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@team</a> I'am attaching our offer and pitch deck. Take your time to review everything. I'am looking forward to the next steps! Thank you.
                        </p>
                        <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
                        <div className="items-center 2xl:space-x-4 2xl:flex">

                        {/* <!-- Item --> */}
                        <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"></path>
                                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path>
                            </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">flowbite_offer_345"</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">PDF, 2.3 MB</p>
                            </div>
                            <div className="flex items-center ml-auto">
                            <button type="button" className="p-2 rounded hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"></path>
                                </svg>
                                <span className="sr-only">Download</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                </svg>
                                <span className="sr-only">Actions</span>
                            </button>
                            </div>
                        </div>
                        {/* <!-- Item --> */}
                        <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-lg dark:bg-teal-900">
                            <svg className="w-5 h-5 text-teal-600 lg:w-6 lg:h-6 dark:text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                            </svg>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">bergside_pitch"</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">PPTX, 10.1 MB</p>
                            </div>
                            <div className="flex items-center ml-auto">
                            <button type="button" className="p-2 rounded hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"></path>
                                </svg>
                                <span className="sr-only">Download</span>
                            </button>
                            <button type="button" className="p-2 rounded hover:bg-gray-100">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                </svg>
                                <span className="sr-only">Actions</span>
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="pl-12 mb-5">
                        <footer className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                                    <img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Joseph avatar"/>Joseph McFallen</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                            </div>
                            <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownComment4" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1135px, 1987px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="mb-2 text-gray-900 dark:text-white">
                        Hello <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@jeseleos</a> I need some informations about flowbite react version.
                        </p>
                    </article>
                    <article className="pl-12 mb-5">
                        <footer className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese avatar"/>Jese Leos</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                            </div>
                            <button id="dropdownComment5Button" data-dropdown-toggle="dropdownComment5" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                <span className="sr-only">Comment settings</span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownComment5" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1135px, 2075px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                        <p className="mb-4 text-gray-900 dark:text-white">
                        Hi <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@josephh</a> Sure, just let me know whean you are available and we can speak.
                        </p>
                        
                        <label for="chat" className="sr-only">Your message</label>
                        <div className="flex items-center mb-5">
                            <textarea id="chat" rows="1" className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Reply in thread..."></textarea>
                            <button type="submit" className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                <span className="sr-only">Send message</span>
                            </button>
                        </div>
                        
                        <span className="inline-flex items-center text-xs font-medium cursor-pointer hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                        Hide thread
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"></path>
                        </svg>
                        </span>
                    </article></form>
                    <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" className="sr-only">Write your message</label>
                            <textarea id="comment" rows="8" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your message" required=""></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Send message
                            </button>
                            <div className="flex pl-0 space-x-1 sm:pl-2">
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Attach file</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Set location</span>
                                </button>
                                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Upload image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
                {/* <!-- 2 columns --> */}
                <div className="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
                    {/* <!-- Activity Card --> */}
                    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0">
                        <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Activity</h3>
                        <a href="#" className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                            View all
                        </a>
                        </div>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2023</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI design in Figma</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI code in Flowbite</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            <a href="https://flowbite.com/blocks/" className="inline-flex items-center text-xs font-medium hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                                Go to Flowbite Blocks
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-800 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                        </ol>
                    </div>
                    {/* <!--Carousel widget --> */}
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <div id="carousel" className="relative" data-carousel="">
                        <div className="relative mx-auto overflow-hidden h-[36rem] lg:h-[24rem]">
                            <div className="duration-700 ease-in-out bg-white dark:bg-gray-800 absolute inset-0 transition-transform transform translate-x-0 z-20" data-carousel-item=""> 
                                <div className="flex items-center mb-4 text-lg font-medium text-primary-600">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"></path>
                                </svg>
                                Insights
                                </div>
                                <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">You are going to grow by 44% next year</h3>
                                <p className="mb-4 text-gray-500 dark:text-gray-400">Get started with a free and open-source admin dashboard layout built with Tailwind CSS and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more</p>
                                <p className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Key Takeaways:</p>
                                <ul className="pl-4 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                <li>What are the new challenges in the delivery industry due to new consumer expectations.</li>
                                <li>How the online delivery business model is diversifying to meet new demands.</li>
                                <li>Which new technology requirements must be met to ensure true retail experiences.</li>
                                <li>How a headless commerce architecture solves challenges in the industry.</li>
                                </ul>
                                <a href="#" className="inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                                Get me there
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                </svg>
                                </a>
                            </div>
                            <div className="duration-700 ease-in-out bg-white dark:bg-gray-800 absolute inset-0 transition-transform transform translate-x-full z-10" data-carousel-item=""> 
                                <div className="flex items-center mb-4 text-lg font-medium text-teal-500">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"></path>
                                    <path clipRule="evenodd" fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                Tips to grow
                                </div>
                                <p className="mb-4 text-gray-500 dark:text-gray-400">Marketing, sales &amp; business growth for small business. Improve your marketing &amp; promotion results - and grow your sales!</p>
                                <p className="mb-4 text-lg font-medium text-gray-900 dark:text-white">What you'll learn:</p>
                                <ul role="list" className="pl-2 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Dynamic reports and dashboards</span>
                                </li>
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Learn from competitors about what to do, and not to do</span>
                                </li>
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Take their business to the next level</span>
                                </li>
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Limitless business automation</span>
                                </li>
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Build relationships with other businesses to co-promote</span>
                                </li>
                                <li className="flex space-x-2">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                                    </svg>
                                    <span className="leading-tight">Make their customers feel loved and apprecaited</span>
                                </li>
                                </ul>
                                <a href="#" className="inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                                Let's start
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                </svg>
                                </a>
                            </div>
                            <div className="duration-700 ease-in-out bg-white dark:bg-gray-800 absolute inset-0 transition-transform transform -translate-x-full z-10" data-carousel-item=""> 
                                <div className="flex items-center mb-4 text-lg font-medium text-purple-600">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"></path>
                                </svg>
                                Features
                                </div>
                                <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Go next level with Flowbite</h3>
                                <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                                {/* <!-- List --> */}
                                <ul role="list" className="pl-2 my-5 mb-4 space-y-3 text-gray-500 list-disc dark:text-gray-400">
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="leading-tight">Dynamic reports and dashboards</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="leading-tight">Templates for everyone</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="leading-tight">Development workflow</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        {/* <!-- Icon --> */}
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="leading-tight">Limitless business automation</span>
                                    </li>
                                </ul>
                                <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                View more
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"></path>
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="button" className="flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                                <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                    <span className="hidden">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-next="">
                                <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="hidden">Next</span>
                                </span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* END 2 Columns */}

                {/* START TRANSACTIONS */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    {/* <!-- Card header --> */}
                    <div className="items-center justify-between lg:flex">
                        <div className="mb-4 lg:mb-0">
                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transactions</h3>
                        <span className="text-base font-normal text-gray-500 dark:text-gray-400">This is a list of latest transactions</span>
                        </div>
                        <div className="items-center sm:flex">
                        <div className="flex items-center">
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            Filter by status
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdown" className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(638.5px, 4852px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                Category
                            </h6>
                            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                <li className="flex items-center">
                                <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                        
                                <label for="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Completed (56)
                                </label>
                                </li>
                        
                                <li className="flex items-center">
                                <input id="fitbit" type="checkbox" value="" checked="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                        
                                <label for="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Cancelled (56)
                                </label>
                                </li>
                        
                                <li className="flex items-center">
                                <input id="dell" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                        
                                <label for="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    In progress (56)
                                </label>
                                </li>
                        
                                <li className="flex items-center">
                                <input id="asus" type="checkbox" value="" checked="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                        
                                <label for="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    In review (97)
                                </label>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div date-rangepicker="" className="flex items-center space-x-4">
                            <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                                <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                                </svg>
                            </div>
                            <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="From"></input>
                            </div>
                            <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                                <path clipRule="evenodd" fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"></path>
                                </svg>
                            </div>
                            <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input" placeholder="To"></input>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Table --> */}
                    <div className="flex flex-col mt-6">
                        <div className="overflow-x-auto rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Transaction
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Date &amp; Time
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Amount
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Reference number
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Payment method
                                                </th>
                                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                                Status
                                                </th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody className="bg-white dark:bg-gray-800">
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                Payment from <span className="font-semibold">Bonnie Green</span>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                $2300
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                0047568936
                                                </td>
                                                <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <svg className="w-7 h-7" aria-hidden="true" enable-background="new 0 0 780 500" viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg"><path d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5" fill="#d9222a"></path><path d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5" fill="#ee9f2d"></path><path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path><path d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z" fill="#fff"></path><path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path><path d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z" fill="#fff"></path></svg>
                                                <span>••• 475</span>
                                                </td>
                                                <td className="p-4 whitespace-nowrap">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50 dark:bg-gray-700">
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                Payment refund to <span className="font-semibold">#00910</span>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                -$670
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                0078568936
                                                </td>
                                                <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>
                                                <span>••• 924</span>
                                                </td>
                                                <td className="p-4 whitespace-nowrap">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                Payment failed from <span className="font-semibold">#087651</span>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Apr 18 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                $234
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                0088568934
                                                </td>
                                                <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>
                                                <span>••• 826</span>
                                                </td>
                                                <td className="p-4 whitespace-nowrap">
                                                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Cancelled</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                {/* <!-- Card Footer --> */}
                <div className="flex items-center justify-between pt-3 sm:pt-6"><div>
                    <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    
                    {/* <!-- Dropdown menu --> */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="transactions-dropdown" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(355px, 5600px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                            Sep 16, 2021 - Sep 22, 2021
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                            </li>
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                            </li>
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                            </li>
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                            </li>
                            <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                            </li>
                        </ul>
                        <div className="py-1" role="none">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                        </div>
                    </div>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">Transactions Report
                            <svg className="w-4 h-4 ml-1 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </main>


        {/* FOOTER */}
        <footer className="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">
        <ul className="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
            <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms and conditions</a></li>
            <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a></li>
            <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a></li>
            <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li>
        </ul>
        <div className="flex space-x-6 sm:justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                </svg>
            </a>
        </div>
    </footer>
    <p className="my-10 text-sm text-center text-gray-500">
        © 2019-2023 <a href="https://flowbite.com/" className="hover:underline" target="_blank">Flowbite.com</a>. All rights reserved.
    </p>

    </div>
</div>
<div className="datepicker hidden datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 datepicker-orient-top datepicker-orient-left" style="top: 3411.5px; left: 732.5px;">
<div className="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4">
<div className="datepicker-header"><div className="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold" style="display: none;"></div><div className="datepicker-controls flex justify-between mb-2"><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg></button><button type="button" className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch">January 2024</button><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div></div><div className="datepicker-main p-1"><div className="datepicker-view flex"><div className="days"><div className="days-of-week grid grid-cols-7 mb-1"><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Su</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Mo</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Tu</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">We</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Th</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Fr</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Sa</span></div><div className="datepicker-grid w-64 grid grid-cols-7"><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500" data-date="1703998800000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704085200000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704171600000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704258000000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704344400000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704430800000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704517200000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704603600000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704690000000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day focused" data-date="1704776400000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704862800000">10</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704949200000">11</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705035600000">12</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705122000000">13</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705208400000">14</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705294800000">15</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705381200000">16</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705467600000">17</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705554000000">18</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705640400000">19</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705726800000">20</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705813200000">21</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705899600000">22</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705986000000">23</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706072400000">24</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706158800000">25</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706245200000">26</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706331600000">27</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706418000000">28</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706504400000">29</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706590800000">30</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706677200000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706763600000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706850000000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706936400000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707022800000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707109200000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707195600000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707282000000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707368400000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707454800000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707541200000">10</span></div></div></div></div><div className="datepicker-footer"><div className="datepicker-controls flex space-x-2 mt-2"><button type="button" className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Today</button><button type="button" className="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Clear</button></div></div></div></div><div className="datepicker hidden datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 datepicker-orient-top datepicker-orient-left" style="top: 3411.5px; left: 958.25px;"><div className="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4"><div className="datepicker-header"><div className="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold" style="display: none;"></div><div className="datepicker-controls flex justify-between mb-2"><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg></button><button type="button" className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch">January 2024</button><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div></div><div className="datepicker-main p-1"><div className="datepicker-view flex"><div className="days"><div className="days-of-week grid grid-cols-7 mb-1"><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Su</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Mo</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Tu</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">We</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Th</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Fr</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Sa</span></div><div className="datepicker-grid w-64 grid grid-cols-7"><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500" data-date="1703998800000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704085200000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704171600000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704258000000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704344400000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704430800000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704517200000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704603600000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704690000000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day focused" data-date="1704776400000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704862800000">10</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704949200000">11</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705035600000">12</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705122000000">13</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705208400000">14</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705294800000">15</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705381200000">16</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705467600000">17</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705554000000">18</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705640400000">19</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705726800000">20</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705813200000">21</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705899600000">22</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705986000000">23</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706072400000">24</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706158800000">25</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706245200000">26</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706331600000">27</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706418000000">28</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706504400000">29</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706590800000">30</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706677200000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706763600000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706850000000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706936400000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707022800000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707109200000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707195600000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707282000000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707368400000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707454800000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707541200000">10</span></div></div></div></div><div className="datepicker-footer"><div className="datepicker-controls flex space-x-2 mt-2"><button type="button" className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Today</button><button type="button" className="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Clear</button></div></div></div></div><div className="datepicker hidden datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 datepicker-orient-top datepicker-orient-left" style="top: 5706.2px; left: 733px;"><div className="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4"><div className="datepicker-header"><div className="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold" style="display: none;"></div><div className="datepicker-controls flex justify-between mb-2"><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg></button><button type="button" className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch">January 2024</button><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div></div><div className="datepicker-main p-1"><div className="datepicker-view flex"><div className="days"><div className="days-of-week grid grid-cols-7 mb-1"><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Su</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Mo</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Tu</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">We</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Th</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Fr</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Sa</span></div><div className="datepicker-grid w-64 grid grid-cols-7"><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500" data-date="1703998800000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704085200000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704171600000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704258000000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704344400000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704430800000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704517200000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704603600000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704690000000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day focused" data-date="1704776400000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704862800000">10</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704949200000">11</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705035600000">12</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705122000000">13</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705208400000">14</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705294800000">15</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705381200000">16</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705467600000">17</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705554000000">18</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705640400000">19</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705726800000">20</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705813200000">21</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705899600000">22</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705986000000">23</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706072400000">24</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706158800000">25</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706245200000">26</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706331600000">27</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706418000000">28</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706504400000">29</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706590800000">30</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706677200000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706763600000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706850000000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706936400000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707022800000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707109200000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707195600000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707282000000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707368400000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707454800000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707541200000">10</span></div></div></div></div><div className="datepicker-footer"><div className="datepicker-controls flex space-x-2 mt-2"><button type="button" className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Today</button><button type="button" className="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Clear</button></div></div></div></div><div className="datepicker hidden datepicker-dropdown dropdown absolute top-0 left-0 z-50 pt-2 datepicker-orient-top datepicker-orient-left" style="top: 5706.2px; left: 958.5px;"><div className="datepicker-picker inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4"><div className="datepicker-header"><div className="datepicker-title bg-white dark:bg-gray-700 dark:text-white px-2 py-3 text-center font-semibold" style="display: none;"></div><div className="datepicker-controls flex justify-between mb-2"><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 prev-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg></button><button type="button" className="text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch">January 2024</button><button type="button" className="bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 next-btn"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div></div><div className="datepicker-main p-1"><div className="datepicker-view flex"><div className="days"><div className="days-of-week grid grid-cols-7 mb-1"><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Su</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Mo</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Tu</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">We</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Th</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Fr</span><span className="dow text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400">Sa</span></div><div className="datepicker-grid w-64 grid grid-cols-7"><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day prev text-gray-500" data-date="1703998800000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704085200000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704171600000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704258000000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704344400000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704430800000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704517200000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704603600000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704690000000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day focused" data-date="1704776400000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704862800000">10</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1704949200000">11</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705035600000">12</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705122000000">13</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705208400000">14</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705294800000">15</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705381200000">16</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705467600000">17</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705554000000">18</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705640400000">19</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705726800000">20</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705813200000">21</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705899600000">22</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1705986000000">23</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706072400000">24</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706158800000">25</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706245200000">26</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706331600000">27</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706418000000">28</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706504400000">29</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706590800000">30</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day" data-date="1706677200000">31</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706763600000">1</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706850000000">2</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1706936400000">3</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707022800000">4</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707109200000">5</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707195600000">6</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707282000000">7</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707368400000">8</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707454800000">9</span><span className="datepicker-cell hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day next text-gray-500" data-date="1707541200000">10</span></div></div></div></div><div className="datepicker-footer"><div className="datepicker-controls flex space-x-2 mt-2"><button type="button" className="button today-btn text-white bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Today</button><button type="button" className="button clear-btn text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center w-1/2" style="display: none;">Clear</button></div></div>
</div>
</div>

</>



