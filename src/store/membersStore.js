import { writable } from 'svelte/store';

class MembersStore {
  members = writable([]);
  member = writable({
    name: '',
    age: ''
  });

  membersCreate = (member) => {
    this.members.update(members => {
      members.push(member);
      console.log('Done membersCreate', members);
      return members;
    })
  };
}

export default new MembersStore();
