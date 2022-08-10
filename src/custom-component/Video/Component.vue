
<template>
    <div style="overflow: hidden;">
        <video src="@/assets/video/cutePKQ.mp4" controls width="100%" height="100%"></video>
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => { },
        },
        element: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            width: 0,
            height: 0,
            video: null,
            canvas: null,
            ctx: null,
            isFirst: true,
        }
    },
}
</script>
<style lang="less" scoped>

</style>
