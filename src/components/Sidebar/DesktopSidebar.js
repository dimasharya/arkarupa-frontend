import React from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar({route}) {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <SidebarContent route={route} />
    </aside>
  )
}

export default DesktopSidebar
