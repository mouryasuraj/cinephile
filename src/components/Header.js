import '../App.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className="leftHeader">
          <h1 className='logoName'>Cinephile</h1>
          <p>HD Movies at the smallest file size</p>
        </div>
        <div className="rightHeader">
          <input type="text" placeholder='Quick Search'/>
          <button className='searchBtn'>Search</button>
          <button className='loginBtn'>Login</button>
          <button className='registerBtn'>Register</button>
        </div>
    </div>
  )
}

export default Header;