import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _successMessage = 'Recipe was successfully uploaded! (:';

  _windowElement = document.querySelector('.add-recipe-window');
  _overlayElement = document.querySelector('.overlay');

  _btnOpenElement = document.querySelector('.nav__btn--add-recipe');
  _btnCloseElement = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlayElement.classList.toggle('hidden');
    this._windowElement.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    // prettier-ignore
    this._btnOpenElement.addEventListener('click',this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    // prettier-ignore
    this._btnCloseElement.addEventListener('click', this.toggleWindow.bind(this));
    // prettier-ignore
    this._overlayElement.addEventListener('click',this.toggleWindow.bind(this)
    );
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];

      // This takes an array of entries and converts it into an object.
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
