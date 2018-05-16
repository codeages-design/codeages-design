import Component from '../../js/component';

class Layout extends Component {
  constructor(props) {
    super();

    this.options = {
      el:'.cd-sidebar-container',
      data: [],
      output:''
    };

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.setHeight();
    this.addArrowIcon();
    this.events();
  }
  events() {
    $(this.options.el).on('click',(event)=>{this.clickEvent(event)})
  }
  setHeight() {
    $('html').css({height:"100%",overflowX: "hidden"})
    $('body').css({height:"100%",overflowX: "hidden",margin:0})
  }
  addArrowIcon(){
      this.buildTree()
      $(this.options.el).find('p').each((index,item)=>{
        if($(item).next('ul').length){
           $(item).append(`<span class="cd-icon cd-icon-arrow-down"></span>`);
        }
      })
  }
  buildTree(){
    let data = this.options.data;
    let html = '';
    for(let item of data){
        this.options.output = ''
        html += `<li class="cd-group-item"><p>${item.name}</p>`;
        html +=  this.creatElement(item)
        html += `</li>`
    }
    $(this.options.el).append(html)
  }
  creatElement(item){
    if(item.nodes && item.nodes.length){
        this.options.output += `<ul>`  
        for(let list of item.nodes){
            this.options.output += `<li><p>${list.name}</p>`;
            this.creatElement(list)
        }  
        this.options.output += `</ul>`
      }
     return this.options.output
  }
  clickEvent(event) {
    if(event.target.nodeName.toLocaleLowerCase() === 'p' ){
        let hide = $(event.target).next('ul').is(":hidden");
        let $parentSiblings = $(event.target).parent().siblings();
        if(hide){
            $(event.target).children('.cd-icon').css({transform:'rotate(180deg)'});
        }else {
            $(event.target).children('.cd-icon').css({transform:'rotate(0deg)'});
        }
        $parentSiblings.find('ul').stop().slideUp();
        $parentSiblings.find('.cd-icon').css({transform:'rotate(0deg)'});
        //  列表选中高亮
        //  $parentSiblings.find('p').removeClass('theme');
        //  $(event.target).removeClass('theme').addClass('theme');
        $(event.target).next('ul').stop().slideToggle();
    } 
  }
}

export default Layout;
