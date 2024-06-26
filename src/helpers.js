export function splitText(text, maxLength) {
  let sentences = text.split(". ");
  let chunks = [];
  let currentChunk = "";

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    if (currentChunk.length + sentence.length + 1 <= maxLength) {
      currentChunk += (currentChunk.length ? ". " : "") + sentence;
    } else {
      if (currentChunk.length) {
        chunks.push(currentChunk.trim() + ".");
        currentChunk = sentence;
      } else {
        // Если предложение само по себе больше maxLength, просто добавляем его как отдельный chunk
        chunks.push(sentence.trim() + ".");
        currentChunk = "";
      }
    }
  }

  if (currentChunk.length) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}
