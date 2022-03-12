import { writable } from 'svelte/store';

class MembersStore {
  members = writable([]);
  member = writable({
    name: '',
    age:  ''
  });

  membersCreate = (member) => {
    this.members.update(members => {
      members.push(member);
      member.age = Number(member.age);
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

  membersDelete = (index) => {
    this.members.update(members => {
      members.splice(index, 1);
      console.log('Done membersDelete', members);
      return members;
    })
  };

  membersUpdate = (index, member) => {
    this.members.update(members => {
      members[index] = member;
      member.age = Number(member.age);
      console.log('Done membersUpdate', members);
      return members;
    })
  };
}

export default new MembersStore();
