import React from 'react'

function FloatingButton({onClick, children}: {onClick: ()=> void}) {
  return (
    <button
      onClick={()=>onClick(true)}
     className="rounded-full bg-cyan-500 px-6 py-4 font-bold text-white hover:bg-cyan-600">
     {children}
    </button>
  )
}

export default FloatingButton
