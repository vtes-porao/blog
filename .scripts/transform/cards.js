const REGEX_FRONTMATTER = /^(---[\S\s]+---)([\S\s]+)$/;
const REGEX_CARD = /\[\[([\w\s']+)\]\]/g;

// Convert tokens into cards
function transformCards(body) {
  if (!REGEX_CARD.test(body)) return body;

  return body
    .replace(
      REGEX_FRONTMATTER,
      `$1\n\nimport Card from '../../src/components/card.js';\n\n$2`
    )
    .replace(REGEX_CARD, '<Card name="$1"/>');
}

module.exports = { transformCards };
