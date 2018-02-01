import Component from '../../js/component';

class Table extends Component {
  constructor(props) {
    super();

    this.options = {
      filterEl: '[data-toggle="cd-table-filter"]',
      sortEl: '[data-toggle="cd-table-sort"]',
      parent: document,
      el: null,
      data: {},
      isLoading: false,
      isInit: false
    };

    Object.assign(this.options, props);
    
    this.init();
  }

  init() {
    if (this.options.isInit) {
      this.getData();
    }
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.table.filter', this.options.filterEl, (event) => this.filterEvent(event));
    $(this.options.parent).on('click.cd.table.sort', this.options.sortEl, (event) => this.sortEvent(event));
  }

  loading() {
    if (this.options.isLoading) {
      $(this.options.el).html(cd.loading());
    }
  }

  getData() {
    this.loading();

    this.emit('getData', this.options.data);
  }

  filterEvent(event) {
    let $this = $(event.currentTarget);

    if ($this.closest('li').hasClass('active')) {
      return;
    }
  
    let filterKey = $this.data('filter-key');
    let filterValue = $this.data('filter-value');

    this.options.data[filterKey] = filterValue;

    this.getData();
  }

  sortEvent(event) {
    let $this = $(event.currentTarget);

    let sortKey = $this.data('sort-key');
    let sortValue = 'desc';

    let $sortIcon = $this.find('.active');
    if ($sortIcon.length) {
      sortValue = $sortIcon.siblings().data('sort-value');
    }

    this.options.data[sortKey] = sortValue;
    
    this.getData();
  }
}

export default Table;
