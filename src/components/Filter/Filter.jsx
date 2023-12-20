import { useSelector, useDispatch } from 'react-redux';
import { makeFilter, getFilter } from '../../redux/filterSlice';

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  // Збереження значення фільтру
  const handleFilter = ({ currentTarget }) => dispatch(makeFilter(currentTarget.value));

  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact:
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </>
  );
}

export default Filter;
