import { Component } from '@angular/core';

@Component({
  selector: 'app-user-search',
  standalone: true,
  template: `
    <fieldset>
      <legend>Users Search</legend>
      <input type="search" placeholder="Search...">
    </fieldset>
    <section class="actions">
      <button>Reload</button>
      <button>Add User</button>
      <button>Clear</button>
    </section>
    <ul>
      <li class="no-data">Nothing to show</li>
    </ul>
  `
})
export class UserSearchComponent {
  constructor() {}
  addUser() {
    const user = { id: 123, name: "Dmytro Mezhenskyi" };
    // add user logic
  }
}
