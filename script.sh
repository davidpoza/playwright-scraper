#!/bin/bash
export XAUTHORITY=/root/.Xauthority
export DISPLAY=:0
/usr/bin/xvfb-run --error-file=/tmp/xvfb.log -a -s '-terminate' --server-args='-screen 0 1920x1080x24' /home/davidpoza/.nvm/versions/node/v14.15.3/bin/node /home/davidpoza/prozis-scraper/app.js
pkill Xvfb 
