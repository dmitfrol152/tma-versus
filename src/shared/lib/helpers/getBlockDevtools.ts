export function getBlockDevtools() {
  const devMode = import.meta.env.DEV;

  if (!devMode) {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("keydown", (e) => {
      const isF12 = e.key === "F12";
      const isDevShortcut =
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase());
      const isViewSource = e.ctrlKey && e.key.toLowerCase() === "u";

      if (isF12 || isDevShortcut || isViewSource) {
        e.preventDefault();
      }
    });
  }
}
