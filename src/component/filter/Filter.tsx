import { Container } from "@mui/system";
import React, { useMemo, useState } from "react";
import { Box, Toolbar, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./Filter.css";

type Inputs = {
  search: string;
};
const Filter: React.FC = () => {
  const { register } = useForm<Inputs>();
  const [value, setValue] = useState<string>("");
  const { ...search } = register("search");
  const [genre, setGenre] = useState<string>("");
  console.log(value);

  const handleChange = useMemo(
    () => (event: SelectChangeEvent) => {
      setGenre(event.target.value);
    },
    []
  );

  return (
    <>
      <Toolbar variant="dense" />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Genre</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={genre}
                label="Genre"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Technology</MenuItem>
                <MenuItem value={20}>Weather</MenuItem>
                <MenuItem value={30}>World</MenuItem>
                <MenuItem value={40}>Blockchain</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <form>
              <input
                {...search}
                placeholder="Search...."
                name="search"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="search-input"
              />
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Filter;
