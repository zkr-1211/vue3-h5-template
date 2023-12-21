import { createPinia } from "pinia";
import useLoginStore from "./modules/login";
const store = createPinia();
export { useLoginStore };
export { store };
