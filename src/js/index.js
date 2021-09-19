import "../css/index.css";
import { hookUpNavigation, renderPath } from './lib/startup'

document.addEventListener("DOMContentLoaded", () => {
      hookUpNavigation()
      renderPath()
})