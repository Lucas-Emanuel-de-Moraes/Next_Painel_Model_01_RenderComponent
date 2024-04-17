import { IconType } from 'react-icons'

type menuItem = {
  label: string
  icon?: IconType
  submenu?: menuItem[]
}
export type sectionElements = {
  userType: string
  menu?: menuItem[]
}
