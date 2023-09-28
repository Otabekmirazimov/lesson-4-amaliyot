import { useState } from 'react'
import BirthdayList from './components/BirthdayList';
import Title from './components/Title';
import data from './data';


function App() {
  const [birthdays, setBirthday] = useState(data)
  
  const deleteBirthday = (id) => {
    setBirthday((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }

  return (
    <div className='card'>
      <Title birthdaysCount={birthdays.length}/>
      <BirthdayList birthdays={birthdays} deleteBirthday={deleteBirthday}/>
      {birthdays.length > 0 && <button className='clearBtn' onClick={() => setBirthday([])}>Clear All</button>}
      {birthdays.length == 0 && <button className='resetBtn' onClick={() => setBirthday(data)}>Reset</button>}
    </div>
  )
}

export default App