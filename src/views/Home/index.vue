<!-- 预览出现的框 -->
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
//       componentData: [
//         {
//           "animations": [],
//           "events": {},
//           "groupStyle": {},
//           "isLock": false,
//           "component": "AnchorPoint",
//           "label": "锚点",
//           "propValue": "你好",
//           "icon": "icon-lianjie",
//           "style": {
//             "rotate": 0,
//             "opacity": 1,
//             "width": 200,
//             "height": 28,
//             "fontSize": 14,
//             "fontWeight": 400,
//             "lineHeight": "",
//             "letterSpacing": 0,
//             "textAlign": "",
//             "color": "",
//             "top": 197.99999237060547,
//             "left": 286.99998474121094
//           },
//           "id": 0
//         },
//         {
//           "animations": [
//             { "label": "右逆时针旋转", "value": "rotateInDownRight", "pending": false, "animationTime": 1.07, "isLoop": true } ,
//           ], 
//           "events": {},
//           "groupStyle": {},
//           "isLock": false,
//           "component": "Picture",
//           "label": "图片",
//           "icon": "icon-charutupian",
//           "propValue": {
//             "url": "https://s1.ax1x.com/2022/08/10/v3s00O.jpg",
//             "flip": {
//               "horizontal":
//                 false,
//               "vertical": false
//             }
//           },
//           "style": {
//             "rotate": 0,
//             "opacity": 1,
//             "width": 300,
//             "height": 200,
//             "borderRadius": "",
//             "top": 149,
//             "left": 429
//           },
//           "id": 1
//         },
//         {
//           "animations": [],
//           "events": {},
//           "groupStyle": {},
//           "isLock": false,
//           "component": "Picture",
//           "label": "图片",
//           "icon": "icon-charutupian",
//           "propValue": {
//             "url": "https://s1.ax1x.com/2022/08/10/v3BzAH.jpg",
//             "flip": {
//               "horizontal": false,
//               "vertical": false
//             }
//           },
//           "style": {
//             "rotate": 0,
//             "opacity": 1,
//             "width": 300,
//             "height": 200,
//             "borderRadius": "",
//             "top": 652.1428575515747,
//             "left": 344.99998474121094
//           },
//           "id": 2
//         },
//         { "animations": [], "events": {}, "groupStyle": {}, "isLock": false, "component": "Picture", "label": "图片", "icon": "icon-charutupian", "propValue": { "url": "https://s1.ax1x.com/2022/08/10/v3BzAH.jpg", "flip": { "horizontal": false, "vertical": false } }, "style": { "rotate": 0, "opacity": 1, "width": 300, "height": 200, "borderRadius": "", "top": 924, "left": 293 }, "id": 3 },
//         { "animations": [], "events": {}, "groupStyle": {}, "isLock": false, "component": "VText", "label": "文字", "propValue": "我真棒", "icon": "icon-wenzi", "style": { "rotate": 0, "opacity": 1, "width": 200, "height": 28, "fontSize": 14, "fontWeight": 400, "lineHeight": "", "letterSpacing": 0, "textAlign": "", "color": "", "top": 71.14285278320312, "left": 208.99998474121094 }, "id": 4 },
//         { "animations": [], "events": { "alert": "你好" }, "groupStyle": {}, "isLock": false, "component": "VButton", "label": "按钮", "propValue": "按钮", "icon": "icon-anniuzu", "style": { "rotate": 90, "opacity": 1, "width": 100, "height": 34, "borderWidth": 1, "borderColor": "", "borderRadius": "", "fontSize": 14, "fontWeight": 400, "lineHeight": "", "letterSpacing": 0, "textAlign": "", "color": "rgba(30, 144, 255, 1)", "backgroundColor": "rgba(255, 120, 0, 1)", "top": 99.14285278320312, "left": 361 }, "id": 5 },
// { "animations": [], "events": {}, "groupStyle": {}, "isLock": false, "component": "Video", "label": "视频", "icon": "icon-shipinbofang", "propValue": { "url": "/media/cutePKQ.f5761f43.mp4", "flip": { "horizontal": false, "vertical": false } }, "style": { "rotate": 0, "opacity": 1, "width": 300, "height": 200, "borderRadius": "", "top": 230, "left": 138 }, "id": 6 },
//       ]
    }
  },
  methods: {
    getStyle,
    async getProject() {
      const templateid = window.location.href.split("?templateid=")[1];
      let result = await updateProject(templateid);
      if (result.code === 200) {
        console.log(result);
        this.componentData = JSON.parse(result.data.templatedata);
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
  top: 0;
  left: 0;
  position: fixed;
  // background:palegoldenrod;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;

  .canvas-container {
    width: calc(100% - 40px);
    height: calc(100% - 120px);
    overflow: auto;

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
