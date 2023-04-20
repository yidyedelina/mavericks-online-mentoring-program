import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { useState } from 'react'

const TabBar = ({
  tabs,
}: {
  tabs: { label: string; component: ReactNode }[]
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="mx-auto w-2/3">
      <div className="flex border-b border-gray-400">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames(
              'px-4 py-2 text-sm font-medium', // add text-sm class here
              {
                'border-b-2 border-blue-500 text-gray-700': activeTab === index,
              },
              {
                'text-gray-500 hover:text-gray-700': activeTab !== index,
              }
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames(
              'transition-opacity duration-300',
              {
                'opacity-100': activeTab === index,
              },
              {
                'opacity-0': activeTab !== index,
              },
              {
                'pointer-events-none': activeTab !== index,
              },
              {
                'pointer-events-auto': activeTab === index,
              },
              {
                hidden: activeTab !== index,
              },
              {
                block: activeTab === index,
              }
            )}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TabBar
