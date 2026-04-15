<template>
  <div class="layout-home">
    <div class="home-container">
      <div class="home-header">
        <MacIconButton></MacIconButton>
        <a href="https://github.com/gausstool/diff-tools">Github</a>
      </div>
      <div class="home-main">
        <div class="tool-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MacIconButton from '@/components/MacIconButton.vue';
</script>

<style lang="scss">
.layout-home {
  position: relative;

  .layout-console {
    height: 100%;
  }

  .layout-no-console {
    height: 100%;
  }
}
</style>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background-color: #272822;
  overflow: hidden;
  box-shadow: 1px 1px 10px #1e1e1e;
  overflow: hidden;
}

.home-header {
  font-family: monospace;
  padding: 0 12px;
  line-height: 30px;
  height: 30px;
  color: #cccccc;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
}

.home-main {
  flex: 1;
  height: calc(100% - 30px);
  display: flex;
}
.tool-container {
  height: 100%;
  width: 100%;
}
</style>
