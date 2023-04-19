import { faCheck, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from './Accordion'
import Text from './Text'
import ToAnswer from './ToAnswer'

interface Props {
  ToAnswer: () => void
}

const QuestionFeed = ({ ToAnswer }: Props) => {
  const Question = () => {
    const [maxchar, setmaxchar] = React.useState<number>(200)
    const handel = () => {
      setmaxchar(1000000)
    }
    return (
      <Text handel={handel} maxchars={maxchar}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        ducimus praesentium laudantium? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quam ratione nulla accusantium esse similique commodi?
        Voluptatibus dolorem rem tempora dignissimos dolores aut. Doloremque
        quis nemo esse at asperiores veniam recusandae! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Esse nisi enim maxime! Sed maxime
        explicabo expedita mollitia nulla similique perspiciatis vero eligendi
        ratione officia ut est inventore, ipsam rerum fugiat? Lorem ipsum dolor
        sit amet consectetur
      </Text>
    )
  }
  const Avatar = () => {
    return (
      <div className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
    )
  }
  const Name = () => {
    return (
      <div>
        <p className="pt-2.5 font-bold">joss shemeles</p>
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
      <div>
        <QandA />
        <br />
        <QandA />
        <br />
        <QandA />
      </div>
    )
  }
  return (
    <div className="max-w-xl rounded-lg  border-gray-900 bg-gray-200 p-6 shadow-md dark:border-gray-900 dark:bg-gray-800 ">
      <div>
        <QandA />
      </div>
      <Accordion ToAnswer={ToAnswer} children={Ans()} />
    </div>
  )
}
export default QuestionFeed
