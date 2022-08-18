<template>
  <div ref="container" class="bg">
    <div class="canvas-container">
        <ComponentWrapper v-for="(item, index) in componentData" :key="index" :config="item" />
    </div>
  </div>
</template>

<script>
import { getStyle } from '@/utils/style';
import ComponentWrapper from '@/components/ComponentWrapper'
import { updateProject } from "@/api/index"
export default {
  components: { ComponentWrapper },
  data() {
    return {
      componentData:[],
    }
  },
  methods: {
    getStyle,
    async getProject() {
      const templateid = window.location.href.split("?templateid=")[1];
      let result = await updateProject(templateid);
      if (result.code === 200) {
        console.log(result);
        const templatedata = JSON.parse(result.data.templatedata);
        console.log(templatedata);
        this.componentData = templatedata.canvasData;
        this.$refs.container.style.background = templatedata.canvasStyle.background;
        this.$refs.container.style.height = templatedata.canvasStyle.height+'px';
        this.$refs.container.style.width= templatedata.canvasStyle.width+'px';
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data));
      }
    },
  },
  mounted() {
    this.getProject()
  }
}
</script>

<style lang="less" scoped>

.bg {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .canvas-container {
   /*  width: calc(100% - 40px);
    height: calc(100% - 120px);
    overflow: auto; */
    width: 100%;
    height: 100%;

    .canvas {
      background: #fff;
      position: relative;
      margin: auto;
    }
  }

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
