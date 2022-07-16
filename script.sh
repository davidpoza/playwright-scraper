#!/bin/bash

/usr/bin/xvfb-run  -s '-terminate' /home/davidpoza/.nvm/versions/node/v14.15.3/bin/node /home/davidpoza/prozis-scraper/app.js &
export DISPLAY=":0"
exec "$@"
