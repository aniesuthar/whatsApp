import React, {useState} from 'react'
import Header from './Header'
import Search from './Search';


function Menu() {
    
    const [text, setText] = useState('');

  return (
    <div>
        <Header/>
        <Search setText={setText} />
    </div>
  )
}

export default Menu