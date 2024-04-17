import { sectionElements } from '@/interfaces'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import {
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

interface propsMenu {
  data: sectionElements | null
  setView: React.Dispatch<React.SetStateAction<string>>
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  expanded: boolean
}

const Menu = (props:propsMenu) => {
  const [open, setOpen] = React.useState<string>('')

  React.useEffect(() => {
    if (!props.expanded) {
      setOpen('')
    }
  },[props.expanded])

  return (
    <ul className="overflow-hidden">
      {props?.data?.menu && props.data.menu.map((element) => (
        <>
          {element.submenu ? (
            <li className='w-full' key={element.label}>
              <button
                onClick={() => setOpen(element.label)}
                className="py-3 px-3 flex w-full transition-all text-black  hover:bg-primary_10 active:bg-primary_20 justify-between"
              >
                <div className='flex gap-4'>
                  {element.icon && <element.icon className="min-w-[22px] text-primaryHover" size={22} />}
                  {props.expanded && <p>{element.label}</p>}
                </div>
                <div className='flex h-6 items-center '>
                  {props.expanded ? open === element.label ? <FaChevronDown size={12} /> : <FaChevronUp size={12} /> : <></>}
                </div>
              </button>
              {element.submenu.map((item) => {
                if(open === element.label) return (
                  <button
                    onClick={() => props.setView(element.label+' '+item.label)} key={item.label}
                    className="py-2.5 px-10 flex gap-8 w-full transition-all text-black text-sm hover:bg-primary_10 active:bg-primary_20"
                  >
                    {item.icon && <item.icon className="min-w-[22px] text-primaryHover" size={22} />}
                    {props.expanded && <p>{item.label}</p>}
                  </button>
                )
              })}
            </li>
          ) : (
            <li className="w-full" key={element.label}>
              <button
                onClick={() => props.setView(element.label)}
                className="py-3 px-3 flex gap-4 w-full transition-all text-black  hover:bg-primary_10 active:bg-primary_20"
              >
                {element.icon && <element.icon className="min-w-[22px] text-primaryHover" size={22} />}
                {props.expanded && <p>{element.label}</p>}
              </button>
            </li>
          )}
        </>
      ))}
      <li>
        <button
          onClick={() => {
            props.setLogged(false)
            props.setView('')
            localStorage.removeItem('@aplication')
          }}
          className="py-3 px-3 flex gap-4 w-full transition-all text-black  hover:bg-primary_10 active:bg-primary_20"
        >
          <FaSignOutAlt className="min-w-[22px] text-primaryHover" size={22} />
          {props.expanded && <p>Sair</p>}
        </button>
      </li>
    </ul>
  )
}

export default Menu