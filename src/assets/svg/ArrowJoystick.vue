<template>
  <svg
    width="42"
    height="27"
    viewBox="0 0 42 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L19.4148 24.9392C20.2153 25.9799 21.7847 25.98 22.5852 24.9392L41 1"
      :stroke="color"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ArrowJoystick",
  props: {
    color: {
      type: String,
      default: "black",
    },
  },
};
</script>
