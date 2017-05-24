# zip-remote-resources

```javascript
const bytes = await new Promise(resolve => {
    const child = spawn('node', [
            `${__dirname}/../../node_modules/zip-remote-resources/index.js`,
            filename,
            JSON.stringify(['...IMAGE_URL.jpg'])
        ],
        {stdio: [0,'pipe',process.stderr]}
    );
    child.stdout.on('data', x => resolve(parseInt(x.toString())));
});
```
