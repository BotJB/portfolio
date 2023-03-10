import Head from 'next/head'
import {BsFillMoonStarsFill,BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'
import Image from 'next/image'
import jasjot from '../../public/jasjot.jpg'
import frontend from '../../public/front-end.jpg'
import api from '../../public/api.png'
import others from '../../public/others.jpg'
import project from '../../public/project.png'
import Link from 'next/link'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from 'utils/firebase'
import { useEffect, useState } from 'react'
import empporj from '../../public/empporj.png'
import proj2 from '../../public/proj2.png'


export default function Home() {
  const [darkMode,setDarkMode]=useState(false)
const [resume,setResume]=useState(null)

const handleClick=()=>{
  const aTag=document.createElement('a')
   aTag.href=resume;
   aTag.setAttribute('download','Resume.pdf')
   document.body.appendChild(aTag)
   aTag.click();
   aTag.remove();
}

  useEffect(()=>{
    const storage=getStorage();
   const Ref=ref(storage,'Resume.pdf')

   getDownloadURL(Ref).then((url)=>{
    setResume(url)
   })
  },[])
 console.log(resume)
  return (
    <div className={darkMode?'dark':''}>
      <Head>
        <title>Jasjot Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'  >
        <section>
       <nav className='flex p-5 justify-between mb-12 dark:text-white '>
        <h1 className=' font-serif text-xl items-center'>Developed by Jasjot</h1>
        <ul className='flex justify-between items-center'>
          <li className=' text-xl cursor-pointer'><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} /></li>
        
          <li className=' ml-4 bg-cyan-500 p-2 rounded-l cursor-pointer' onClick={handleClick}>Resume</li>
          
        </ul>
       </nav>
       <div className='flex justify-center text-center flex-col '>
        <h2 className='text-5xl p-2 text-cyan-500 font-medium dark:text-cyan-400 '>Jasjot Singh</h2>
        <h3 className='text-2xl p-2 md:text-3xl dark:text-white'>Full stack developer</h3>
        <p className=' text-xl  leading-10 p-5 md:text-xl max-w-xl mx-auto dark:text-gray-200'>	A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
       <div className='text-5xl flex justify-center  gap-16 p-3 text-gray-800 dark:text-gray-400'>
        <Link href="https://github.com/BotJB">
       <BsGithub className=' cursor-pointer' />
       </Link>
       <Link href="https://www.linkedin.com/in/jasjot-singh-4b7253260/">
       <BsLinkedin className=' cursor-pointer' />
       </Link>
       <BsTwitter className=' cursor-pointer'/>
       </div>
       </div>
       <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96  ">
              <Image src={jasjot} layout="fill" objectFit="cover" />
            </div>
       </section>
       <section>
        <h3 className='text-2xl p-2 text-center dark:text-white '>Services I can offer</h3>
        <p className='text-xl  leading-10 p-5  dark:text-gray-200'>During my graduation and Web development course and personal projects i have acquired a lot of different skills.
          I have experience working with core front end like Html, Css, Javascript and other technologies like React and Next js.
          Alongside this I can also work on the backend side using Node Js or Java. I have a deep understanding of Data structres advantage
          Algorithms.
           </p>
           <div className=' lg:flex gap-10 '>
            <div className='text-center   shadow-lg p-10 rounded-xl my-10 mx-10 flex-1  dark:bg-white'>
              <div className=' mx-auto mb-5 bg-gradient-to-b from-cyan-500 rounded-full w-10 h-10 relative overflow-hidden mt-10 md:h-15 md:w-15'>
            <Image className=' mx-auto'  src={frontend} alt="front-end-logo" />
            </div>
            <h3 className=' text-xl pb-4 '>Front End Tools</h3>
           <ul className=' text-gray-700 text-lg'>
            <li>HTML, CSS, Javascript</li>
            <li>React,Next JS</li>
            <li>State Management with Redux</li>
            <li>Tailwind, React Icons</li>
           </ul>
            </div>
            <div className='text-center   shadow-lg p-10 rounded-xl mx-10 my-10 flex-1  dark:bg-white'>
              <div className=' mx-auto mb-5 bg-gradient-to-b from-cyan-500 rounded-full w-10 h-10 relative overflow-hidden mt-10 md:h-15 md:w-15'>
            <Image className=' mx-auto'  src={api} alt="front-end-logo" />
            </div>
            <h3 className=' text-xl pb-4 '>Back End and Database Tools</h3>
           <ul className=' text-gray-700 text-lg'>
            <li>Node Js, Express JS</li>
            <li>Java</li>
            <li>Sql and NoSql Databases</li>
            <li>GraphQl</li>
           </ul>
            </div>
            <div className='text-center   shadow-lg p-10 rounded-xl my-10 mx-10 flex-1  dark:bg-white'>
              <div className=' mx-auto mb-5 bg-gradient-to-b from-cyan-500 rounded-full w-10 h-10 relative overflow-hidden mt-10 md:h-15 md:w-15'>
            <Image className=' mx-auto'  src={others} alt="front-end-logo" />
            </div> 
            <h3 className=' text-xl pb-4'>Other Tools</h3>
           <ul className=' text-gray-700 text-lg'>
            <li>Github</li>
            <li>Trello,Jira</li>
            <li>Unit testing with Selenium</li>
            <li>Agile and Waterfall development methods</li>
           </ul>
            </div>
           </div>

    </section>
    <section>
      <h1 className=' text-2xl text-center m-5 lg:text-5xl dark:text-white'>Projects</h1>
      <div className=' shadow-lg m-9 items-center'>
        <h3 className=' text-lg text-center lg:text-2xl dark:text-gray-200'>Employee Management System</h3>
        <p className='text-lg m-8 dark:text-gray-200'>This project is built using the MERN stack it uses React for the front end and Node Js and Express Js for the 
        backend and Mongo Db as the database. It is made fully responsive using React Bootstrap. We can add, edit, delete and filter employee data
        . Click on the image to go the project </p>
        <Link href="https://dainty-alpaca-324216.netlify.app/">
        <Image src={empporj} className='mx-auto' />
        </Link>
        
        <h3 className=' text-lg text-center px-2 lg:text-2xl dark:text-gray-200 '>Online TODO App</h3>
        <p className='text-lg m-8 dark:text-gray-200'>This project uses MERN stack. To use this app users need to either sign up or login using their 
        credentials. It uses JWT for authentication. Users can make new tasks, edit the progress of old tasks, delete tasks and signout when done.Click on the image 
        to check the live project.</p>
        <Link href="https://splendorous-eclair-8708bd.netlify.app/">
        <Image src={proj2} className='mx-auto' />
        </Link>
        
      </div>
    </section>

      

      
      </main>
    </div>
  )
}
