// app/api/whatsapp-auth/route.ts

import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const SESSION_FILE = path.join(process.cwd(), 'whatsapp-session.json');

export async function GET() {
  let browser;
  try {
    console.log('Starting WhatsApp authentication process...');

    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('Browser launched successfully.');

    console.log('Creating new page...');
    const page = await browser.newPage();
    console.log('New page created.');

    if (fs.existsSync(SESSION_FILE)) {
      console.log('Loading saved cookies...');
      const cookiesString = fs.readFileSync(SESSION_FILE, 'utf8');
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
      console.log('Cookies loaded successfully.');
    } else {
      console.log('No saved cookies found.');
    }

    console.log('Navigating to WhatsApp Web...');
    await page.goto('https://web.whatsapp.com', { waitUntil: 'networkidle0', timeout: 60000 });
    console.log('WhatsApp Web loaded.');

    console.log('Checking for QR code...');
    const qrCode = await page.$('canvas');
    if (qrCode) {
      console.log('QR code found. Please scan the QR code to log in.');
      console.log('Waiting for chat list to appear...');
      await page.waitForSelector('div[data-testid="chat-list"]', { timeout: 120000 });
      console.log('Chat list appeared. Login successful.');
    } else {
      console.log('No QR code found. User might be already logged in.');
    }

    console.log('Saving session cookies...');
    const cookies = await page.cookies();
    fs.writeFileSync(SESSION_FILE, JSON.stringify(cookies, null, 2));
    console.log('Session cookies saved.');

    console.log('Closing browser...');
    await browser.close();
    console.log('Browser closed.');

    console.log('Authentication process completed successfully.');
    return NextResponse.json({ status: 'authenticated' }, { status: 200 });
  } catch (error) {
    console.error('Error during authentication process:', error);
    return NextResponse.json(
      { error: 'Failed to authenticate with WhatsApp', details: error.message },
      { status: 500 }
    );
  } finally {
    if (browser) {
      try {
        await browser.close();
        console.log('Browser closed in finally block.');
      } catch (closeError) {
        console.error('Error while closing browser:', closeError);
      }
    }
  }
}