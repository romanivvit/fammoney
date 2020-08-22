class Service {
    get generalHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'X-Token': this.jwtToken,
            },
        };
    }

    // eslint-disable-next-line class-methods-use-this
    get jwtToken() {
        return 'uahhhAIaFd08ZaAhCP_qgnuDGepQh3E1-WBQ94_P2R9s';
    }
}

export default Service;
