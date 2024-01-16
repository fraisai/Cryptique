import React, { useState, useEffect } from 'react'

const ChatContainer = () => {
    const [posts, setPosts] = useState([]);
    const [showReplies, setShowReplies] = useState(false);
    /*
        posts = {
            postId: serial, 
            username: '',
            timestamp: 'MM/DD/YYYY 4:15 PM',
            message: '',
            threadId: ''

        }
    */
    // get messages saved in sql db

    const dropdownCommentMenu = () => {
        return (
            <div id="dropdownComment2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(1135px, 1437px, 0px)'}} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" >
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
        )
    }

    const showRepliesToComment = () => {
        return (
            <article className="mb-5 pl-5">
                <footer className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                            <img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar"/>Person B</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022">posts.timestamp</time></p>
                    </div>
                    <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                        <span className="sr-only">Comment settings</span>
                    </button>

                </footer>


                <p className="mb-2 text-gray-900 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque tristique accumsan. Aenean tincidunt in urna ut cursus. Nullam vitae sem sed mauris luctus pretium nec.

                </p>

                <div className="flex items-center mb-2 space-x-2">
                    <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C"></path>
                            <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D"></path>
                        </svg>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">posts.emoji_a_count</span>
                    </button>
                </div>
        </article>

        )
    }
    function handleClick() {

    }

    function handleShowReplies() {
        setShowReplies(!showReplies)
    }
  return (
    <div className="grid grid-cols-1 my-4 xl:grid-cols-1 xl:gap-4">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">threads.thread_name</h3>
            </div>

            {/* <!-- Chat --> */}
            {/* <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit"> */}
                <article className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                                <img className="w-6 h-6 mr-2 rounded-full" src="" alt=""/>
                                posts.username
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022">posts.timestamp</time></p>
                        </div>
                        
                        <button id="dropdownComment1Button" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" onClick={handleClick} type="button">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                </path>
                            </svg>
                            <span className="sr-only">Comment settings</span>
                        </button>

                    </div>

                    <p className="mb-2 text-gray-900 dark:text-white">
                        posts.message:
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit non velit eget faucibus. Fusce blandit porttitor urna, ac tristique nibh porttitor vitae. Nunc dapibus tortor justo, ut viverra mi sagittis faucibus. Integer lacinia erat sit amet diam faucibus tincidunt. Donec eget convallis leo. Sed pellentesque mi at tortor rhoncus convallis. Ut sed lacus turpis. Quisque at ligula sed dolor maximus mattis quis a velit.
                    </p>

                    <button onClick={handleShowReplies} className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                        replies_table[posts.postsId]: 4 replies
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>

                    {showReplies ? 
                        showRepliesToComment()
                        :
                        ''
                    }
                </article>


                <article className="mb-5">
                    <footer className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                                <img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar"/>Person B</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate="" datetime="2022-02-08" title="February 8th, 2022">posts.timestamp</time></p>
                        </div>
                        <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                </path>
                            </svg>
                            <span className="sr-only">Comment settings</span>
                        </button>

                    </footer>


                    <p className="mb-2 text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque tristique accumsan. Aenean tincidunt in urna ut cursus. Nullam vitae sem sed mauris luctus pretium nec.

                    </p>
                    <div className="flex items-center mb-2 space-x-2">
                    <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                        <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C"></path>
                            <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D"></path>
                        </svg>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">posts.emoji_a_count</span>
                    </button>
                </div>
                </article>



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


    </div>
)
}

export default ChatContainer;