Run prettier with this command:
npx prettier . --write

eslint only exists to give Prettier more power.

.:-Naming convention branches-:.
kebab case (name-och-another-name)

feature/[ticketnr]-ticket-name
bugfix/[tickenr]-ticket-name

Ticket nummer hittas i botten av ticket (#p-x) i Trello, ta inte med # i branch name

.:-Naming convention files, docs, components-:.
Components (PascalCase)

ComponentName
  index.jsx ( const ComponentName )
  componentName.module.css

The only global file one should edit is to add components/pages to page.js, none else. This will cause a lot of unnecessary conflicts.
