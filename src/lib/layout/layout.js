import Component from '../../js/component';

class Layout extends Component {
  constructor(props) {
    super();

    this.options = {
      el:'.cd-sidebar-container',
      ctTab: '.cd-tabs',
      navbar_ul:'.ct-layout-navbar_ul .active',
      data: [],
      output:''
    };
    this.$el = $(this.options.el);
    Object.assign(this.options, props);
    this.init();
  }

  init() {
    this.setHeight();
    this.addArrowIcon();
    // this.initActive();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.cd-group-item_link', event => this.clickEvent(event));
    $(this.options.ctTab).on('click', event => this.ctTab(event));
  }

  clickEvent(event) {
    let $that = $(event.currentTarget);
    let hide = $that.next('ul').is(":hidden");
    let $parentSiblings = $that.parent().siblings();
    if (hide) {
      $that.children('.cd-icon').css({ transform:'rotate(180deg)' });
    } else {
      $that.children('.cd-icon').css({ transform:'rotate(0deg)' });
    }
    $parentSiblings.find('ul').stop().slideUp();
    $parentSiblings.find('.cd-icon').css({ transform:'rotate(0deg)' });
    if (!$that.next('ul').length) {
      $('.cd-group-item_link').removeClass('active');
      $that.addClass('active');
    }
    $that.next('ul').stop().slideToggle();
  }

  setHeight() {
    $('html, body').css({ height:"100%" });
  }

  addArrowIcon() {
    this.buildTree();
    this.$el.find('a').each(item => {
      const $item = $(item);
      const left = $item.data('grade') * 16 + 40;
      $item.css({ paddingLeft:`${left}px` });
      if ($item.next('ul').length) {
        $item.append(`<span class="cd-icon cd-icon-arrow-down"></span>`);
      }
    });
  }

  initActive() {
    const $link= $('.cd-group-item_outer').eq(0).find('.cd-group-item_link');
    let href = $(this.options.navbar_ul).find('a').data('href');
    $link.each((index, item)=>{
      if ($(item).data('href') === href){
        $(item).addClass('active').parents('ul').show()
      }
    })
  }

  buildTree() {
    const data = this.options.data.data;
    const title = this.options.data.title;
    let html = '';
    const targetVal = this.options.data.linkType ? '_blank': '_self';
    for (let item of data) {
      this.options.output = ''
      html += `<li class="cd-group-item cd-group-item_outer"><a id=${item.id}  class='cd-group-item_link' target='${targetVal}' title=${item.name} data-grade=${item.grade} href=${item.link ? item.link : 'javascript:;'}  data-href=${item.link} ><span class='item-txt'>${item.name}</span></a>`;
      html +=  this.creatElement(item)
      html += `</li>`
    }
    $('.sidebar-title h5').html(title);
    this.$el.append(html);
  }

  creatElement(item) {
    if (item.nodes && item.nodes.length) {
      this.options.output += `<ul>`
      for (let list of item.nodes) {
        const targetVal = item.nodes.linkType ? '_blank': '_self';
        this.options.output += `<li class='cd-group-item'><a id=${list.id} class='cd-group-item_link' target='${targetVal}' title=${list.name}  data-grade=${list.grade} href=${list.link ? list.link : 'javascript:;'} data-href=${list.link}><span class='item-txt'>${list.name}</span></a>`;
        this.creatElement(list)
      }
      this.options.output += `</ul>`
    }
    return this.options.output;
  }

  ctTab(event) {
    if(event.target.nodeName.toLocaleLowerCase() === 'a' ){
      let $self = $(event.target).parent();
      $self.siblings().removeClass('active');
      $self.addClass('active')
    }
  }
}

export default Layout;
