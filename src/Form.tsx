import { useState } from "react"

// TODO : 

// - Faire le call API avec useEffect pour envoyer les données du form en POST 
// - Faire une page de login 
// - Mettre en place un système de session

function Form() {
    const [inputValues, setInputValues] = useState({
        email : "",
        username: "",
        password: "",
        confirm: "", 
    })

    return ( 
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={inputValues.email}
                            onChange={(e) => setInputValues({ ... inputValues, email : e.target.value })}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                            id="username"
                            name="username"
                            type="username"
                            required
                            autoComplete="username"
                            value={inputValues.username}
                            onChange={(e) => setInputValues({ ... inputValues, username : e.target.value })}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>

                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={inputValues.password}
                            onChange={(e) => setInputValues({ ... inputValues, password : e.target.value })}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                            Confirm your password
                            </label>
                        </div>

                        <div className="mt-2">
                            <input
                            id="confirm-password"
                            name="confirm-assword"
                            type="password"
                            value={inputValues.confirm}
                            onChange={(e) => setInputValues({ ... inputValues, confirm : e.target.value })}
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                </div>
            </div>


        </> 
    );
}

export default Form 