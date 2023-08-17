import {dayjs} from "element-plus";
import router from "@/assets/router/router";
import {watch,onBeforeUnmount} from "vue";
/*时间格式*/
export let formatter_datetime=function (row){
    const dateTime = dayjs(row);
    return dateTime.format('YYYY-MM-DD HH:mm:ss');
}
/*监控路由变化*/
export let watch_router=function (fun){
    watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
        fun(newValue,oldValue)
    },{ immediate: true })
}
/*socket*/
export let  ws_fun=function (fun, wsUrl) {
    let ws = null;
    var lockReconnect = false;
    createWebSocket(wsUrl);

    function createWebSocket(url) {
        try {
            if ('WebSocket' in window) {
                ws = new WebSocket(wsUrl)
            }
            initEventHandle();
        } catch (e) {
            reconnect(url);
            console.log(e);
        }
    }

    function initEventHandle() {
        ws.onerror = function () {
            reconnect(wsUrl);
            console.log("ws连接错误!");
        };
        ws.onopen = function () {
            heartCheck.reset().start();      //心跳检测重置
            console.log("ws连接成功!" + new Date().toLocaleString());
        };
        ws.onmessage = function (event) {    //如果获取到消息，心跳检测重置
            heartCheck.reset().start();      //拿到任何消息都说明当前连接是正常的
            if (!event.data.includes('ok')) {
                fun(event)
            }
        };

    }

    // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        ws.close();
    }

    function reconnect(url) {
        if (lockReconnect) return;
        lockReconnect = true;
        setTimeout(function () {
            //离开页面就不让重连了
            if(ws==undefined)return;
            createWebSocket(url);
            lockReconnect = false;
        }, 2000);
    }

    //心跳检测
    var heartCheck = {
        timeout: 1000,
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function () {
            clearTimeout(this.timeoutObj);
            clearTimeout(this.serverTimeoutObj);
            return this;
        },
        start: function () {
            var self = this;
            this.timeoutObj = setTimeout(function () {
                //这里发送一个心跳，后端收到后，返回一个心跳消息，
                //onmessage拿到返回的心跳就说明连接正常
                try {
                    if (ws.readyState == 1) {
                        ws.send('"keep"');
                        console.log("keep!")
                    }
                    self.serverTimeoutObj = setTimeout(function () {//如果超过一定时间还没重置，说明后端主动断开了
                        ws.close();     //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                    }, self.timeout)
                } catch (e) {

                }


            }, this.timeout)
        }
    }
    onBeforeUnmount(() => {
        ws.close();
        ws = undefined;
        clearTimeout(heartCheck.timeoutObj);
        clearTimeout(heartCheck.serverTimeoutObj);
    })
}
