<template>
  <div class="loading-wrap">
    <div class="loading">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" class="path"></circle>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .loading {
    width: 80px;
    height: 80px;
    .circular {
      height: 100%;
      width: 100%;
      transform-origin: center center;
      animation: rotate 2s linear infinite;
      .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}

@keyframes color {
  0%,
  100% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
</style>
