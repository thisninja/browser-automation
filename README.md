# Webdriver.io + BrowserStack automation

[webdriver.io]: http://webdriver.io
[BrowserStack Automate]: https://www.browserstack.com/automate

## Setup

Install dependencies via

    yarn install

Then edit current `.env` file

    direnv edit .

where we export the following variables:

    BS_USER=your-browserstack-username
    BS_KEY=your-browserstack-apikey
    TOKEN=mindsay_widget_token
    ENV=mindsay_widget_env

## Run Tests

    npm run local # test local app on Browserstack
    npm run remote # tests production app on Browserstack
