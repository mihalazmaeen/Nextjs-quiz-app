"use client"

import { fecthhUsers } from "@/app/(auth)/actions/fetchUsers"
import Navbar from "@/components/Navbar"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Footer from "@/components/Footer";

function LayoutProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPublicRoute = ["sign-in","sign-up"].includes(pathname?.split("/")[1]);

    const getNavbar = () =>{
        if(isPublicRoute) return null;
        return <Navbar />
    }
    const getFooter = () =>{
        if(isPublicRoute) return null;
        return <Footer />
    }
    const getContent = () =>{
        if(isPublicRoute) return null;
        return <>{children}</>
    }
    const getCurrentUser = async () =>{
      try {
        const response: any = await fecthhUsers()
        if (response.error)
        throw new Error(response.error.message)
      }catch(error){
        console.log(error)
      }finally{
        return
      }
    }
    useEffect(()=>{
        if(!isPublicRoute) getCurrentUser()
    },[])

    return(
        <div className=" min-h-screen  bg-secondary flex flexCol justify-between">
            {getNavbar()}
            {getContent()}
            {getFooter()}
        </div>
    )
}
export default LayoutProvider