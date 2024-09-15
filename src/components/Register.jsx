import React from 'react'

function Register() {

    const registerBtn = ["Standout" , "Ideathon" , "Standout" ,"Ideathon"]
  return (
    <div className='w-full bg-zinc-900'>
        <div className="register text-white font-bold text-center text-[10vh]">Register</div>
        <div className="registerSection h-[80vh] w-[70%] flex flex-wrap items-center justify-center gap-2 mx-auto mt-[2vh]">
            <div className="btns h-full flex flex-col gap-10 pt-[10vh] items-center w-[45%] ">
                {registerBtn.map((btn,idx)=><div className="Standout bg-blue-200 p-[2vh] w-[70%] text-center rounded-xl cursor-pointer font-semibold text-[4vh]">{btn}</div>)}
            </div>
            <div className="btns h-full w-[45%] bg-red-200"></div>
        </div>
    </div>
  )
}

export default Register