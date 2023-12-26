import { createPinia } from 'pinia';
import useLoginStore from './modules/login';
import useDictStore from './modules/system';
const store = createPinia();
export { useLoginStore, useDictStore };
export { store };
