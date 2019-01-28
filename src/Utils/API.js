import Prismic from 'prismic-javascript';
import Logger from './logger';

const API_ENDPOINT = 'https://filiph-twitch.cdn.prismic.io/api/v2';

class API {
    constructor () {
        this.Prismic = Prismic.getApi(API_ENDPOINT);
    }

    linkResolver(doc) {
        switch(doc.type) {
            case 'page':
                return '/' + doc.uid;
                break;
            case 'post':
                return '/blog/' + doc.uid;
                break;
            default:
                return '/' + doc.id;
        }
    }
}

export default (new API());