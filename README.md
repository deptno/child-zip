# zip-remote-resources
[![npm](https://img.shields.io/npm/dt/zip-remote-resources.svg?style=for-the-badge)](https://www.npmjs.com/package/zip-remote-resources)
> 💔 THIS PROJECT IS NO LONGER MAINTAINED

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

## related
- https://github.com/deptno/class-zangsisi
