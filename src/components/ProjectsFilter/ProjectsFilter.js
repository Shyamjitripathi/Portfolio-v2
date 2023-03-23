import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
