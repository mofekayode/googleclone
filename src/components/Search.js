import React ,{useState}from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import {actionTypes} from "../reducer"

function Search({hideButtons = false}) {
const[input, setInput]= useState('')
const[{}, dispatch]= useStateValue()

const history = useHistory()
    const search =e=>{
       dispatch({
           type: actionTypes.SET_SEARCH_TERM,
           term:input

       })
        e.preventDefault()
        history.push('/search')
    }
    return (
        <form className='search'>
            <div className='search-input'>
             <SearchIcon className='search-input-icon'/>
             <input value={input} onChange={e=>setInput(e.target.value)}/>
             <MicIcon/>
            </div>
            {!hideButtons ? 
                ( <div className='search-buttons'>
                <Button type='submit'onClick={search}variant='outline'> Google search</Button>
                <Button variant='outline'> Im feeling luck</Button>
                  </div>)

            :
            ( <div className='search-buttons'>
                <Button className='buttons-hidden'type='submit'onClick={search}variant='outline'> Google search</Button>
                <Button className='buttons-hidden'variant='outline'> Im feeling luck</Button>
              </div>)

            }

           
        </form>
    )
}

export default Search
