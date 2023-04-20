# Vue 3 + TypeScript + Vite
Magma technical test

# Issues
* HelperTable component:
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
