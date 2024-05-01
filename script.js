const pdfList = document.getElementById('pdf-list');
const viewPdfButton = document.getElementById('view-pdf');
const pdfViewer = documentgetElementById('pdf-viewer');

// Function to fetch filenames from "books" folder (replace with your actual implementation)
function fetchPdfFiles() {
  // Simulate fetching filenames (replace with logic to read directory contents)
  return ['Ama-Herbstein-Manu-Ama-1-2000.pdf', 'book2.pdf', 'book3.pdf'];
}

const pdfFiles = fetchPdfFiles(); // Get the actual list of PDFs

// Display PDF filenames
pdfFiles.forEach((filename) => {
  const listItem = document.createElement('div');
  listItem.textContent = filename;
  listItem.addEventListener('click', () => {
    // User clicked on this PDF
    const selectedPdf = filename;
    const pdfUrl = `books/${selectedPdf}`;
    window.open(pdfUrl, '_blank');
  });
  pdfList.appendChild(listItem);
});