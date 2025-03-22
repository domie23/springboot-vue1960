const base = {
    get() {
        return {
            url : "http://localhost:8080/yinyuebofangqi/",
            name: "yinyuebofangqi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yinyuebofangqi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "音乐播放器"
        } 
    }
}
export default base
