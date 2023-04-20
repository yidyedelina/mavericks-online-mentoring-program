import React, { useState } from 'react'
import Datepicker from 'tailwind-datepicker-react'
const options = {
  title: 'schedule meeting',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  minDate: new Date(),
  theme: {
    background: '',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    disabledText: '',
    input: '',
    inputIcon: '',
    selected: '',
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date('2023-04-18'),
  language: 'en',
}

const DatePicker = ({setDate}) => {
  const [show, setShow] = useState<boolean>(false)
  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate);
  }
  const handleClose = (state: boolean) => {
    setShow(state)
  }

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  )
}
export default DatePicker
