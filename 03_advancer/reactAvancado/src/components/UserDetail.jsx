const UserDetails = ({name,job,id,age}) => {
  return (
    <div>
      <ul>
        <li>Id:_ <strong>{id}</strong> </li>
        <li>Name:_ <strong>{name}</strong> </li>
        <li>Jobs:_<strong>{job}</strong> </li>
        {age >= 18 ? 
        (<h2>pode tira habilitação </h2>) :
        (<h2>não tem 18 anos</h2>) }
      </ul>
    </div>
  )
}

export default UserDetails;