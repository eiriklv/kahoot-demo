import puppeteer from "puppeteer";
import http from "http";
import express from "express";

const port = 8080;
const serverUrl = `http://localhost:${port}`;
let server: http.Server;

beforeAll(() => {
  const app = express();
  app.use(express.static("./build"));
  server = http.createServer(app).listen(port);
});

afterAll(() => {
  server.close();
});

describe("Smoke test", () => {
  test("Gameboard heading loads correctly", async () => {
    let browser = await puppeteer.launch({
      headless: true,
    });

    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768,
      },
      userAgent: "",
    });

    await page.goto(serverUrl);
    await page.waitForSelector("#gameBoard");

    const html = await page.$eval("#gameBoard > div > h1", (e) => e.innerHTML);
    expect(html).toBe("Kahoot! Points");

    browser.close();
  }, 16000);

  test("Scoreboard heading loads correctly", async () => {
    let browser = await puppeteer.launch({
      headless: true,
    });

    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768,
      },
      userAgent: "",
    });

    await page.goto(serverUrl);
    await page.waitForSelector("#scoreBoard");

    const html = await page.$eval("#scoreBoard > div > h1", (e) => e.innerHTML);
    expect(html).toBe("Player Items");

    browser.close();
  }, 16000);
});
