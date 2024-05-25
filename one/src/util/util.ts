export function isObject(response) {
  return (
    typeof response === "object" &&
    !Array.isArray(response) &&
    response !== null
  );
}
