/**
 * 邮箱地址
 */
const email = 'zhouzefu@126.com';

/**
 * 站点描述
 */
const website_remark = '这是一个GitHub站点，项目通过Ngrok部署在本地Linux服务器';

/**
 * 项目状态
 */
const project_status = {
    /**
     * 规划中
     */
    planning: 0,
    /**
     * 开发中
     */
    developing: 1,
    /**
     * 测试中
     */
    testing: 2,
    /**
     * 运行中
     */
    running: 3
};

/**
 * 项目地址
 */
const projects = [{
    id: 1,
    title: '个人博客',
    remark: '我的个人博客技术文章等',
    status: project_status.planning
},{
    id: 2,
    title: '人才库',
    remark: '和世界大牛随时随地联系，找师傅、带徒弟',
    status: project_status.planning
},{
    id: 3,
    title: '江湖任务',
    remark: '随时随地在身边的江湖任务',
    status: project_status.planning
},{
    id:4,
    title:'电动车',
    remark:'电动车销售、充电、维修、转卖'
}];

/**
 * 页面加载时
 * @param {Event} res 
 * @returns 
 */
window.onload = res => initPageData(res);

/**
 * 初始化页面数据
 * @param {Event} res 
 */
function initPageData(res) { 
    initNavHader();
    $('email').innerHTML = email; 
    changeProjectStatus(project_status.running);
}
/**
 * 改变项目排序状态
 * @param {number} status 
 */
function changeProjectStatus(status){
    let list = [];
    projects.forEach(item=> item.status === status ? list.unshift(item) : list.push(item));
    this.buildProjectListHtml(list);
}
/**
 * 复制数据
 * @param {*} data 
 * @returns 
 */
function copy(data){
    return JSON.parse(JSON.stringify(data));
}
/**
 * 构建项目列表
 */
function buildProjectListHtml(projects) {
    projects.forEach((item, index) => {
        // 项目
        const projectItem = window.document.createElement('div');
        projectItem.classList =  'item';
        projectItem.onclick = res => onClickProject(item, index);
        // TOP
        const top = window.document.createElement('div');
        top.classList = 'top';
        // 状态
        const status =  window.document.createElement('div');
        status.classList =  `status status_${item.status}`; 
        top.appendChild(status);
        // 标题
        const title = window.document.createElement('div');
        title.classList = 'title';
        title.innerHTML = item.title;
        top.appendChild(title);
        projectItem.appendChild(top);
        // 简介
        const remark = window.document.createElement('div');
        remark.classList = 'remark';
        remark.innerHTML = item.remark;
        projectItem.appendChild(remark); 
        // 添加到列表
        $('project_list').appendChild(projectItem);
    });
}
/**
 * 项目点击事件
 * @param {{}} item 
 * @param {number} index 
 */
function onClickProject(item, index) { 
    console.log('item --------------->',item);
}
/**
 * 更新时间
 */
function updateDateTime() {
    setInterval(() => $('date_time').innerHTML = new Date().toLocaleString(), 1000);
}

/**
 * 通过ID获取DOM元素
 * @param {string} id 
 * @returns 
 */
function $(id) {
    return window.document.getElementById(id);
}