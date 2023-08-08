import {dayjs} from "element-plus";
import router from "@/assets/router/router";
import {watch} from "vue";

export let formatter_datetime=function (row){
    const dateTime = dayjs(row);
    return dateTime.format('YYYY-MM-DD HH:mm:ss');
}
export let watch_router=function (fun){
    watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
        fun(newValue,oldValue)
    },{ immediate: true })
}

