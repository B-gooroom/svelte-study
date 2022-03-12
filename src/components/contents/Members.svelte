<script>
  import membersStore from "../../store/membersStore";
  const { members, member } = membersStore;
  membersStore.membersRead();
  console.log($members, $member);
</script>

<div>
  <h3>Members</h3>
  <hr class="d-block" />
  <div>
    <h4>Read</h4>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {#each $members as member, index}
          <tr>
            <td
              ><input
                type="text"
                placeholder="Name"
                bind:value={member.name}
              /></td
            >
            <td
              ><input
                type="text"
                placeholder="Age"
                bind:value={member.age}
              /></td
            >
            <td>
              <button on:click={() => membersStore.membersUpdate(index, member)}
                >Update</button
              >
              <button on:click={() => membersStore.membersDelete(index)}
                >Delete</button
              >
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <hr class="d-block" />
  <div>
    <h4>Create</h4>
    <input type="text" placeholder="Name" bind:value={$member.name} />
    <input type="text" placeholder="Age" bind:value={$member.age} />
    <button on:click={() => membersStore.membersCreate($member)}>Create</button>
  </div>
</div>
