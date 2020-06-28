<template>
    <div>
        <pax-navbar title="列表单元格">
            <router-link to="/index"
                         slot="left">
                <pax-icon name="back"></pax-icon>
            </router-link>
            <span slot="right">
                <pax-icon name="setting"
                          color="red"></pax-icon>
                <pax-icon name="trash"
                          color="#000"></pax-icon>
            </span>
        </pax-navbar>
        <pax-cell islink
                  title="薛之谦"
                  value="认真的血"
                  to="/index"></pax-cell>
    </div>
</template>
