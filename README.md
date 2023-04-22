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
  * Inner shadow
    * `thead`: missing
    * `pagination's tr`: trailing
  * Hover cells
    * `hover:bg` override table's inner shadow
* InputSelect:
  * `z-index`/`overflow`: the options panel is showing up into the parent's component: 
    * table's overflow-y is showing
    * options panel is hidden

# TODO
* TableWrapper
  * remove `TABLE_LIMIT` and calculate 
* HelperTable:
  * apply `box-shadow` in `HelperTable` rather than `TableWrapper`:
    * solve `Inner shadow` ans `Hover cells` issues
    * will facilitate the resolution of `InputSelect` issue
* Pagination:
  * put out `Pagination` and `InputSelect`components center on last table row
