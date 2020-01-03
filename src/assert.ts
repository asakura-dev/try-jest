export default function assert(value: boolean, message?: string) {
  if (value) {
    return;
  } else {
    throw new Error("Error: " + message);
  }
}
