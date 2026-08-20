/* Generates a small, valid PDF brochure on the client so the
 * "Download Brochure" action is fully functional without a backend.
 */

const escapePdfText = (text) =>
  String(text)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\r?\n/g, ' ');

export const downloadBrochurePdf = (customerName = '') => {
  const name = escapePdfText(customerName || 'Customer');

  const body = [
    'BT /F1 30 Tf 72 720 Td (Savera City Real Estates) Tj ET',
    'BT /F1 16 Tf 72 690 Td (Premium Residential & Commercial Projects) Tj ET',
    `BT /F1 12 Tf 72 640 Td (Dear ${name},) Tj ET`,
    'BT /F1 12 Tf 72 610 Td (Thank you for your interest. This is your project brochure.) Tj ET',
    'BT /F1 10 Tf 72 540 Td (For detailed brochures, floor plans and price lists visit saveracity.in) Tj ET',
    'BT /F1 10 Tf 72 520 Td (or call us at +91 98765 43210.) Tj ET'
  ].join('\n');

  const objects = [
    '<</Type/Catalog/Pages 2 0 R>>',
    '<</Type/Pages/Kids[3 0 R]/Count 1>>',
    '<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>',
    `<</Length ${body.length}>>\nstream\n${body}\nendstream`,
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>'
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<</Size ${objects.length + 1}/Root 1 0 R>>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'savera-city-brochure.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
};
