import "./input.css";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const element = document.getElementById("developer-title");
if (element) {
  gsap.fromTo(
    element,
    { text: "D------r" }, // Start with scrambled text
    {
      text: "Developer", // End with original text
      duration: 2,
      ease: "power1.inOut",
    }
  );
}
