import * as types from './mutation-types'

export default {
    [types.UPDATE_COMPANY](state, newName) {
        state.company = newName
    },

    [types.ADD_TAB](state, params) {
        var existed = false;
        state.tabs.every(item => {
            console.log(item)
            if (item.name === params.name) {
                existed = true
                return false
            }
        });

        if (!existed) {
            state.tabs.push(params);
            state.currentTab = params.name;
        }

    },

    [ types.DEL_TAB ](state, targetName) {
        let tabs = state.tabs;
        let activeName = state.currentTab;
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                }
            });
        }

        state.currentTab = activeName;
        state.tabs = tabs.filter(tab => tab.name !== targetName);
    }
}