export class log {
    static primary(msg: string) {
       console.log(`%c ${msg}`,'color: #0d6efd');
    }

    static secondary(msg: string) {
      console.log(`%c ${msg}`,'color: #808080');
    }

    static success(msg: string) {
      console.log(`%c ${msg}`,'color: #198754');
    }

    static danger(msg: string) {
      console.log(`%c ${msg}`,'color: #dc3545');
    }

    static warning(msg: string) {
      console.log(`%c ${msg}`,'color: #000000; background:#ffc107');
    }

    static info(msg: string) {
      console.log(`%c ${msg}`,'color: #0dcaf0');
    }
}