import React from "react";
import { FilterBarStyled } from "./FilterBarStyled";
import { MediaApplicationSupportedTypes } from "../../app/store/MediaStore/MediaStoreTypes";
import mediaStore from "../../app/store/MediaStore/MediaStore";
import { observer } from "mobx-react-lite";
import Container from "../../shared/ui/Container";

const FilterBar: React.FC = observer(() => {
  const { selectedTab, textFilter, setSelectedTab, setTextFilter } = mediaStore;

  return (
    <FilterBarStyled>
      <Container>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Filter by title"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
            className="filter-input"
          />
          <div className="filter-tabs">
            {MediaApplicationSupportedTypes.map((item, index) => (
              <button
                className={`filter-tab ${item === selectedTab ? "active" : ""}`}
                onClick={() =>
                  setSelectedTab(selectedTab === item ? null : item)
                }
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </FilterBarStyled>
  );
});
export default FilterBar;
