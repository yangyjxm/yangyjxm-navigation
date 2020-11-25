const SERVE = true; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "yangyjxm-nav"; // 个人网站名字

const BLOG_URL = "https://blog.esunr.xyz"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/yangyjxm"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://www.esunr.xyz:8080/api/utils/bingPic"; // 背景图片url，留空默认为必应每日图片

const RECORD_NUMBER = "Copyright ©2020 Powered by yangyjxm "; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.com/",
    icon: "",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: "",
  },
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响",
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const SORT_DATA = [
  { sortId: 1, title: "海蓝" },
  // { sortId: 2, title: "智慧政务" },
  // { sortId: 3, title: "后端开发" },
  // { sortId: 3, title: "前端开发" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const PLAYGROUND_DATA = [
  {
    pageId: 2,
    sortId: 1,
    title: "营养诊疗系统",
    subtitle: "PC端",
    url: "http://111.229.251.142/login",
    icon: "http://img.cdn.esunr.xyz/church.png",
  },
  {
    pageId: 4,
    sortId: 1,
    title: "点餐平台",
    subtitle: "PC端",
    url: "http://111.229.251.142:8081/login",
    icon: "http://img.cdn.esunr.xyz/Wolf.png",
  },
  {
    pageId: 5,
    sortId: 1,
    title: "点餐平台",
    subtitle: "先找羊添加体验权限后使用微信扫描二维码",
    url: "",
    icon: "http://img.cdn.esunr.xyz/Flappy_Bird_icon.png",
    qrCodeUrl: "http://img.cdn.esunr.xyz/Flappy_Bird_icon.png",
  },
  {
    pageId: 8,
    sortId: 1,
    title: "蓝湖",
    subtitle: "高效的产品设计协作平台",
    url: "https://lanhuapp.com/web/#/item?tid=169c25e5-976f-4637-a236-239316711a17&fid=all",
    icon: "http://img.cdn.esunr.xyz/video.png",
  },
  {
    pageId: 9,
    sortId: 1,
    title: "YApi",
    subtitle: "高效、易用、功能强大的 api 管理平台",
    url: "http://106.75.175.39:3001/login",
    icon: "http://img.cdn.esunr.xyz/%E9%92%B1%E8%A2%8B.png",
  },
  // {
  //   pageId: 10,
  //   sortId: 1,
  //   title: "FlappyBird",
  //   subtitle: "像素鸟",
  //   url: "https://www.esunr.xyz/git/FlappyBird/index.html",
  //   icon: "http://img.cdn.esunr.xyz/Flappy_Bird_icon.png",
  // },
  // {
  //   pageId: 11,
  //   sortId: 1,
  //   title: "QiniuManager（β）",
  //   subtitle: "第三方七牛云图床管理器",
  //   url: "http://esunr.xyz:9091/",
  //   icon: "http://study.esunr.xyz/1577670913150.png",
  // },
  // {
  //   pageId: 12,
  //   sortId: 1,
  //   title: "Easy Mock",
  //   subtitle: "可视化API Mock平台",
  //   url: "http://esunr.xyz:7300/",
  //   icon: "http://study.esunr.xyz/1579252057779.png",
  // },
  // {
  //   pageId: 13,
  //   sortId: 1,
  //   title: "Easy Uploader",
  //   subtitle: "简易文件上传服务",
  //   url: "http://esunr.xyz:9092",
  //   icon: "http://study.esunr.xyz/1580651895592.png",
  // },
  // {
  //   pageId: 14,
  //   sortId: 1,
  //   title: "论文助手",
  //   subtitle: "文献引用格式生成工具",
  //   url: "http://esunr.xyz:9093",
  //   icon: "http://study.esunr.xyz/1585640847175.png",
  // },
];

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER,
  SORT_DATA,
  PLAYGROUND_DATA,
};
