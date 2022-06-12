import React from 'react'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

function Sidebar({route}) {
  return (
    <>
      <DesktopSidebar route={route} />
      <MobileSidebar route={route} />
    </>
  )
}

export default Sidebar
