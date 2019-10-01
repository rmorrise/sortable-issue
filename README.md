# Sortable Issue

## Steps to reproduce:

1) Toggle "Reorder Items" to ON
2) Drag and drop to reorder with "Foo" as the second item

## Expected results:

* Items should appear reversed when dragging "Foo" below "Bar"
* After dropping, form control values should be "Bar", then "Foo"

## Actual results:

* Items appear as "Foo", "Foo" while dragging
* After dropping, the form control values are not altered
