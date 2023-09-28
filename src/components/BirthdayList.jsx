

function BirthdayList({birthdays, deleteBirthday}) {
  return (
    <ul>
        {birthdays.map((item) => {
            return (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} width={70} height={75} />
                  <div className="info">
                    <h3 className="ownName">{item.name}</h3>
                    <p className="ownInfo">{item.age} year old</p>
                  </div>
                    <button className="deleteBtn" onClick={() => {deleteBirthday(item.id)}}>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}

export default BirthdayList