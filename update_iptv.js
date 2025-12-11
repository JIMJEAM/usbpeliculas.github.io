const fs = require('fs');
const path = require('path');

const basePath = __dirname;
const htmlToInject = `
<div class="container mt-5 mb-3">
    <button id="toggle-dynamic-gallery" class="btn btn-warning btn-lg btn-block w-100 fw-bold">
        📂 Cargar Catálogo Completo (Beta)
    </button>
    <div id="dynamic-gallery-wrapper" style="display: none; margin-top: 20px;">
        <div id="dynamic-gallery-container"></div>
        <div class="text-center mt-3 mb-5">
            <button id="load-more-btn" class="btn btn-primary btn-lg">Cargar más resultados</button>
        </div>
    </div>
</div>
`;

const scriptToInject = `
<script>
    function videoUrl(url) {
        if (window.player) {
            window.player.load(url);
            document.getElementById('player')?.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>
<script src="js/m3u_loader_iptv.js"></script>
</body>
`;

const filesToUpdate = [];
filesToUpdate.push('IPTV.html');
for (let i = 2; i <= 21; i++) { // User said IPTV.html to IPTV21.html. IPTV2 to IPTV21
    filesToUpdate.push(`IPTV${i}.html`);
}

filesToUpdate.forEach(fileName => {
    const filePath = path.join(basePath, fileName);
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${fileName}...`);
        let content = fs.readFileSync(filePath, 'utf8');

        if (content.includes('m3u_loader_iptv.js')) {
            console.log(`${fileName} already updated.`);
            return;
        }

        // Inject Gallery HTML
        if (content.includes('<div><menu-component></menu-componet></div><br>')) {
            content = content.replace(
                '<div><menu-component></menu-componet></div><br>',
                '<div><menu-component></menu-componet></div><br>' + htmlToInject
            );
        } else {
            console.warn(`Warning: Anchor for gallery not found in ${fileName}`);
        }

        // Inject Script
        if (content.includes('</body>')) {
            content = content.replace('</body>', scriptToInject);
        } else {
            console.warn(`Warning: </body> tag not found in ${fileName}`);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${fileName}`);
    } else {
        console.error(`File ${fileName} not found`);
    }
});
