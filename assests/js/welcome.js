$(document).ready(function(){
    "use strict";
    var welcomeBoard = function() {
        this.data = {};
        this.data.editIcon = $(document).find('.edit-icon');
        this.data.itemDesc = $(document).find('.item-desc');
        this.data.saveDesc = $(document).find('.save-btn');
        this.data.commentModalClose = $(document).find('.comment-overlay-close');
        this.bind();
    };
    welcomeBoard.prototype.bind = function( ) {
        console.log('welcomeBoard.bind()');
        this.data.editIcon.on( 'click' , $.proxy( this.editText, this ) );
        this.data.saveDesc.on( 'click' , $.proxy( this.updateCard, this ) );
        this.data.itemDesc.on( 'click' , $.proxy( this.addComment, this ) );
        this.data.commentModalClose.on( 'click' , $.proxy( this.closeCommentModal, this ) );
        $(document).on( 'click' , $.proxy( this.hideEditContainer, this ) );
    };
    welcomeBoard.prototype.hideEditContainer = function(e) {
        if ( !$( e.target ).hasClass( 'edit-desc' ) && !$( e.target ).hasClass( 'edit-icon' ) ) {
                $('.edit-container').css('display','none');
                $('.overlay-container').css('display','none');
            }
    };
    welcomeBoard.prototype.addComment = function(e) {
        if ( ! $(e.target).hasClass('edit-icon') ) {

            var target = $(e.currentTarget),
                parent = $(target).parents('.editable-items'),
                boardtype = $(parent).prevAll('.section-label').text(),
                editDesc = $(target).text();
            $('.edit-container').css('display','none');
            $('.overlay-container').css('display','none');
            $('.add-comment-overlay').css('display', 'block');
            $('.comment-label').text(editDesc);
            $('.board-type').text(boardtype);
        }
    };
    welcomeBoard.prototype.updateCard = function(e) {
        var target = $(e.currentTarget),
            updateText = $(target).prev().val();
        $(target).parents('.editable-items').find('.item-desc').text( updateText );
    };
    welcomeBoard.prototype.closeCommentModal = function() {
        $('.add-comment-overlay').css('display', 'none');
    };
    welcomeBoard.prototype.editText = function(e) {
        var target = $(e.currentTarget),
            targetParent = $(target).parents('.editable-items');
        $(targetParent).find('.edit-container').css('display','block');
        $('.overlay-container').css('display','block');
    };
    var welcomeBoards=new welcomeBoard();
});