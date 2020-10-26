class CommentsController < ApplicationController
    belongs_to: :posts, optional: true
    def index
        @post = Post.find(params[:post_id])
        render json: @post.comments
    end

    def create
        @comment = Comment.new(comment_params) 
        @post = Post.find(params[:post_id])
        @comment.save 
        @post.comments << @comment
        render json: @post 
    end
    #DELETE /comments/:id
    def destroy
        @comment.destroy
    end

    private
    def comment_params 
        params.require(:comment).permit(:username, :content)
    end
end
