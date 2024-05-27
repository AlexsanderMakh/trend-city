
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { State } from './store/types';  // adjust the path if necessary

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
