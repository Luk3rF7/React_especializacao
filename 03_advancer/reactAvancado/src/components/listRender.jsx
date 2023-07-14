import { useState } from 'react';

const ListRender = () => {

  const [ list ] = useState(["lucas","user_1","user_2"])
  return (
    <div>
      <h1> Lista Render</h1>
      <hr />
      <ul>
        {list.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li >{item}</li>
        ))}
      </ul>
    </div>
  )
}
export default ListRender;