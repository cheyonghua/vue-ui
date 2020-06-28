<template>
    <div>
        <pax-navbar title="折叠菜单">
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
        <pax-according>
            <pax-according-item title="李白">
                <pax-cell islink
                          title="薛之谦"
                          value="认真的血"></pax-cell>
            </pax-according-item>
        </pax-according>
        <pax-according>
            <pax-according-item title="杜甫">
                <pax-cell islink
                          title="薛之谦"
                          value="认真的雪"></pax-cell>
                <pax-cell islink
                          title="薛之谦"
                          value="认真的雪"></pax-cell>
                <pax-cell islink
                          title="薛之谦"
                          value="认真的雪"></pax-cell>
            </pax-according-item>
        </pax-according>
    </div>
</template>
