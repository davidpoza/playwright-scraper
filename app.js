const playwright = require('playwright');
const fs = require('fs');

let browser;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function main() {
	try {
	console.log("launching browser");
	  browser = await playwright.chromium.launch({
			headless: false,
		});
  const page = await browser.newPage();
  // await page.goto('https://www.prozis.com/es/es/prozis/100-real-whey-protein-2000g', { waitUntil: 'networkidle'  });
	await page.goto('https://www.prozis.com/es/es/prozis/100-real-whey-protein-2000g');
	await page.waitForTimeout(4000); // this page gets the content via ajax
  const price = await page.$$eval('#ob-product-price', (element) => {
		return element[0].innerText;
	});
  console.log(price);
		let data = JSON.stringify({
			price,
			date: new Date().getTime()
		});
  fs.writeFileSync('/home/davidpoza/docker/filesnginx/www/whey-scraper/prozis.json', data);
	await browser.close();	      
	} catch (err) {
		console.log(err)
	  await browser.close();
	}
}

main();
