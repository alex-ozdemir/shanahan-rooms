function fillRoom(room, color) {
    fn_name = "fill" + room;
    fn = window[fn_name];
    if (typeof fn == 'function')
        fn(color);
    else
        console.log("The room: " + room + " does not a function: " + fn_name);
}