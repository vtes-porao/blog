const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

const DIR_SOURCE = path.join(__dirname, "..", "blog");
const DIR_TRANSFORMED = path.join(__dirname, "..", "transformed");
const FILENAME_MDX = "index.mdx";
const REGEX_FRONTMATTER = /^(---[\S\s]+---)([\S\s]+)$/;
const REGEX_CARD = /\[\[([\w\s']+)\]\]/g;

function processDirectory(dirName) {
  /**
   * Given a directory, apply custom preprocessing to it
   * and copy it to a useful directory
   */

  // Copy dir to transformed directory
  const dirSource = path.join(DIR_SOURCE, dirName);
  const dirTransformed = path.join(DIR_TRANSFORMED, dirName);

  fs.cpSync(dirSource, dirTransformed, { recursive: true });

  const filepathMdx = path.join(dirTransformed, FILENAME_MDX);
  let body = fs.readFileSync(filepathMdx, { encoding: "utf-8", flag: "r" });

  if (!REGEX_CARD.test(body)) return;

  // Add imports after frontmatter
  body = body
    .replace(
      REGEX_FRONTMATTER,
      `$1\n\nimport Card from '../../src/components/card.js';\n\n$2`
    )
    .replace(REGEX_CARD, '<Card name="$1"/>');

  const newFilePath = path.join(dirTransformed, FILENAME_MDX);

  fs.writeFileSync(newFilePath, body);
}

function main(args) {
  const watch = args.watch === true || args.W === true;
  console.log('Transforming files...')

  // Remake transformed directory
  if (fs.existsSync(DIR_TRANSFORMED)) {
    fs.rmSync(DIR_TRANSFORMED, { recursive: true });
  }

  fs.mkdirSync(DIR_TRANSFORMED, { recursive: true });

  // Process all blog posts in the source directory
  fs.readdirSync(DIR_SOURCE).forEach((blogPostName) => {
    processDirectory(blogPostName);
  });

  console.log('Finished first transformation.')

  // Then, watch for file changes
  if (watch) {
    console.log('Watching files...')
    fs.watch(DIR_SOURCE, { recursive: true }, (event, filename) => {
      const blogPostName = filename.match(/^([^\/\\]*)[\/\\]*/)[1];
      console.log(`Blog post ${blogPostName} has been modified - ${event}`);
      processDirectory(blogPostName);
    });
  }
}

main(argv);
