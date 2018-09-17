<template>
  <button :class="['m-button', sizeClass]" :style="{backgroundColor: bgColor}" @click="handleClick">
    <label :style="{color: txtColor}">
      <slot></slot>
    </label>
  </button>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#f6f8fa"
    },
    txtColor: {
      type: String,
      default: "#656b79"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  computed: {
    sizeClass() {
      if(this.size === 'normal') {
        return 'btn-normal'
      } else if (this.size === 'small') {
        return 'btn-small'
      } else if (this.size === 'large') {
        return 'btn-large'
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.m-button {
  position: relative;
  text-align: center;
  padding: 0 24px;
  border-radius: 8px;
  box-shadow: 0 0 1px #b8bbbf;
  overflow: hidden;
}
.btn-small {
  display: inline-block;
  height: 66px;
  font-size: 28px;
}
.btn-large {
  display: block;
  width: 100%;
  height: 82px;
  font-size: 36px;
}
.btn-normal {
  display: inline-block;
  height: 82px;
  font-size: 36px;
}
</style>
