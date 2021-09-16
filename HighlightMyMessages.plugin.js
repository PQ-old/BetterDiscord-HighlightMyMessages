/**
 * @name HighlightMyMessages
 * @version 1.0
 * @description Highlights your own messages, so that you can better distinguish them from everything else.
 * @author xFoondom
 *  
 */



 module.exports = class Superhighlight {
     
    load() {
    }

    start() {
    }

    stop() {

    }

    observer(e) {
        var ownAvatarContainer = document.getElementsByClassName('avatar-SmRMf2 wrapper-3t9DeA');
        var ownAvatar = ownAvatarContainer[0].getElementsByClassName('avatar-VxgULZ')[0].src;
        
        var msgs = document.getElementsByClassName("message-2qnXI6");
        var highlightLast = false;
        for(var i = 0; i < msgs.length; i++){
            var authorAvatar = msgs[i].getElementsByClassName('avatar-1BDn8e');
            var systemMessage = msgs[i].getElementsByClassName('iconContainer-3GkGRf');
            if(authorAvatar[0] != null && authorAvatar[0].src == ownAvatar) {
                msgs[i].setAttribute("style", "background-color: #5865F211; border-top: solid 3px #5865F255");
                highlightLast = true;
            } else if(authorAvatar[0] != null && authorAvatar[0].src != ownAvatar) {
                highlightLast = false;
            } else if(systemMessage.length > 0) {
                highlightLast = false
            } else {
                if(highlightLast) msgs[i].setAttribute("style", "background-color: #5865F211");
            }
        }
    }
}