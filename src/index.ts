import { createApp } from "vue";
import SFCButton from "./SFCButton.vue";
import SButton from "./button";
import SmartyUI from "./entry";

createApp({
    template:`
        <div>
            <SButton>普通按钮</SButton>
        </div>
    `
})
.use(SmartyUI)
.mount("#app");