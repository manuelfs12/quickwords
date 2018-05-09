const { BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

module.exports = {
    init() {
        this.ctx = new BrowserWindow({
            show: false,
            minWidth: 470,
            minHeight: 470,
            width: 430,
            height: 470,
            titleBarStyle: 'hidden',
        })

        this.ctx.loadURL(url.format({
            pathname: path.join(__dirname, 'view.html'),
            protocol: 'file:',
            slashes: true,
        }))

        this.ctx.showPopup = (position, snippet) => {
            const popupWindow = require('../popup')

            popupWindow.attach(this, position, snippet)

            // this.ctx.focus()
        }

        return this.ctx
    },
}