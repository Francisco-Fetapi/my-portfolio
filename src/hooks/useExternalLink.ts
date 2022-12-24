export type IExternalLinks = ReturnType<typeof useExternalLink>;

export default function useExternalLink() {
  return {
    javascript: "#javascript",
    html5: "#html5",
    css3: "#css3",
    programmingLogic: "#programmingLogic",
    visualg: "#visualg",
    fullStack: "#fullStack",
    algorithms: "#algorithms",
    prompt: "#prompt",
    lobito: "#lobito",
  };
}
