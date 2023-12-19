/**
 * 邮箱地址
 */
const my_email = 'zhouzefu@126.com';

/**
 * 项目状态
 */
const project_status = {
    /**
     * 规划中
     */
    planning: {
        state: 0,
        title: '规划中'
    },
    /**
     * 开发中
     */
    developing: {
        state: 1,
        title: '开发中'
    },
    /**
     * 测试中
     */
    testing: {
        state: 2,
        title: '测试中'
    },
    /**
     * 运行中
     */
    running: {
        state: 3,
        title: '运行中'
    }
};

/**
 * 项目地址
 */
const projects = [{
    title: '个人博客',
    remark: '我的个人博客技术文章等',
    status: project_status.planning
}, {
    title: '人才库',
    remark: '和世界大牛随时随地联系，找师傅、带徒弟',
    status: project_status.planning
}, {
    title: '江湖任务',
    remark: '随时随地在身边的江湖任务',
    status: project_status.planning
}, {
    title: '电动车',
    remark: '电动车销售、充电、维修、转卖',
    status: project_status.planning
}, {
    title: '随机字符串',
    remark: '随机将字符串、随机密码',
    status: project_status.running,
    url: '/html/random_char.html'
}];

/**
 * 显示Toast消息
 * @param {string} message
 * @param {number} time 单位秒
 */
function showToast(message, time) {
    // toast 列表
    const toastEl = $('toast_list') || window.document.createElement('div');
    toastEl.id = 'toast_list';
    toastEl.classList = 'toast_list';
    // 消息
    const messageEl = window.document.createElement('div');
    messageEl.classList = 'toast';
    messageEl.innerHTML = message;
    // 装载
    toastEl.appendChild(messageEl);
    !$('toast_list') && window.document.body.append(toastEl);
    // 定时消除
    setTimeout(() => hideToast(messageEl), time || 3000);
}

/**
 * 隐藏Toast
 * @param {HTMLDivElement} toastEl
 * @returns
 */
function hideToast(toastEl) {
    const toastListEl = $('toast_list');
    if (!toastListEl) return;
    toastListEl.childElementCount === 1 ? window.document.body.removeChild(toastListEl) : toastListEl.removeChild(toastEl);
}

/**
 * 显示model
 * @param {string} message
 * @param {Function} success
 * @param {Function} fail
 */
function showModel(message, success, fail) {
    // model弹框
    const modelEl = window.document.createElement('div');
    modelEl.classList = ['mode_box'];
    modelEl.style.width = `${window.innerWidth}px`;
    modelEl.style.height = `${window.innerHeight}px`;
    // 展示容器
    const containerEl = window.document.createElement('div');
    containerEl.classList = 'container';
    // 消息
    const messageEl = window.document.createElement('div');
    messageEl.classList = 'message';
    messageEl.innerHTML = message;
    // 按钮列表
    const btnList = window.document.createElement('div');
    btnList.classList = 'btn_list';
    // 取消按钮
    const btnCencel = window.document.createElement('div');
    btnCencel.classList = 'btn btn_cancel';
    btnCencel.innerHTML = '取消';
    btnCencel.onclick = res => typeof fail === 'function' ? fail(res) : hideModel(modelEl);
    // 确定按钮
    const btnConfirm = window.document.createElement('div');
    btnConfirm.classList = 'btn btn_confirm';
    btnConfirm.innerHTML = '确定';
    btnConfirm.onclick = res => typeof success === 'function' ? success(res) : hideModel(modelEl);
    // 装载
    containerEl.appendChild(messageEl);
    btnList.appendChild(btnCencel);
    btnList.appendChild(btnConfirm);
    containerEl.appendChild(btnList);
    modelEl.appendChild(containerEl);
    window.document.body.appendChild(modelEl);
}

/**
 * 隐藏model
 * @param {HTMLDivElement} modelEl
 */
function hideModel(modelEl) {
    window.document.body.removeChild(modelEl);
}

/**
 * 获取当前主机名称
 * @returns {string}
 */
function getHostname() {
    return window.location.hostname;
}

/**
 * 是否开发环境
 * @returns {boolean}
 */
function isDev() {
    return getHostname() === 'localhost';
}

/**
 * 是否为空
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
    if (typeof value === 'string') return value.replace(/\s+/g, '').length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;
    return value === undefined || value === null;
}

/**
 * 是否不为空
 * @param value
 * @returns {boolean}
 */
function isNoEmpty(value) {
    return !isEmpty(value);
}

/**
 * 跳转页面
 * @param url
 */
function toPage(url) {
    if (isEmpty(url)) return showToast('当前项目未运行')
    window.open(url, '_blank');
}

/**
 * 时间回调函数
 * @param _callback
 * @param data
 */
function callback(_callback,data){
    typeof _callback === 'function' && _callback(data);
}


/**
 * 通过ID获取DOM元素
 * @param {string} id
 * @returns
 */
function $(id) {
    return window.document.getElementById(id);
}

/**
 * 构建标签元素
 * @param {string} tag
 * @returns {*}
 */
function createEl(tag){
    return window.document.createElement(tag);
}
