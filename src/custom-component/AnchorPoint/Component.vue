<template>
    <div class="v-anchor preview">
        <a 
            :style="{ verticalAlign: element.style.verticalAlign }" 
            v-html="localelement.propValue"
            href="https://www.iconfont.cn"
            target="_blank"
        ></a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

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
            // 这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的data prop 并将这个本地 prop 当作其初始值：
            localpropValue: this.propValue,
            localelement: this.element,
        }
    },
    computed: {
        ...mapState('EditPage', [
            'editMode',
        ]),
    },
}
</script>

<style lang="less" scoped>

.v-anchor {
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
    a{
        color:blue;
    }
}
</style>
