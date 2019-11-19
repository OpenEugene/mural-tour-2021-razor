// this class represents the functionality of the map page. This class file
// assumes that there will be a listbox of coordinates and (perhaps) a button
// that will get the coordinates from the source API. I imagine this will be
// located below the mapbox, and that we'll be able to click on a list item
// to focus that mural point on the map.
class IndexPage {
    // this is the default constructor (in case we need one).
    constructor() {

    }

    // this will be a fetch protocol that points to the api and returns a json
    // list of mural sites. this will be displayed in a listbox on the page. 
    get_coord_list() {

    }

    // this will display the list of coordinates (returned by get_coord_list)
    // in the listbox of mural sites.
    display_coords() {

    }

    // this will create the coordinate points on the map.
    create_coord_points() {

    }

    // this will focus a mural location that corresponds to a list item.
    focus_map_point() {

    }

    // this will bind the functions in this class to the proper elements on the
    // page. We could, instead, have an onload event that gets the list.
    create_event_handlers() {

    }

    // this will bind the functions to each list item that focus the mural
    // locations on the map.
    create_list_item_event() {

    }
}

let index_page;
/*
window.onload => {
    index_page = new IndexPage();
    index_page.create_event_handlers();
}
*/