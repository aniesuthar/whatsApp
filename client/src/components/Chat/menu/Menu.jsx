import React, {useState} from 'react'
import Header from './Header'
import Search from './Search';
import Conversations from './Conversations';


function Menu() {
    
    const [text, setText] = useState('');

  return (
    <div>
        <Header/>
        <Search setText={setText} />
        <Conversations/>
    </div>
  )
}

export default Menu