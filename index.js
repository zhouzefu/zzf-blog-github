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
const project_phase = {
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
    status: project_phase.planning
}]

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
    console.log('res ------------->',res);
    $('email').innerHTML = email;
}

/**
 * 通过ID获取DOM元素
 * @param {string} id 
 * @returns 
 */
function $(id) {
    return window.document.getElementById(id);
}