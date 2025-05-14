import PropTypes from "prop-types";
import CategorySelect from "./CategorySelect";
import Input from "./Input";
import SearchIcon from "./svg/SearchIcon";

function TaskFilter({
  filterQuery,
  setFilterQuery,
  filterCategory,
  setFilterCategory,
  categories,
}) {
  return (
    <div className="filter">
      <Input
        value={filterQuery}
        setValue={setFilterQuery}
        placeholder="Поиск задачи..."
        icon={<SearchIcon />}
        role="search"
      />
      <div className="category">
        <CategorySelect
          currentValue={filterCategory}
          setCurrentValue={setFilterCategory}
          values={categories}
        />
      </div>

      <style jsx>{`
        .filter {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 2em;
          gap: 0.5em;
        }

        .category {
          width: 100%;
          max-width: 120px;
        }

        @media (max-width: 500px) {
          .category {
            max-width: 80px;
          }
        }
      `}</style>
    </div>
  );
}

TaskFilter.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  setFilterQuery: PropTypes.func.isRequired,
  filterCategory: PropTypes.object.isRequired,
  setFilterCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default TaskFilter;
