# DW's Belly Button Biodiversity Dashboard

## Overview
This project involves building an interactive dashboard that visualizes microbial biodiversity from human belly buttons. The dataset catalogs different microbial species (operational taxonomic units, or OTUs) found in various individuals, showing that only a few microbial species are prevalent in over 70% of people.

The dashboard consists of:
    - A bar chart showing the top 10 most prevalent microbes.
    - A bubble chart displaying all microbial species in a sample.
    - A demographic information panel providing metadata about the selected sample.
    - A dropdown menu to select different test subjects and dynamically update all charts.
The project was deployed using GitHub Pages for public access.

## Objective
The goal of this challenge is to:

Retrieve and visualize microbial biodiversity data using D3.js.
    - Create interactive charts with Plotly.js.
    - Display metadata for each sample.
    - Implement dynamic updates when a user selects a new test subject.
    - Deploy the dashboard using GitHub Pages.

## Features
    - Interactive Bar Chart
    - Displays the top 10 most common OTUs found in a test subject.
    - Uses horizontal bars for better visualization.
    - OTUs are labeled as OTU [id].
    - Hover text provides additional details.

#### Bubble Chart
    - Shows all OTUs found in a test subject.
    - The x-axis represents OTU IDs.
    - The y-axis represents sample values (how many times the OTU was found).
    - Bubble size corresponds to OTU prevalence.
    - Bubble color is mapped to OTU ID values.
    - Hover text provides OTU labels.

#### Demographic Information Panel
    - Displays metadata (e.g., age, location, belly button type).
    - Updates dynamically when a new sample is selected.

#### Dynamic Dropdown Menu
    - Allows users to select different test subjects.
    - Updates both charts and metadata when a new sample is selected.

#### Dashboard Deployment
    - The dashboard is deployed using GitHub Pages for easy access.


## Key Visualizations
    - Includes Top 10 OTUs Bar Chart
    - Bubble Chart of Microbial Diversity
    - Metadata Panel for Selected Test Subjectample images or descriptions.

## Technologies and Tools
    - JavaScript: Core programming language.
    - D3.js: For fetching and handling JSON data.
    - Plotly.js: For interactive charting.
    - HTML/CSS: For structuring and styling the dashboard.
    - GitHub Pages: For deployment.

## Setup Instructions
### **Prerequisites**
- A modern web browser (**Google Chrome recommended**).
- A **GitHub account** (for deploying via GitHub Pages).

### **Steps to Run Locally**
1. **Clone this repository**:
   ```bash
   git clone https://github.com/DWallace740/belly_button_challenge_14.git

## How to Use
1. Visit the deployed GitHub Pages link.
2. Select a test subject ID from the dropdown menu.
3. View the updated charts and metadata.
4. Hover over the charts for additional information.

## Resources and Support
This project was developed using the following resources:

P- lotly.js Documentation: For interactive charting.
- D3.js Documentation: For handling JSON data.
- ChatGPT (AI Assistant): For debugging and structuring the code.
- Xpert Learning Assistant: For structuring and debugging the code.
- Class Materials: For project guidelines and dataset references.

## Project Purpose
This project showcases how to use JavaScript, D3.js, and Plotly.js to create interactive data visualizations. It provides insights into microbial biodiversity, helping researchers analyze which bacterial species are common in human belly buttons.


## Author
Daena Wallace 
This project was developed as part of Challenge 14 for a JavaScript and data visualization assignment.


## License
Educational Use Only