import puppeteer from "puppeteer"
import 'dotenv/config'
const STD_TIMEOUT = 10000;


async function loginNetflix(user, pass, profile, headless){

  // Set up browser and page
  const browser = await puppeteer.launch({headless: headless});
  const page = await browser.newPage();

  // Navigate to Netflix login page
  await page.goto('https://www.netflix.com/login');

  // Enter Username and Password, click submit
  await page.waitForSelector('#id_userLoginId', {timeout: STD_TIMEOUT});
  await page.type('#id_userLoginId', user, { delay: 100 });
  await page.waitForSelector('#id_userLoginId', {timeout: STD_TIMEOUT});
  await page.type('#id_password', pass, { delay: 200 });
  await page.click('.btn.login-button.btn-submit.btn-small');

  // Navigate profiles page
  await page.waitForSelector('.choose-profile', {timeout: STD_TIMEOUT});
  const profiles = await page.$$('.choose-profile li');
  console.log(`num of li elements: ${profiles.length}\n`)
  if(profiles){
    await profiles.forEach(async (prof) => {
      const targetProfile = await prof.$x(`//span[text()='${profile}']`);
      const targetProfileButton = await prof.$('a');
      if(targetProfile.length > 0){
        await targetProfileButton.click();
      }
    });
  }

  return browser;
}

async function cancelNetflixSubscription(browser){
  // TODO: Navigate to Account > Cancel Streaming Subscription

  // TODO: Cancel Subscription
}

const USER = process.env.NETFLIX_USER;
const PASS = process.env.NETFLIX_PASS;
const PROF = 'Sam'

loginNetflix(USER, PASS, PROF, false).then(async (browser) => {
  console.log("login complete");
  // await browser.close()
  // process.exit(1)
}).catch(async (err) => {
  console.error(err);
});





// fetch('https://www.netflix.com/login').then((response) => {
