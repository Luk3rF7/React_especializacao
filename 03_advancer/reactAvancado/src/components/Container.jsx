const Container = ({children,myValue}) => {
  return (
    <div>
   <h2>Container</h2>
   {children}
   <p>Esse e um valor : {myValue}</p>
    </div>
  )
}

export default Container