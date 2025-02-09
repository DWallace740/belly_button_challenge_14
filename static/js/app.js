// URL for the JSON Data
const url_reference = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Build the metadata panel
function buildMetadata(sample) {
  d3.json("url_reference").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let result = metadata.find(obj => obj.id == sample);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html('');

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(url_reference).then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let result = samples.find(obj => obj.id == sample);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.sample_values;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Electric",
      },
    };
    
    let bubbleLayout = {
      title: "OTUs in the Selected Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      hovermode: "closest",
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", [bubbleTrace], bubbleLayout);



    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let top_otu_ids = otu_ids.slice(0, 10).reverse();
    let top_sample_values = sample_values.slice(0, 10).reverse();
    let top_otu_labels = otu_labels.slice(0, 10).reverse();

    // Don't forget to slice and reverse the input data appropriately
    let yticks = otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
    
    // Build a Bar Chart
    let barTrace = {
      x: top_sample_values.slice(0, 10).reverse(),
      y: yticks,
      text: top_otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h",
      marker: {
        color: otu_ids.slice(0, 10).reverse(),
        colorscale: "Rainbow"
      }
    };

    let barLayout = {
      title: "Top 10 OTUs Found",
      margin: { t: 30, l: 150 },
    };

    // Render the Bar Chart

    Plotly.newPlot("bar", [barTrace], barLayout);
  })
  .catch((error) => console.error("Error fetching chart data:", error));
}

// Function to run on page load
function init() {
  d3.json(url_reference).then((data) => {

    // Get the names field
    let sample_names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    sample_names.forEach(id => {
      dropdown.append("option").text(id).property("value",id);
    });

    // Get the first sample from the list
    let sample_1 = sample_names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(sample_1);
    buildCharts(sample_1);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();