<template>
  <button :disabled="disabled"
          :class="className"
          :value="value">
    <span v-if="value">{{value}}</span>
    <slot v-else></slot>
  </button>
</template>
<script>
export default {
  name: 'pax-button',
  props: {
    type: {
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    },
    inline: {
      type: Boolean,
      default: false
    },
    size: {
      default: 'medium'
    }
  },
  data () {
    return {}
  },
  computed: {
    className () {
      let t = '';
      let type = this.type.toLowerCase()
      type = ' pax-btn-' + type
      let size = this.size.toLowerCase()
      // debugger
      size = ' pax-btn-' + size
      if (this.inline) {
        t += ' pax-btn-inline';
      } else {
        t += ' pax-btn-block';
      }
      return t + type + size
    }
  },
  methods: {}
}
</script>
<style lang="less">
.pax-btn {
  &-small {
    min-width: 60px;
    height: 28px;
  }
  &-medium {
    min-width: 76px;
    height: 32px;
  }
  &-large {
    min-width: 84px;
    height: 42px;
  }
  &-primary {
    background-color: #eb8a3f;
  }
  &-warning {
    background-color: red;
  }
  &-default {
    border: 1px solid #eb8a3f;
  }
  &-block {
    display: block;
    width: 100%;
  }
  &-inline {
    display: inline-block;
  }
}
</style>
