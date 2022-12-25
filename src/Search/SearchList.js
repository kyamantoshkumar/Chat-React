import React from "react"
import Card from "./Card"

const SearchList = ({filteredPersons}) => {
    const filtered = filteredPersons.map(person => <Card keyt={person.id} person={person} />);
  return (
    <div>
        {filtered}
    </div>
  )
}
export default SearchList