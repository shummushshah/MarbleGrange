// jobs.js

const jobListings = [
  {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description: "We are looking for a software engineer to help design and build new features for our web application.",
    applyLink: "https://example.com/apply/software-engineer"
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description: "We are seeking a highly motivated product manager to help shape the future of our company's products.",
    applyLink: "https://example.com/apply/product-manager"
  },
  {
    title: "Data Analyst",
    location: "Los Angeles, CA",
    description: "We are looking for a data analyst to help us make better data-driven decisions.",
    applyLink: "https://example.com/apply/data-analyst"
  }
];// jobs.js

function viewJobs() {
  const jobListingsContainer = document.getElementById("job-listings");

  for (let i = 0; i < jobListings.length; i++) {
    const jobListing = jobListings[i];

    const jobListingDiv = document.createElement("div");
    jobListingDiv.classList.add("job-listing");

    const title = document.createElement("h3");
    title.innerHTML = jobListing.title;
    jobListingDiv.appendChild(title);

    const location = document.createElement("p");
    location.innerHTML = jobListing.location;
    jobListingDiv.appendChild(location);

    const description = document.createElement("p");
    description.innerHTML = jobListing.description;
    jobListingDiv.appendChild(description);

    const applyLink = document.createElement("a");
    applyLink.innerHTML = "Apply Now";
    applyLink.href = jobListing.applyLink;
    jobListingDiv.appendChild(applyLink);

    jobListingsContainer.appendChild(jobListingDiv);
  }
}
