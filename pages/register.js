
import { useRouter } from "next/dist/client/router"
import { useState } from "react"

const register = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const submit = async (e) => {

        e.preventDefault()
        
        await fetch(`http://localhost:8000/api/register`,{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
        })

        await router.push('/login')

    }

    return (
        <div>
            <div className='
            flex
            flex-col
            items-center
            justify-center
            mt-24
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
                Register
            </h1>
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
                    onChange={e => setFirstName(e.target.value)}
                    className='
                    flex-grow
                    bg-transparent
                    outline-none
                    text-gray-500
                    placeholder-gray-400
                    text-sm
                    '
                    type="text"
                    placeholder='First Name'
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
                    onChange={e => setLastName(e.target.value)}
                    className='
                    flex-grow
                    bg-transparent
                    outline-none
                    text-gray-500
                    placeholder-gray-400
                    text-sm
                    '
                    type="text"
                    placeholder='Last Name'
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
            Register    
            </button>
        </form>
        </div>
        </div>
    )
}

export default register
