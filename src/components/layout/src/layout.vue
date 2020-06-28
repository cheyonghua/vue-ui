<template>
     <div id="layout">
        <slot name="top"></slot>
        <section class="pax-layout-section">
            <slot></slot>
        </section>
        <slot name="bottom"></slot>
     </div>
</template>
<script>
export default {
    name:"pax-layout"
}
</script>

<style lang="less" scoped>
#layout{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    padding-left: 20px;
    padding-right:20px;
    .pax-layout-section{
        flex:1;
        overflow-y: auto
    }
}
</style>

