import React from 'react'
import { Logo } from '@/assets'
import ButtomBallon from '../EleButtomBallon'
import {
  FaChevronRight,
  FaChevronLeft,
  FaBars,
} from 'react-icons/fa'
import Image from 'next/image'
import { sectionElements } from '@/interfaces'
import Menu from './Menu'

interface propsNavbar {
  children: React.ReactNode
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
  setView: React.Dispatch<React.SetStateAction<string>>
  data: sectionElements | null
}

const Navbar = (props: propsNavbar) => {
  const [expanded, setExpanded] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setExpanded(window.innerWidth > 767)
    }
  }, [])

  return (
    <>
      <nav className={`${expanded ? 'w-[240px] 2xl:w-[280px]' : 'w-[48px]'} hidden md:flex transition-all duration-300 bg-white border-r  flex-col justify-between`}>
        <div>
          <div className={`${expanded ? 'h-[192px] 2xl:h-[224px] mb-8' : 'h-[48px] mb-0'} flex items-center transition-all duration-300 relative border-b`}>
            {expanded && (
              <div className="w-full">
                <Image
                  className="px-16"
                  src={Logo}
                  height={280}
                  width={280}
                  alt="logo"
                />
              </div>
            )}
            <button
              className={`${expanded ? 'top-[87px] right-0 ' : 'top-[-1px] right-[-1px]'} transition-all duration-300 absolute p-2.5 m-1.5 rounded-full hover:bg-gray-100`}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <FaChevronRight size={18} className='text-primaryHover' />
              ) : (
                <FaChevronLeft size={18} className='text-primaryHover' />
              )}
            </button>
            {expanded && (
              <div className="absolute -bottom-2.5 w-full flex justify-center">
                <p className="text-xs bg-white px-2 left-1/2 inline-block">
                  MENU
                </p>
              </div>
            )}
          </div>
          <Menu
            data={props.data}
            expanded={expanded}
            setExpanded={setExpanded}
            setLogged={props.setLogged}
            setView={props.setView}
          />
        </div>
      </nav>

      <div className="absolute p-3.5 block md:hidden ">
        <ButtomBallon
          direction="left-0"
          icon={FaBars}
          open={expanded}
          setOpen={setExpanded}
        >
          <Menu
            data={props.data}
            expanded={expanded}
            setExpanded={setExpanded}
            setLogged={props.setLogged}
            setView={props.setView}
          />
        </ButtomBallon>
      </div>

      <div className={`${expanded ? 'md:w-[calc(100%-240px)] 2xl:w-[calc(100%-280px)]' : 'md:w-[calc(100%-48px)]'} w-full transition-all duration-300`}>
        {props.children}
      </div>
    </>
  )
}

export default Navbar 
