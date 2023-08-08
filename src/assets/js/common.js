import {dayjs} from "element-plus";

export let formatter_datetime=function (row){
    const dateTime = dayjs(row);
    return dateTime.format('YYYY-MM-DD HH:mm:ss');
}