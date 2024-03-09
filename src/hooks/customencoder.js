export function customEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/%20/g, "+");
}
