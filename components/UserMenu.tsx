import Link from "next/link"
import {useState} from "react"
import { CgMenuGridO } from "react-icons/cg"	

const UserMenu = () => {
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const useMenuHandler = () => {
        setOpenUserMenu(!openUserMenu)
    }
    const links = [
        {name:"Stats",path:"/stats"},
        {name:"Leaderboards",path:"/leaderboards"},
    ]

  return (
    <div className="text-xl mt-1 cursor-pointer p-2" onMouseEnter={()=>setOpenUserMenu(true)} onMouseLeave={()=>setOpenUserMenu(false)}>
        <div className="relative">
            <CgMenuGridO className="text-3xl" />
            {openUserMenu && (
                <ul className="absolute top-7 bg-primary z-[99] sm:left-[-60px] left-[-80px] p-3 rounded-md text-white text-center">
                {links.map((link,index) => (
                    <Link key={index} href={link.path} onClick={()=> setOpenUserMenu(false)}>
                        <li className="hover:underline">
                            {link.name}
                        </li>
                    </Link>
                ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default UserMenu