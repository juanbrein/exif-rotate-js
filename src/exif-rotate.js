import { default_container_id } from './configs';
import { init } from './make-canvas';

export default class ExifRotate {
  /**
  *  @param img {elem}
  *  @param options {object}
  */
  static showPreviewImage(files, options = {}) {
    init(files, options)
    .then((canvas) => {
      const base_64 = canvas.toDataURL('image/jpeg');
      const new_img = new Image();
      new_img.setAttribute('src', base_64);
      const id = options.container_id ? options.container_id : default_container_id;
      const container = document.getElementById(id);
      container.appendChild(new_img);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  /**
  *  @param img {elem}
  *  @param options {object}
  *  @return base 64 data url {string}
  */
  static getBase64String(files, options = {}, callback) {
    init(files, options)
    .then((canvas) => {
      callback(canvas.toDataURL('image/jpeg'));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
