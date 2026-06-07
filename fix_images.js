const fs = require('fs');

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\.split\('(\\\\|\\\\\\\\)'\)/g, ".split('\\\\')");
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
}

fixFile('/Users/achinthaedirisinghe/Desktop/Sportifyweb-main/app/web/src/pages/Home.jsx');
fixFile('/Users/achinthaedirisinghe/Desktop/Sportifyweb-main/app/web/src/components/products/ProductCard.jsx');
