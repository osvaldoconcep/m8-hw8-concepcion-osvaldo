// It is always helpful to use comments in your code!

/**
 * Display the submenus for a given menu
 * @param menu: id of sub menu to be displayed
 */
function displaySubMenu(menu) {
    const element = document.getElementById(menu);
    element.classList.add("show-menu");
}

/**
 * Hide the submenus for a given menu
 * @param menu: id of sub menu to be displayed
 */
function hideSubMenu(menu) {
    const element = document.getElementById(menu);
    element.classList.remove("show-menu");
}
