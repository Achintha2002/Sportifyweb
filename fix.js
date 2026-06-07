const fs = require('fs');
const filePath = '/Users/achinthaedirisinghe/Desktop/CreamWeb/client/src/pages/MyInquiries.jsx';

let content = fs.readFileSync(filePath, 'utf8');

const targetStr = '<p className="text-xs text-slate-600 italic">"{inq.message}"</p>';
const replacementStr = '<p className="text-xs text-slate-600 italic">"{inq.message}"</p>\n                                            {inq.phone && <p className="text-[11px] text-slate-500 mt-1 font-medium">📞 {inq.phone}</p>}';

if (content.includes(targetStr) && !content.includes('📞 {inq.phone}')) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated MyInquiries.jsx to show phone number!');
} else {
    console.log('Target string not found or already updated.');
}
