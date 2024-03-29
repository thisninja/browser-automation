import { env } from '../../config/settings';

class Routes {
  constructor (options) {
    const defaults = {
      baseUrl: env.baseUrl,
    };

    const settings = Object.assign(defaults, options);

    this.baseUrl = settings.baseUrl;
  }

  homeUrl () {
    return this.baseUrl;
  }
}

module.exports = Routes;
