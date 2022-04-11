const { createCanvas, registerFont, loadImage } = require('canvas')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

registerFont(path.resolve(__dirname, './assets/Inter-ExtraBold.ttf'), { family: 'Inter-ExtraBold' });
registerFont(path.resolve(__dirname, './assets/Inter-Medium.ttf'), { family: 'Inter-Medium' });

// This function accepts 6 arguments:
// - ctx: the context for the canvas
// - text: the text we wish to wrap
// - x: the starting x position of the text
// - y: the starting y position of the text
// - maxWidth: the maximum width, i.e., the width of the container
// - lineHeight: the height of one line (as defined by us)
const wrapText = function(ctx, text, x, y, maxWidth, lineHeight) {
  let words = text.split(' ');
  let line = '';
  let testLine = '';
  let wordArray = [];
  let totalLineHeight = 0;

  for(var n = 0; n < words.length; n++) {
      testLine += `${words[n]} `;
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
          wordArray.push([line, x, y]);
          y += lineHeight;
          totalLineHeight += lineHeight;
          line = `${words[n]} `;
          testLine = `${words[n]} `;
      }
      else {
          line += `${words[n]} `;
      }
      if(n === words.length - 1) {
          wordArray.push([line, x, y]);
      }
  }

  return [ wordArray, totalLineHeight ];
}

// This function accepts 5 arguments:
// canonicalName: this is the name we'll use to save our image
// gradientColors: an array of two colors, i.e. [ '#ffffff', '#000000' ], used for our gradient
// articleName: the title of the article or site you want to appear in the image
// articleCategory: the category which that article sits in - or the subtext of the article
// emoji: the emoji you want to appear in the image.
const generateMainImage = async function(canonicalName, gradientColors, articleName, articleCategory, locale, logo) {
    if(fs.existsSync(`../static/thumbnails/${canonicalName}.png`)) {
        return `Image ${canonicalName} Exist! We did not create any.`
    }

    articleCategory = articleCategory.toUpperCase();

    if(typeof gradientColors === "undefined") {
        gradientColors = [ "#8005fc", "#073bae"];
    }

    const canvas = createCanvas(1342, 853);
    const ctx = canvas.getContext('2d')

    let grd = ctx.createLinearGradient(0, 853, 1352, 0);
    grd.addColorStop(0, gradientColors[0]);
    grd.addColorStop(1, gradientColors[1]);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1342, 853);

    ctx.drawImage(logo, 1342 - 150 - 75, 75, 150, 150);

    ctx.font = '95px Inter-ExtraBold';
    ctx.fillStyle = 'white';
    let wrappedText = wrapText(ctx, articleName, 85, 753, 1200, 100);
    wrappedText[0].forEach(function(item) {
        ctx.fillText(item[0], item[1], item[2] - wrappedText[1]);
    })

    // Add our category text to the canvas
    ctx.font = '50px Inter-Medium';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(articleCategory, 85, 753 - wrappedText[1] - 100);

    // Set canvas as to png
    try {
        // Save file
        const outputFile = path.join(__dirname, `../static/thumbnails/blog/${locale}/${canonicalName}.png`);
        fs.writeFileSync(outputFile, canvas.toBuffer());
    }
    catch(e) {
        console.log(e);
        return 'Could not create png image this time.'
    }
    return 'Images have been successfully created!';
}

const main = async function () {
  const logo = await loadImage(path.resolve(__dirname, './assets/r-logo-white.png'));

  ['en', 'id'].forEach(function (locale) {
    const pathname = path.join(__dirname, `../contents/blog/${locale}`);
    glob(`${pathname}/*.md`, function (err, files) {
      if (err) {
        throw err;
      }
      files.forEach(function (file) {
        const { data } = matter.read(file);
        const { title, slug, category } = data;
        generateMainImage(slug, ['#6441A5', '#2a0845'], title, category, locale, logo);
      });
    });
  });
}

main()
