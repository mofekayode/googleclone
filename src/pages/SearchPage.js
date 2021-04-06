import React from 'react'
import useGoogleSearch from '../useGoogleSearch'
import {useStateValue} from '../StateProvider'
import {Link} from "react-router-dom"
import './SearchPage.css';
import response from'../response'
import Search from'../components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
    const[{term}, dispatch]= useStateValue()
    const {data}  = useGoogleSearch(term)
   // const data = response
    //https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/create/new
   //AIzaSyD03DnnCylEjWLpMd0eD8xUc7C7VQPeFqo
   //5d239a1e292350e4e
   console.log(data)
    return (
        <div className="searchPage">
            <div className="searchPage-header">
           <Link to='/'>
                <img
                className="searchPage-logo"
                src='https://www.google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif'
                />
           </Link>
           <div className="searchPage-headerbody">
            <Search hideButtons/>
                <div className="searchPage-options">

                    <div className="searchPage-options-left">
                        <div className="searchPage-option">
                            <SearchIcon/>
                            <Link to='/all'>All</Link>
                        </div>
                        <div className="searchPage-option">
                            <DescriptionIcon/>
                            <Link to='/News'> News</Link>
                        </div>
                        <div className="searchPage-option">
                            <ImageIcon/>
                            <Link to='/images'>images</Link>
                        </div>
                        <div className="searchPage-option">
                            <SearchIcon/>
                            <Link to='/shopping'>shopping</Link>
                        </div>
                        <div className="searchPage-option">
                            <LocalOfferIcon/>
                            <Link to='/maps'>Maps</Link>
                        </div>
                        <div className="searchPage-option">
                            <MoreVertIcon/>
                            <Link to='/more'>more</Link>
                        </div>
                    </div>

                    
                   

                    <div className="searchPage-options-right">
                    <div className="searchPage-option">

                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className="searchPage-option">
                          
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
           {term&&(
            <div className="searchPage-results">
            <p className="searchPage-results-count"> About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)  </p>
            {data?.items.map(item=>(
                <div className="searchPage-result">
                          
               <a href={item.link}> {item.pagemap?.cse_image?.length>0&&item.pagemap?.cse_image[0]?.src&&(
                   <img
                   className="searchPage-result-image"
                   src={item.pagemap?.cse_image[0]?.src}
                   />
               )}{item.displayLink}</a>
               <a className="searchPage-result-title"href={item.link}> <h2>{item.title}</h2></a>
               <p className="searchPage-result-snippet"> {item.snippet}</p>
            </div>
            ))}
           </div>

           )}
          
        </div>
    )
}

export default SearchPage
