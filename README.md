# h5ai

[![license][license-img]][github] [![web][web-img]][web] [![github][github-img]][github]

A modern HTTP web server index for Apache httpd, lighttpd, and nginx.

## Info for this fork

This Fork is not meant to be merged back.

It does require you download a current release of pdf.js with the original web viewer and to change the `pivate/conf/options.json`. The option for pdf previews is off by default since intervention is needed for you to use it!
[https://mozilla.github.io/pdf.js/getting_started/#download](https://mozilla.github.io/pdf.js/getting_started/#download)

PDF.js ask on their website that you change up the viewer a bit if you choose to use it for a website. Since I use this fork for my local storage of PDFs I did not make any changes to the viewer. So, you will have to supply your own custom pdf.js viewer.
[https://mozilla.github.io/pdf.js/getting_started/](https://mozilla.github.io/pdf.js/getting_started/)

The only things that need to be same as it is in the default viewer is that the path to the viewer `/web/viewer.html` with the query parameter `file` and argument of an absolute path of the pdf to open it.
`/pdfjs/web/viewer.html?file=%2Ftest%20file.pdf`

## Important

-   Do **not** install any files from the `src` folder, they need to be
    preprocessed to work correctly!
-   Find a preprocessed package and detailed install instructions on the
    [project page][web].
-   For bug reports and feature requests please use [issues][github-issues].

## Build

There are installation ready packages for the latest [releases][release] and
[dev builds][develop]. But to build **h5ai** yourself either `git clone` or
download the repository. From within the root folder run the following
commands to find a fresh zipball in folder `build` (tested on linux only,
requires [`node 10.0+`][node] to be installed, might work on other
configurations).

```sh
> npm install
> npm run build
```

## License

The MIT License (MIT)

Copyright (c) 2020 Lars Jung (https://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## References

**h5ai** profits from other projects, all of them licensed under the MIT license
too. Exceptions are some [Material Design icons][material-design-icons] (CC BY 4.0).

[web]: https://larsjung.de/h5ai/
[github]: https://github.com/lrsjng/h5ai
[github-issues]: https://github.com/lrsjng/h5ai/issues
[release]: https://release.larsjung.de/h5ai/
[develop]: https://release.larsjung.de/h5ai/develop/
[node]: https://nodejs.org
[material-design-icons]: https://github.com/google/material-design-icons
[license-img]: https://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[web-img]: https://img.shields.io/badge/web-larsjung.de/h5ai-a0a060.svg?style=flat-square
[github-img]: https://img.shields.io/badge/github-lrsjng/h5ai-a0a060.svg?style=flat-square
