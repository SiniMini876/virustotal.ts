# virustotal.ts

[![Node.js Package](https://github.com/SiniMini876/virustotal.ts/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/SiniMini876/virustotal.ts/actions/workflows/npm-publish.yml) 
<a href="https://www.npmjs.com/package/virustotal.ts"><img src="https://img.shields.io/npm/v/virustotal.ts.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/virustotal.ts"><img src="https://img.shields.io/npm/dm/virustotal.ts.svg?maxAge=3600" alt="npm downloads" /></a>

[![NPM](https://nodei.co/npm/virustotal.ts.png?mini=true)](https://npmjs.org/package/virustotal.ts)

A package to communicate with the Virus Total API V3! <br>
I've made this as a hobby and it's a really starter stage so don't expect it to work perfectly.<br>
I had to implement the `VTClient.files.scanFile` method with the v2 api because the v3 api on this endpoint is kinda broken.<br>
Virus Total has a large API endpoints some of which do not work. I have written on top of every method that uses a corrupted API endpoint `// TODO: API Broken`

Make sure you use Node.js version 16.0 > !

To get started look at the `/test/index.js` for the demo. Just follow the [VT docs](https://developers.virustotal.com/)


** I am not affiliated to Virus Total in any way. Make sure you generate a API key through the [Virus Total](https://www.virustotal.com/gui/my-apikey) website!

Be welcome to modify and improve the code!

SiniMini876 © All rights reserved
