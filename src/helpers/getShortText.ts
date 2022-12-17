export default function getShortText(text: string, limit: number) {
  const words = text.trim().split(" ");
  const isLarger = words.length > limit;
  let content = words.slice(0, limit).join(" ");
  if (isLarger) {
    content += "...";
  }
  return content;
}
