
<template>
    <div class="video-box" style="overflow: hidden;" ref="videoBox">
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
    mounted() {
        const { vertical, horizontal } = this.propValue.flip;
        if (vertical) {
            if (horizontal) {
                this.$refs.videoBox.style.transform = " scale(-1,-1)";
            } else {
                this.$refs.videoBox.style.transform = " scale(-1,1)";
            }
        } else {
            if (horizontal) {
                this.$refs.videoBox.style.transform = " scale(1,-1)";
            } else {
                this.$refs.videoBox.style.transform = " scale(1,1)";
            }
        }
    }
}
</script>
<style lang="less" scoped>


.video-box {
    position: relative;
    width: 100%;
    overflow: hidden;

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
}
</style>
