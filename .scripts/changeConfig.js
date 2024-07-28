const fs = require('fs');
const path = require('path');

function main([fullRepo, umbrella, prNum]) {
    const [org, repo] = fullRepo.split('/');
    const siteUrl = `https://${org}.github.io/${repo}/${umbrella}/pr-${prNum}`;

    const {pathname, origin} = new URL(siteUrl)


    const filepath = path.join(__dirname,'..','gatsby-config.js')

    let file = fs.readFileSync(filepath, { encoding: "utf-8", flag: "r" });
    file = file.replace(/siteUrl:.*/,`siteUrl: "${origin}",`)
    file = file.replace(/pathPrefix:.*/,`pathPrefix: "${pathname}",`)

    fs.writeFileSync(filepath, file);
}



main(process.argv.slice(2));
