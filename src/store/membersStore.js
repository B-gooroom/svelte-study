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

  membersRead = () => {
    this.members.update(() => {
      const members = [{
        name: '홍길동',
        age: 20
      }, {
        name: '춘향이',
        age: 16
      }];
      console.log('Done membersRead', members);
      return members;
    })
  };
}

export default new MembersStore();
