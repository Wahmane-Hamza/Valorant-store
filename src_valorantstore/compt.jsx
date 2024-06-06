import React, { useState } from 'react'

export default function compt({check,errer}) {
    console.log(errer)
    return (
    <div>
        <form onSubmit={(e)=>check(e)} className='bg-white shadow-md rounded px-20 pt-5 pb-20'>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700'>email</label>
            <input type="email" name='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>

            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700'>password</label>
            <input type="password" name='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <br />
            <br />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
            <h1 className='text-white errer'>{errer}</h1>
        </form>
    </div>
    )
}
