import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/assets/logoSn.png'



const Header = ()=>{
    return(
        <div className='container-nav'>
        <div className='logo'>  
        <Link href="/">
          <Image src={logo} />
        </Link>
        </div>
      
        <div>
            <nav>
              <Link href="/Termes" className="link">Termes et Conditions</Link>
              <Link href="/Politique" className="link">Politique de confidentialité</Link>
            </nav>
        </div>
      </div>
    )

}

export default Header