// json2html.js
export default function json2html(data) {
    // Extract unique keys from all objects in the array to form the table headers
    const columns = [...new Set(data.flatMap(Object.keys))];
    
    // Create the opening table tag with the specified attribute
    let html = `<table data-user="yeshwanthvalishetti20@gmail.com">`;
  
    // Generate the table headers using the keys
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
  
    // Generate table rows for each object in the data array
    html += `<tbody>${data.map(row => {
      return `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    }).join('')}</tbody>`;
  
    // Close the table tag
    html += `</table>`;
  
    return html;
  }
  