let loading = ({ isFixed } = { isFixed: false }) => {
  return `<div class="cd-loading ${isFixed ? 'cd-loading-fixed' : ''}">
            <div class="loading-content">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>`;
}

export default loading;