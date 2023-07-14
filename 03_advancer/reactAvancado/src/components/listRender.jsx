import { useState } from 'react';

const ListRender = () => {

  const [ list ] = useState(["lucas","user_1","user_2"])
  const [ user ] = useState([
    {id:1,name: 'user_2',age: 18},
    {id:2,name:'user_3',age: 20},
    {id:3,name:'user_4',age:15}
  ])
  return (
    <div>
      <h1> Lista Render</h1>
      <hr />
      <ul>
        {list.map((item,i) => (
          // eslint-disable-next-line react/jsx-key
          <li key={i} >{item}</li>
        ))}
      </ul>
      <h2> List User</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )
}
export default ListRender;