import React from 'react';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected, listOfPokemon, btnSize, totalPages, activePage, onSelect}) => {

  let Style = { display: 'none'}

  if(display){
    Style.display = 'initial'
  } else {
    Style.display = 'none'
  }

  return (
    <div style={Style}>
      <SelectItemsPerPageButtons options={options} selectedValue={selectedValue} allValue={allValue} onOptionSelected={onOptionSelected} />

      <PokeList listOfPokemon={listOfPokemon} />

      <PaginationContainer btnSize={btnSize}
      totalPages={totalPages}
      activePage={activePage}
      onSelect={onSelect} />
    </div>
  )
}

export default PokemonIndexList;
