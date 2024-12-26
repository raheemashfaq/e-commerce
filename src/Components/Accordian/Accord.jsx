import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppleIcon from "@mui/icons-material/Apple";
import SetMealIcon from "@mui/icons-material/SetMeal";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PetsIcon from "@mui/icons-material/Pets";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import LiquorIcon from "@mui/icons-material/Liquor";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import WineBarIcon from "@mui/icons-material/WineBar";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
export default function Accord() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        width: "300px",
        overflowY: "auto",
        maxHeight: "90vh",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        padding: "10px",
        marginTop: "25px",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "30%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <AppleIcon /> Fruits & Vegitables
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Fruits</Typography>
          <Typography>Vegitables</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <SetMealIcon /> Meat & Fish
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Meat</Typography>
          <Typography>Fish </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CoffeeIcon /> Snacks
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Nuts & Biscuits</Typography>
          <Typography>Chocolates</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PetsIcon /> Pet Care
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Cat Food</Typography>
          <Typography>Dog Food</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CleanHandsIcon /> Home & Cleaning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Cleaning Products</Typography>
          <Typography>Air Freshner</Typography>
          <Typography>Kitchen Accessories</Typography>
          <Typography>Laundry</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LiquorIcon /> Dairy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Milk</Typography>
          <Typography>Butter</Typography>
          <Typography>Egg</Typography>
          <Typography>Yougurt</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <RiceBowlIcon /> Cooking
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Oil</Typography>
          <Typography>Rice</Typography>
          <Typography>Salt</Typography>
          <Typography>Sugar</Typography>
          <Typography>Spieces</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LunchDiningIcon /> Breakfast
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bread</Typography>
          <Typography>Cereal</Typography>
          <Typography>Jam</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <WineBarIcon /> Beverage
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Coeffee</Typography>
          <Typography>Energy Drinks</Typography>
          <Typography>Juice</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "pane20"}
        onChange={handleChange("pane20")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pane20bh-content"
          id="pane20bh-header"
        >
          <Typography
            component="span"
            sx={{
              width: "33%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HealthAndSafetyIcon /> Health & Beauty
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bath</Typography>
          <Typography>Cream</Typography>
          <Typography>Face Care</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
