const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create a new PDF document
const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 72, bottom: 72, left: 72, right: 72 }
});

// Output file
const outputPath = path.join(__dirname, 'public', 'visa-sponsorship-letter.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Helper functions
const addSection = (title) => {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(11).text(title);
  doc.moveDown(0.3);
  doc.font('Helvetica').fontSize(11);
};

const addBullet = (text) => {
  doc.text(`•  ${text}`, { indent: 20 });
};

// Header
doc.font('Helvetica-Bold').fontSize(14).text('SOHAM GANATRA', { align: 'center' });
doc.font('Helvetica').fontSize(11).text('Co-Founder – Composio', { align: 'center' });
doc.text('San Francisco, California, USA', { align: 'center' });

doc.moveDown(1.5);

// Date
const today = new Date();
const dateStr = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
doc.font('Helvetica').fontSize(11).text(`Date: ${dateStr}`);

doc.moveDown(1);

// Addressee
doc.text('To');
doc.text('The Honorable Visa Officer');
doc.text('U.S. Embassy / Consulate');

doc.moveDown(1);

// Subject
doc.font('Helvetica-Bold').text('Subject: Sponsorship & Invitation Letter for Mr. Pramesh Ganatra');
doc.font('Helvetica');

doc.moveDown(1);

// Salutation
doc.text('Dear Sir / Madam,');

doc.moveDown(0.8);

// Introduction
doc.text(
  'I, Soham Ganatra, respectfully submit this letter in support of the U.S. Tourist Visa (B-1/B-2) application of my father, Mr. Pramesh Ganatra, a citizen of India.',
  { align: 'justify' }
);

doc.moveDown(0.8);

doc.text(
  'I am currently residing in San Francisco, California, and working as Co-Founder of Composio, a technology company with operational offices in San Francisco. I am legally present in the United States on an O-1 Visa (Extraordinary Ability in Business).',
  { align: 'justify' }
);

// My Details Section
addSection('MY DETAILS');
doc.text('Name: Soham Ganatra');
doc.text('Designation: Co-Founder');
doc.text('Company: Composio');
doc.text('Office Location: San Francisco, California, USA');
doc.text('Immigration Status: O-1 Visa (Valid)');

// Purpose of Invitation
addSection('PURPOSE OF INVITATION');
doc.text(
  'I cordially invite my father to visit the United States for a short-duration family visit and tourism purposes only. The visit is strictly temporary in nature, and he will return to India upon completion of the planned stay.',
  { align: 'justify' }
);

// Sponsorship Statement
addSection('FINANCIAL SPONSORSHIP & ACCOMMODATION');
doc.text('During his stay in the United States, I will provide the following:', { align: 'justify' });
doc.moveDown(0.3);
addBullet('Full accommodation at my residence');
addBullet('Coverage of all local transportation and living expenses');
addBullet('Support for any incidental expenses during his visit');
doc.moveDown(0.3);
doc.text('I confirm that my father:', { align: 'justify' });
doc.moveDown(0.3);
addBullet('Will not engage in any employment or business activity in the United States');
addBullet('Will strictly comply with all U.S. immigration laws and regulations');
addBullet('Will not overstay beyond the authorized period of admission');

// Strong Ties to India
addSection('STRONG TIES TO HOME COUNTRY');
doc.text(
  'My father, Mr. Pramesh Ganatra, maintains strong professional and personal ties to India, which necessitate his timely return:',
  { align: 'justify' }
);
doc.moveDown(0.3);
addBullet('Proprietor of Aneri Construction Co., an established business operating since 2008');
addBullet('Active construction projects requiring his direct supervision and management');
addBullet('Ownership of residential and commercial real estate properties in India');
addBullet('Permanent family residence with other family members in India');
addBullet('Long-standing community and social commitments');
doc.moveDown(0.3);
doc.text(
  'Given his substantial business responsibilities and family obligations, his return to India is assured.',
  { align: 'justify' }
);

// Closing
doc.moveDown(1);
doc.text(
  'I respectfully request you to kindly grant Mr. Pramesh Ganatra a U.S. Tourist Visa (B-1/B-2) to enable this family visit.',
  { align: 'justify' }
);

doc.moveDown(0.5);
doc.text('Thank you for your time and consideration.');

doc.moveDown(1.5);

// Signature block
doc.text('Sincerely,');
doc.moveDown(2);

doc.text('_____________________________');
doc.font('Helvetica-Bold').text('Soham Ganatra');
doc.font('Helvetica').text('Co-Founder – Composio');
doc.text('San Francisco, California, USA');

doc.moveDown(1);
doc.fontSize(10);
doc.text('Contact: sohamganatra1@gmail.com');

// Finalize the PDF
doc.end();

stream.on('finish', () => {
  console.log(`\n✓ PDF generated successfully!`);
  console.log(`\nFile location: ${outputPath}`);
  console.log(`\nTo download, you can access it at: /visa-sponsorship-letter.pdf when running your dev server`);
});
