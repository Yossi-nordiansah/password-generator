import { useState } from "react";

export default function PasswordGenerator(props) {

    const [userName, setUserName] = useState('');
    const [generatePassword, setGeneratePassword] = useState('');

    let random = () => {
        return (Math.random() + 1).toString(32).substring(7);
    }

    const handleGeneratePassword = (event) => {
        event.preventDefault()

        if (userName.length === 0) {
            alert('Masukkan Username !');
            setGeneratePassword(``)
        }
        else {
            setGeneratePassword(`${userName}_${random()}`)
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="border-[7px] absolute z-10 border-blue-400 rounded-2xl py-8 backdrop-blur-[7px] px-10 shadow-[0px_0px_20px_#4dffff]">
                <div>
                    <h1 className="text-center font-bold text-xl text-white mb-5">React Password Generator</h1>
                    <form action="">
                        <small className="font-semibold text-white">Username</small>
                        <input onChange={(e) => setUserName(e.target.value)} id='username' className='rounded-md mobile-sm:w-60 block py-1 px-2 focus:ring-2 outline-none focus:ring-blue-500' type="text" />
                        <button onClick={handleGeneratePassword} type='button' className="bg-blue-500 block py-1 w-60 mt-6 font-semibold text-white rounded-md active:bg-blue-700">Generate</button>
                    </form>
                    <small className="text-center font-semibold block mt-5 text-white">We'd suggest you to use password</small>
                    <h1 className="text-white text-center text-xl mt-3">{generatePassword}</h1>
                </div>
            </div>
            <video src="video.mp4" autoPlay muted loop className="object-cover block w-full h-screen"></video>
        </div>
    )
}

