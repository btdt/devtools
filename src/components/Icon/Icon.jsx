import { defineComponent } from 'vue';
import types from './types.jsx';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      default: undefined,
    },
  },
  setup(props) {
    return () => types[props.type];
  },
});
