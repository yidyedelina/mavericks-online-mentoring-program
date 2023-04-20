import React, { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import QuestionFeed from './QuestionFeed'
import ToAnswer from './ToAnswer'

interface MyItem {
  id: string
  Firstname: string
  Lastname: string
  question: string
  answer: []
}
function QuestionFeeds() {
  const [Question, setQuestion] = useState<MyItem[]>([])
  const docRef = collection(db, 'Questions')
  useEffect(() => {
    // onSnapshot so we can get data update real-time
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const tasks = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          Firstname: data.Firstname,
          Lastname: data.Lastname,
          question: data.question,
          answer: data.answer,
          id: doc.id,
        }
      })
      setQuestion(tasks)
      console.log(Question)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <div className="leading-5">
        {Question.map((item: any) => (
          <QuestionFeed
            key={item.id}
            Firstname={item.Firstname}
            Lastname={item.Lastname}
            Qid={item.id}
            question={item.question}
            answer={item.answer}
            firstname={''}
            lastname={''}
            anStatement={''}
          />
        ))}
      </div>
    </>
  )
}

export default QuestionFeeds
