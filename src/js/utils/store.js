import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const test = {
  name: 'TEST',
  fileName: 'test.jpg',
  link: 'https://picsum.photos/id/65/200/200',
  extension: 'jpg'
}


export const store = new Vuex.Store({
  state: {
    items: [test, test, test, test, test, test]
  },
  getters: {
    items: (state) => state.items,
  },
  mutations: {
    // SET_SUBJECTS_LIST(state, subjects) {
    //   state.subjects = _.mapKeys(subjects, 'id');
    //   state.areSubjectsLoaded = true;
    // },
  },
  actions: {
    // FETCH_SUBJECT_DETAIL: promiseDebounce(async ({commit, getters}, id) => {
    //   try {
    //     const {data} = await Action('api.subjects.detail')({params: {id: id}});
    //     commit('PATCH_SUBJECTS_LIST', [data]);
    //     return data;
    //   } catch (e) {
    //     showException(i18n.t('noty.error.requestFailed'))(e);
    //   }
    // }),
  }
})