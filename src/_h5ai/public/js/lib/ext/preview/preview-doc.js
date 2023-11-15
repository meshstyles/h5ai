const { dom } = require('../../util');
const allsettings = require('../../core/settings');
const preview = require('./preview');

const settings = Object.assign({
    enabled: false,
    pdfjsPath: '/pdfjs',
    types: []
}, allsettings['preview-doc']);
let tpl = '<div id="pv-content-doc"></div> ';

const updateGui = () => {
    const el = dom('#pv-content-doc')[0];
    if (!el) {
        return;
    }
};

const load = item => {
    const url = item.absHref;
    const encodedURL = encodeURIComponent(url);
    tpl = `<div id="pv-content-doc"><iframe id="pdf-js-viewer" src="${settings.pdfjsPath}/web/viewer.html?file=${encodedURL}" title="pdfjs" frameborder="0"></iframe></div> `;

    return dom(tpl);
};

const init = () => {
    if (settings.enabled) {
        preview.register(settings.types, load, updateGui);
    }
};

init();
