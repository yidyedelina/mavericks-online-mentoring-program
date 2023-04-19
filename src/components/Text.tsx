import React, { useState } from 'react'

interface Props {
  children: string
  maxchars: number
  handel: () => void
}

export default function Text({ children, maxchars, handel }: Props) {
  const [text, setText] = useState<boolean>(false)

  if (children.length <= maxchars) {
    return <div>{children}</div>
  }
  const short = children.substring(0, maxchars)
  return (
    <>
      <div>
        {short}{' '}
        <button onClick={handel} className="text-sky-500">
          {text ? '( Less )' : '(More)'}
        </button>
      </div>
    </>
  )
}
