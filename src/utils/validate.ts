export function validateNotionKey(key: string) {
  const trimmed = key.trim();

  if (!trimmed.length) {
    throw new Error("NOTION_API_KEY cannot be empty.");
  }

  if (!trimmed.startsWith("secret_")) {
    throw new Error(
      "Invalid NOTION_API_KEY. Expected a key starting with 'secret_'."
    );
  }

  return trimmed;
}