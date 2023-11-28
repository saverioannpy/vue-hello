'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Messaggio di prova"
        }
    }
}).mount("#messaggio-vue-js")