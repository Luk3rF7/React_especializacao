
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <Link to={'/'} />
        <Link to={'/about'} />
        <Link to={'/info'} />
      </div>
  )
}
