import * as nodeZip from 'node-zip';
import * as fetch from 'isomorphic-fetch';
import {basename} from 'path';
import {writeFileSync} from 'fs';

const filename = process.argv[2];
const list = JSON.parse(process.argv[3]);
const zip = new nodeZip();

Promise
    .all(list.map(async uri => {
        try {
            const response = await fetch(encodeURI(uri));
            const buffer = await (response as any).buffer();
            zip.file(basename(uri), buffer);
        } catch (ex) {
            console.error(`fetch error: ${uri}`, ex);
        }
    }))
    .then(_ => {
        try {
            const buffer = zip.generate({base64: false, compression: 'DEFLATE'});
            writeFileSync(filename, buffer, 'binary');
        } catch(ex) {
            console.error(ex);
        }
    });
