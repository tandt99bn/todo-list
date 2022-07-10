<template>
  <div class="search-task">
    <div class="icon-search"><img src="~@/assets/search.svg" /></div>
    <div class="input-search">
      <input
        class="search-text"
        v-model="data.searchText"
        placeholder="Tìm kiếm"
        type="text"
        @keyup.enter="onChange"
      />
    </div>
  </div>
</template>
<style scoped>
.search-task {
  height: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 60px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgb(0 0 0 / 5%);
  background: #f2f2f2;
  padding: 5px;
  margin-bottom: 15px;
}
.icon-search {
  cursor: pointer;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-search {
  width: 100%;
}
.input-search input {
  width: 100%;
  height: 100%;
  padding: 0 35px 0 5px;
  border: none;
  outline: none;
  background: #f2f2f2;
}
.search-text {
  font: normal 36px 'Open Sans', cursive;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
}
</style>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
class SearchComponentData {
  searchText: string;
}

class SearchComponentProps {
  searchText: string;
}

export default defineComponent({
  name: 'SearchComponent',
  components: {},
  props: {
    searchText: {
      type: String,
      default: null,
    },
  },
  emits: ['onChange'],
  setup(props: SearchComponentProps, { emit }) {
    const data = reactive<SearchComponentData>({
      searchText: props.searchText,
    });
    const onChange = () => {
      emit('onChange', data.searchText);
    };
    return {
      data,
      onChange,
    };
  },
});
</script>
