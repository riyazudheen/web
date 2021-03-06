import Vue from 'vue';
import Home from '@/views/Home';

describe('Home.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Home);
        const vm = new Constructor().$mount();
        console.log(vm);
        expect(vm.$el.querySelector('.title').textContent)
            .to.equal('My Files');
    });
});
