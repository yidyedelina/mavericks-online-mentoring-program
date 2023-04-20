import { faCheck, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Accordion from './Accordions'
import Text from './Text'
import ToAnswer from './ToAnswer'

interface Props {
  Firstname: string
  Lastname: string
  Qid: string
  question: string
  answer: []
  firstname: string
  lastname: string
  anStatement: string
}

const QuestionFeed = ({
  Firstname,
  Lastname,
  Qid,
  question,
  answer,
}: Props) => {
  const [Toanswer, setToAnswer] = useState<boolean>(false)
  const ToClose = () => {
    setToAnswer(false)
  }
  const ToOpen = () => {
    setToAnswer(true)
  }

  const Question = () => {
    const [maxchar, setmaxchar] = React.useState<number>(200)
    const handel = () => {
      setmaxchar(1000000)
    }
    return (
      <Text handel={handel} maxchars={maxchar}>
        {question.substring(3, question.length - 4)}
      </Text>
    )
  }
  const Answer = ({ anStatement }: Props) => {
    const [maxchar, setmaxchar] = React.useState<number>(200)

    const handel = () => {
      setmaxchar(1000000)
    }
    return (
      <Text handel={handel} maxchars={maxchar}>
        {anStatement.substring(3, anStatement.length - 4)}
      </Text>
    )
  }
  const Avatar = () => {
    return (
      <div className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-cyan-100 dark:bg-cyan-600">
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          {Firstname[0]}
          {Lastname[0]}
        </span>
      </div>
    )
  }
  const AnsAvatar = ({ firstname, lastname }: Props) => {
    return (
      <div className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-cyan-100 dark:bg-cyan-600">
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          {firstname[0]}
          {lastname[0]}
        </span>
      </div>
    )
  }
  const AnsName = ({ firstname, lastname }: Props) => {
    return (
      <div>
        <p className="pt-2.5 font-bold">
          {firstname} {lastname}
        </p>
      </div>
    )
  }
  const Name = () => {
    return (
      <div>
        <p className="pt-2.5 font-bold">
          {Firstname} {Lastname}
        </p>
      </div>
    )
  }
  const QandA = () => {
    return (
      <div>
        <div className="flex gap-2">
          <Avatar />
          <Name />
          <hr />
        </div>
        <div className="pt-2 text-base">
          <Question />
        </div>
      </div>
    )
  }
  const Ans = () => {
    return (
      <div
        className="flex flex-col gap-y-4
    "
      >
        {answer.map((item: any) => (
          <div>
            <div className="flex gap-2">
              <AnsAvatar
                firstname={item.Firstname}
                lastname={item.Lastname}
                Firstname={''}
                Lastname={''}
                Qid={''}
                question={''}
                answer={[]}
                anStatement={''}
              />
              <AnsName
                Firstname={''}
                Lastname={''}
                Qid={''}
                question={''}
                answer={[]}
                firstname={item.Firstname}
                lastname={item.Lastname}
                anStatement={''}
              />
            </div>
            <div className="pt-2 text-base">
              <Answer
                Firstname={''}
                Lastname={''}
                Qid={''}
                question={''}
                answer={[]}
                firstname={''}
                lastname={''}
                anStatement={item.answer}
              />
            </div>
            <div className="border-t-2 border-cyan-300 p-2"></div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <>
      <div className="max-w-xl rounded-lg  bg-cyan-200 p-6 shadow-md ">
        <div>
          <QandA />
        </div>
        <ToAnswer onClose={ToClose} isOpen={Toanswer} qid={Qid} />
        <Accordion ToAnswer={ToOpen} children={Ans()} />
      </div>
      <br />
    </>
  )
}
export default QuestionFeed
