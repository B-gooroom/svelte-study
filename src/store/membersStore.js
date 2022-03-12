import { writable } from 'svelte/store';

class MembersStore {
  members = writable([]);
  member = writable({
    name: '',
    age: ''
  });
}

export default new MembersStore();
