import { sectionElements } from '@/interfaces'
import { FaUser } from "react-icons/fa"

export const sectionUser: sectionElements = {
  userType: "user",
  menu: [
      { label: 'Pagina 1', icon: FaUser },
      { label: 'Pagina 2', icon: FaUser },
      { label: 'Pagina 3', icon: FaUser },
      { label: 'Pagina 4', icon: FaUser, submenu: [
        { label: 'SubPagina 1'},
        { label: 'SubPagina 2'},
        { label: 'SubPagina 3'},
      ]},
  ]
}