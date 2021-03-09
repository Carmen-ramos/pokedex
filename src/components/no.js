CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    episodes: PropTypes.array,
  }),
};

CharacterList.propTypes = {
  characters: PropTypes.array,
};

FilterByName.propTypes = {
  name: PropTypes.string,
};

FilterByOrigin.propTypes = {
  origin: PropTypes.array,
  getOrigin: PropTypes.array,
};
FilterBySpecies.propTypes = {
  species: PropTypes.string,
};

Filters.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.array,
  getOrigin: PropTypes.array,
  species: PropTypes.string,
  gender: PropTypes.string,
  handleFilter: PropTypes.func,
};

import React from "react";

function FilterByOrigin(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "origin",
      value: ev.target.value,
    });
  };

  const originList = props.origin.map((origin, i) => {
    return (
      <label>
        <input
          className="Checkbox"
          type="checkbox"
          name="origin"
          value={origin}
          onChange={handleChange}
        />
        {origin}
      </label>
    );
  });

  return (
    <>
      <label htmlFor="origin" className="main__form--check stylelabel">
        Origin:
      </label>
      {originList}
    </>
  );
}
export default FilterByOrigin;

<FilterByOrigin handleFilter={props.handleFilter} origin={props.origin} />
<input
  type="buton"
  value="Reset"
  onClick={handleClick}
  className="main__form--reset"
/>

<Filters
handleFilter={handleFilter}
name={name}
species={species}
gender={gender}
origin={getOrigin()}
resetButton={resetButton}
/>