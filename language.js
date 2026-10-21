// Only the root entry chooses a language; explicit /en/ and /zh/ URLs stay put.
let preferredLanguage;
try {
  preferredLanguage = localStorage.getItem("site-language");
} catch {
  // Browsing with storage disabled still supports language detection.
}
if (preferredLanguage !== "en" && preferredLanguage !== "zh") {
  preferredLanguage = (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
}
location.replace(`/${preferredLanguage}/${location.search}${location.hash}`);
