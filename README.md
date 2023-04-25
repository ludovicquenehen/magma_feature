# Vue 3 + TypeScript + Vite
Magma technical test

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:5173 by default
$ yarn dev

# build for production and preview
$ yarn build
$ yarn preview
```
# Issues
* HelperTable:
  * columns' width not fixed: toggling
* InputSelect:
  * `z-index`/`overflow`: the options panel is showing up into the parent's component: 
    * table's overflow-y is showing
    * options panel is hidden

# TODO
* TableWrapper
  * remove `TABLE_LIMIT` and calculate 
* Pagination:
  * put out `Pagination` and `InputSelect`components center on last table row
