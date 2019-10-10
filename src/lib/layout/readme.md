### html
  ```
    <div class="ct-layout-container">
      <div class="cd-fixed-top">
          <div class="ct-top-logo">
            <a href="">ES后台管理</a>
          </div>
          <div class="ct-layout-navbar">
            <ul class="cd-tabs ct-layout-navbar_ul">
              <li class="active">
                <a data-href="user">用户</a>
              </li>
              <li>
                <a data-href="yy">运营</a>
              </li>
              <li>
                <a data-href="kc">课程</a>
              </li>
              <li>
            </ul>
          </div>
          <div class="ct-layout-person">
              <ul class="cd-clearfix ">
                <li class="ct-layout-person_center">
                  <a href="javascript:;">
                    <div class="ct-center_action avatar-wrapper">
                      <img class="cd-avatar cd-avatar-xs" src="http://dev.training.com/files/default/2018/04-27/141055fa9621754161.jpg" alt="">
                    </div>
                    <div class="ct-center_action ct-layout-admin_name">
                      <span>admin</span>
                    </div>
                  </a>
                </li>
                <li class="ct-layout-home">
                  <a href="">
                    <i class="icon cd-icon cd-icon-qq"></i>
                  </a>
                </li>
              </ul>
          </div>
      </div>
      <div class="cd-layout-main">
          <div class="cd-layout-sidebar">
            <div class="sidebar-title">
              <h5>标题</h5>
            </div>
            <ul class="cd-sidebar-container"></ul>
          </div>
          <div class="cd-layout-aside">
            <div class="cd-layout-aside_bread">
                <ul class="cd-breadcrumb cd-breadcrumb-o">
                  <li>
                    <a href="javascript:;">父父级</a>
                  </li>
                  <li>
                    <a href="javascript:;">父级</a>
                  </li>
                  <li class="active">子级</li>
              </ul>
            </div>
              <div class="cd-layout-adside_content"></div>
          </div>
      </div>
    </div> 
   ```
  ### js
  ```
  import layout from './lib/layout/index.js' ;
  let data ={
    title:'用户',
    data:[
      {
        name: '用户管理',
        id: '11',
        link: '',
        grade: 0,
        nodes: [{
          name: '用户管理',
          id: '11',
          link: '',
          grade: 1,
          nodes: [{
            name: '用户管理',
            id: '11',
            link: 'user',
            grade: 2,
            nodes: []
          }]
        }, {
          name: '在线用户',
          id: '11',
          link: '',
          grade: 1
        }, {
          name: '登陆日志',
          id: '11',
          link: '',
          grade: 1,
          nodes: []
        }]
      }, {
        name: '数据中心',
        id: '11',
        link: '',
        grade: 0,
        nodes: [{
          name: '数据中心',
          id: '11',
          link: '',
          grade: 1,
          nodes: [{
            name: '数据中心',
            grade: 2,
            link: '',
            nodes: []
          }]
        }, {
          name: '数据中心',
          link: '',
          grade: 1
        }]
      }, {
        name: '教学库',
        grade: 0,
        nodes: []
      }, {
        name: '线上考试',
        grade: 0,
        nodes: []
      }, {
        name: '问卷调查',
        grade: 0,
        nodes: [{
          name: '问卷调查1',
          grade: 1
        }]
      }
    ]
  }
    
  layout({data});
```