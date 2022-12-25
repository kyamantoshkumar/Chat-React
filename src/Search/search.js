

import React, { useState } from "react"
import Scroll from "./Scroll";
import SearchList from "./SearchList";

const Search = ({details}) => {
    const [searchField, setSearchField] = useState('')
    const filteredPersons = details.filter(
        person => {
            return(
                person.name.toLowerCase()
                .includes(searchField.toLowerCase()) || 
                person.name.toLowerCase()
                .include(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    }

const searchList = () => {
    return(
        <Scroll>
            <SearchList filteredPersons={filteredPersons} />
        </Scroll>
    );
}

return (
      <section className="garamond">
         <div className="navy georgia ma0 grow">
            <h2 className="f2">Search Your Course</h2>
         </div>
         <div className="pa2">
            <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
             type="search" 
             placeholder="Search People"
             onChange={handleChange}  />
         </div>
         {searchList()}
      </section>
)

};
export default Search

