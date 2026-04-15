<template>
  <span class="mac-icon-button">
    <i class="icon red"></i>
    <i class="icon yellow"></i>
    <i class="icon green"></i>
  </span>
</template>

<style lang="scss" scoped>
.mac-icon-button {
  display: flex;
  align-items: center;
}
.mac-icon-button .icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}

.mac-icon-button .icon.red {
  background-color: #ff5f56;
}

.mac-icon-button .icon.yellow {
  background-color: #ffbd2e;
}

.mac-icon-button .icon.green {
  background-color: #27c93f;
}
</style>
