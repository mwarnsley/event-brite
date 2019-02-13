class Api {
    constructor() {
        this.orderBy = 'date';
        this.token_auth = process.env.REACT_APP_OAUTH_TOKEN;
    }
    async getCategories() {
        const categoriesResponse = await fetch(
            `https://www.eventbriteapi.com/v3/categories/?token=${
                this.token_auth
            }`
        );
        const categories = await categoriesResponse.json();

        return categories;
    }
    async searchEvents(category, eventName) {
        const eventsResponse = await fetch(
            `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${
                this.orderBy
            }&categories=${category}&token=${this.token_auth}`
        );
        const events = await eventsResponse.json();

        return events;
    }
}

export default Api;
