import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { globalStyles } from "../../globalStyle";

export default function ProductsFilters() {
  const [perPage, setperPage] = React.useState(10);

  const handlePerPageChange = (event) => {
    setperPage(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        ...globalStyles.mainContainer,
        alignItems: "center",
        justifyContent: "space-between",
        height : "150px"
      }}
    >
      <Grid item md={2} xs={12}>
        <Box sx={{ marginBottom: { xs: "20px", md: "auto" } }}>
          {/* <Typography
            mb={1}
            variant="h1"
            sx={{
              ...globalStyles.mainHeading,
              color: "var(--off-blue)",
              lineHeight: "26px",
              fontSize: "18px",
            }}
          >
            Ecommerce Acceories & Fashion item{" "}
          </Typography> */}
          <Typography
            sx={{
              ...globalStyles.filterResults
            }}
          >
            Showing results 1 to 50
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        md={5}
        xs={12}
        sx={{
         ...globalStyles.filterPerPageContainer
        }}
      >
        <Typography
          sx={{
            ...globalStyles.filterPerPageText
          }}
        >
          Per Page:
        </Typography>
        <FormControl sx={{ minWidth: 80 }} size="small">
          <Select
            sx={{
              color: "var(--soft-blue)",
              fontSize: "12px",
              lineHeight: "18px",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
                borderWidth: "1px",
              },
            }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={perPage}
            onChange={handlePerPageChange}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <Typography
          sx={{
            ...globalStyles.filterSortText
          }}
        >
          Sorty By:
        </Typography>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            sx={{
              color: "var(--soft-blue)",
              fontSize: "12px",
              lineHeight: "18px",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E7E6EF",
                borderWidth: "1px",
              },
            }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={perPage}
            onChange={handlePerPageChange}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        md={4}
        xs={12}
        sx={{
         ...globalStyles.filterSearchInputContainer
        }}
      >
        <Typography
          sx={{
            ...globalStyles.filterViewText
          }}
        >
          View:
        </Typography>
        <WindowIcon
          sx={{
            ...globalStyles.filterWindowIcon
          }}
        />
        <FormatListBulletedIcon
          sx={{ color: "var(--off-blue)", fontSize: "20px" }}
        />
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            sx={{
              ...globalStyles.filterSearchInput
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
