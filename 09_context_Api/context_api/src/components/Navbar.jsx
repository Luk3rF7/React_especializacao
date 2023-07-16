
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <Link to={'/Home'}> Inicio</Link>
        <Link to={'/About'}> Sobre</Link>
        <Link to={'/Info'}> Info </Link>
      </div>
  )
}
