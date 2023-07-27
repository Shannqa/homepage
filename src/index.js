import "./style.css";
import roseLogo from "./rose_logo.svg";
import githubLogo from "./github-mark-light-32px.png";

// import logo from "logo.svg";
// need to update the homepage, probably make it in javascript instead of a static html file would be better, because currently the images won't load since they arent automatically copied to the dist folder

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}
document.querySelector('.theme-toggle').addEventListener('click', setTheme);

const indexRose = document.querySelector(".header-logo");
indexRose.src = roseLogo;

const indexGit = document.querySelector(".github");
indexGit.src = githubLogo;