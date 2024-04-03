function fun() {

    karate.configure('connectTimeout', 10000);
    karate.configure('readTimeout', 10000);
    karate.configure('ssl', true);

    return {
        api:{
            beginUrl: 'https://restful-booker.herokuapp.com'
        },

    }
}