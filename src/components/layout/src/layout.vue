<template>
     <section id="layout">
        <slot name="top"></slot>
        <section class="cyh-layout-section">
            <slot></slot>
        </section>
        <slot name="bottom"></slot>
     </section>
</template>
<script>
export default {
    name:"cyh-layout"
}
</script>

<style lang="less" scoped>
#layout{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    .cyh-layout-section{
        flex:1;
        overflow-y: auto
    }
}
</style>

