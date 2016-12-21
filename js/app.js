//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

/* Create a select and append to #menu - Создать выбор и добавить в меню */
var $select = $("<select></select>");
$("#menu").append($select);

/* Cycle over (through) the menu links - that's a traversal operation - so we look in API Traversing */
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  /* Deal with selected options depending on current page - Home,About,Contact,etc.- so we need to check if "$anchor" parent is selected. "li" is "$anchor" parent */
  if($anchor.parent().hasClass("selected")) {  /* no dot for class here*/ 
    $option.prop("selected", true);  /* here "selected" is a property, not a class like above*/
  }
  //Option's value is the href of the link
  $option.val($anchor.attr("href"));
  //Option's text is the text of link
  $option.text($anchor.text());
  //append - attach option to select
  $select.append($option);
});

//Bind связать change listener to the select in dropdown menu
$select.change(function(){
  //Go to select's location
  window.location = $select.val();  /* here we're getting value of the selected option in the select box*/
});

//Modify CSS to hide links on small width and show button and select
  //Modify CSS so it also hides select and button on larger width and shows links