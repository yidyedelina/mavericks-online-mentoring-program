import React from 'react'

function FloatingButton({onClick}: {onClick: ()=> void}) {
  return (
    <button
      onClick={()=>onClick(true)}
     className="fixed bottom-20 right-20 rounded-full bg-cyan-500 px-6 py-4 font-bold text-white hover:bg-cyan-600">
      create task
    </button>
  )
}

export default FloatingButton
