class Table {
  constructor(props) {
    this.options = {
      filterEl: '[data-toggle="cd-table-filter"]',
      sortEl: '[data-toggle="cd-table-sort"]',
      parent: document,
      target: null,
      url: null,
      data: {},
      isLoading: false,
    };

    Object.assign(this.options, props);
    
    this.init();
  }

  init() {
    this.getData();
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.table.filter', this.filterEl, (event) => this.filterEvent(event));
    $(this.options.parent).on('click.cd.table.sort', this.sortEl, (event) => this.sortEvent(event));
  }

  loading() {
    if (this.options.isLoading) {
      $(this.options.target).html(cd.loading());
    }
  }

  getData() {
    this.loading();

    $.get({
      url: this.options.url,
      data: this.options.data,
    }).done((res) => {
      console.log(res);
      $(this.options.target).html(res);
      
      if (typeof this.options.cuccess === 'function') {
        this.options.cuccess(res);
      }
      
    }).fail((res) => {
      console.log('fail', res);
      if (typeof this.options.error === 'function') {
        this.options.error(res);
      }
    });
  }

  filterEvent(event) {
    let $this = $(event.currentTarget);

    if ($this.closest('li').hasClass('active')) {
      return;
    }
  
    let filterKey = $this.data('filter-key');
    let filterValue = $this.data('filter-value');

    this.options.data.filter = {};
    this.options.data.filter.name = filterKey;
    this.options.data.filter.value = filterValue;

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

    this.options.data.sort = {};
    this.options.data.sort.name = sortKey;
    this.options.data.sort.value = sortValue;
    
    this.getData();
  }
}

function table(props) {
  return new Table(props);
}

export default table;