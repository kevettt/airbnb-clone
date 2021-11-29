import { useRouter } from "next/dist/client/router"
import { useState } from "react"

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const submit = async (e) => {

        e.preventDefault()

        await fetch(`http://localhost:8000/api/login`,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            }),
        })

        await router.push('/')
    }

    return (
        <div className='
            flex
            flex-col
            items-center
            justify-center
            mt-48
        '>   
            <form 
            onSubmit={submit}
            className='
            bg-transparent
            flex
            flex-col
            items-center
            justify-center
            border-2
            md:shadow-sm
            rounded-lg
            p-2
            px-10
            py-5
        '>
            <h1 className='
                text-center
                text-2xl
                font-semibold
                m-5
                text-gray-400
            '>
                SingIn
            </h1>
            <div className='
                flex
                items-center
                border-2
                md:shadow-sm
                rounded-full
                p-2
            '>
                <input
                    onChange={e => setEmail(e.target.value)}
                    className='
                    flex-grow
                    bg-transparent
                    outline-none
                    text-gray-500
                    placeholder-gray-400
                    text-sm
                    '
                    type="email"
                    placeholder='Email'
                    required
                />
            </div>
            <div className='
                flex
                items-center
                border-2
                md:shadow-sm
                rounded-full
                p-2
                my-3
            '>
                <input
                    onChange={e => setPassword(e.target.value)}
                    className='
                    flex-grow
                    bg-transparent
                    outline-none
                    text-gray-500
                    placeholder-gray-400
                    text-sm
                    '
                    type="password"
                    placeholder='Password'
                    required
                />
            </div>
            
            <button
                className='
                text-white
                bg-blue-700
                items-center
                md:shadow-sm
                rounded-full
                p-2
                my-3
                px-10
                active:scale-95
                hover:bg-blue-600
                transition
                duration-200
                easy-out
                '
                type='submit'
            >
            Sign In    
            </button>
        </form>
        </div>
    )
}

export default login

