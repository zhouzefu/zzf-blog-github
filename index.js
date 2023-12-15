/**
 * 邮箱地址
 */
const my_email = 'zhouzefu@126.com';

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
    id: 1,
    title: '个人博客',
    remark: '我的个人博客技术文章等',
    status: project_status.planning
}, {
    id: 2,
    title: '人才库',
    remark: '和世界大牛随时随地联系，找师傅、带徒弟',
    status: project_status.planning
}, {
    id: 3,
    title: '江湖任务',
    remark: '随时随地在身边的江湖任务',
    status: project_status.planning
}, {
    id: 4,
    title: '电动车',
    remark: '电动车销售、充电、维修、转卖',
    status: project_status.planning
}];

/**
 * 鸡汤
 */
const mottos = [
    '空山不见人，但闻人语响。返景入深林，复照青苔上。-- 王维（唐）《鹿柴》',
    '西塞山前白鹭飞，桃花流水鳜鱼肥。青箬笠，绿蓑衣，斜风细雨不须归 -- 李白（唐）《赠汪伦》',
    '生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。 -- 李清照（宋）《夏日绝句》',
    '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。-- 王之涣（唐）《登鹳雀楼》',
    '牧童骑黄牛，歌声振林樾。意欲捕鸣蝉，忽然闭口立。-- 袁枚（清）《所见》',
    '众鸟高飞尽，孤云独去闲。相看两不厌，只有敬亭山。 -- 李白（唐）《独坐敬亭山》'
];

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
    initNavHaderHtml();
    initMottosHtml();
    initStatusTipHtml();
    initProjectListHtml();
}
/**
 * 初始格言
 */
function initMottosHtml() {
    const mottoEl = create('div');
    mottoEl.classList = 'motto'; 
    mottoEl.innerHTML = 'zhouzefu@126.com';
    $('motto_box').appendChild(mottoEl);
    setInterval(()=>  mottoEl.innerHTML = getRandomMotto(mottos),5000)
}

/**
 * 获取随机名言
 * @param {[]} mottos 
 * @returns 
 */
function getRandomMotto(mottos) {
    return mottos[Math.floor(Math.random() * mottos.length)];
}


/**
 * 创建标签元素
 * @param {string} tag 
 * @returns 
 */
function create(tag) {
    return window.document.createElement(tag);
}

/**
 * 初始化项目提示
 */
function initStatusTipHtml() {
    for (const key in project_status) {
        // 提示Item
        const tipItemEl = window.document.createElement('div');
        tipItemEl.classList = 'item';
        // 标志
        const stateEl = window.document.createElement('div');
        stateEl.classList = `status status_${project_status[key].state}`;
        tipItemEl.appendChild(stateEl);
        // 提示文本
        const titleEl = window.document.createElement('div');
        titleEl.classList = 'title';
        titleEl.innerHTML = project_status[key].title;
        tipItemEl.appendChild(titleEl);
        // 加入列表
        $('status_list').appendChild(tipItemEl);
    }
}

/**
 * 初始化项目列表HTML
 */
function initProjectListHtml() {
    buildProjectListHtml(projects);
}
/**
 * 构建头部导航HTML
 */
function initNavHaderHtml() {
    // 邮箱
    const emailEl = window.document.createElement('div');
    emailEl.classList = 'email';
    emailEl.innerHTML = `泽富姓周（${my_email}）`;
    emailEl.onclick = res => sendEmail(my_email, '来自GitHub/Blog站点的小伙伴', '你好~');
    // 时间
    const timeEl = window.document.createElement('div');
    timeEl.classList = 'date_time';
    timeEl.innerHTML = '--:--:--';
    setInterval(() => timeEl.innerHTML = new Date().toLocaleString(), 1000);
    // 装载
    const navHeaderEl = $('nav_hader')
    navHeaderEl.appendChild(emailEl);
    navHeaderEl.appendChild(timeEl);
}
/**
 * 发送邮件
 * @param {string} to 
 * @param {string} subject 
 * @param {string} body 
 */
function sendEmail(to, subject, body) {
    window.open(`mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
}
/**
 * 改变项目排序状态
 * @param {number} status 
 */
function changeProjectStatus(status) {
    let list = [];
    projects.forEach(item => item.status === status ? list.unshift(item) : list.push(item));
    return list;
}
/**
 * 复制数据
 * @param {*} data 
 * @returns 
 */
function copy(data) {
    return JSON.parse(JSON.stringify(data));
}
/**
 * 构建项目列表
 */
function buildProjectListHtml(projects) {
    projects.forEach((item, index) => {
        // 项目
        const projectItem = window.document.createElement('div');
        projectItem.classList = 'item';
        projectItem.onclick = res => onClickProject(item, index);
        // TOP
        const topEl = window.document.createElement('div');
        topEl.classList = 'top';
        // 状态
        const statusEl = window.document.createElement('div');
        statusEl.classList = `status status_${item.status.state}`;
        // 标题
        const titleEl = window.document.createElement('div');
        titleEl.classList = 'title';
        titleEl.innerHTML = item.title;
        // 简介
        const remarkEl = window.document.createElement('div');
        remarkEl.classList = 'remark';
        remarkEl.innerHTML = item.remark;
        // 装载
        topEl.appendChild(statusEl);
        topEl.appendChild(titleEl);
        projectItem.appendChild(topEl);
        projectItem.appendChild(remarkEl);
        $('project_list').appendChild(projectItem);
    });
}
/**
 * 项目点击事件
 * @param {{}} item 
 * @param {number} index 
 */
function onClickProject(item, index) {
    if (item.status.state === project_status.running.state) showToast('服务配置中');
    else showToast(item.status.title);
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