import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
const HomePage = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div>
      <SidebarProvider className=''>
      <SidebarComponent/>
      <main className='w-full'>
        {/* <SidebarTrigger /> */}
        {/* {children} */}
        
        <Header/>
        <Dashboard/>
    
       
      </main>
      </SidebarProvider>
        
    </div>
  )
}

export default HomePage