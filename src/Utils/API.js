import Prismic from 'prismic-javascript';

const API_ENDPOINT = 'https://filiph-twitch.cdn.prismic.io/api/v2';

class API {
    constructor () {
        this.Prismic = Prismic.getApi(API_ENDPOINT);
    }

    linkResolver(doc) {
        switch(doc.type) {
            case 'page':
                return '/' + doc.uid;
            case 'post':
                return '/blog/' + doc.uid;
            default:
                return '/' + doc.id;
        }
    }
}

export default (new API());