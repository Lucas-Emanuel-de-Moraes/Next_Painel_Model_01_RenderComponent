'use client'
import { useState } from "react"
import { EstFullScreen } from "@/components"
import { EstBaseApp } from "@/components/base"
import Logged from "@/views/Logged"
import Login from "@/views/Login"
import { sectionUser } from "@/data/sections"

export default function Home() {
  const [logged, setLogged] = useState<boolean>(true)
  const [view, setView] = useState<string>('')
  return (
    <>
      <EstFullScreen>
        {logged ? (
          <EstBaseApp setLogged={setLogged} setView={setView} data={sectionUser}>
            <Logged view={view} />
          </EstBaseApp>
        ) : (
          <Login setLogged={setLogged} />
        )}
      </EstFullScreen>
    </>
  )
}
