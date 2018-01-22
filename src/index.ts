import {iceToPlain, iceFromPlain, ICE_TYPE_KEY} from 'ice-to-plain';
import {EnhancerOptions} from 'redux-devtools-extension';

export const enhancerOptions = {
  serialize: {
    replacer(key: any, value: any) {
      const plain = iceToPlain(value, false);

      if (plain != null && plain[ICE_TYPE_KEY]) {
        const {[ICE_TYPE_KEY]: __serializedType__, ...data} = plain;

        return {
          __serializedType__,
          data,
        };
      }

      return value;
    },
    reviver(key: any, value: any) {
      if (value != null && value.__serializedType__) {
        return iceFromPlain({
          [ICE_TYPE_KEY]: value.__serializedType__,
          ...value.data,
        }, false);
      }

      return value;
    },
  },
} as EnhancerOptions;