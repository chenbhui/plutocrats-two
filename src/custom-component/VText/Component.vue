<template>
    <div class="v-text preview">
        <div :style="{ verticalAlign: element.style.verticalAlign }" v-html="localelement.propValue"></div>
    </div>
</template>

<script>

export default {
    props: {
        propValue: {
            type: String,
            require: true,
            default: '',
        },
        element: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            localpropValue: this.propValue,
            localelement: this.element,
        }
    },
}
</script>

<style lang="less" scoped>
.v-text {
    width: 100%;
    height: 100%;
    display: table;

    div {
        display: table-cell;
        width: 100%;
        height: 100%;
        outline: none;
        word-break: break-all;
        padding: 4px;
    }

    .canEdit {
        cursor: text;
        height: 100%;
    }
}

.preview {
    user-select: none;
}
</style>
