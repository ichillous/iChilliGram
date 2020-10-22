class TagsController < ApplicationController
    def new
        @tag = Tag.new
    end
    # 1 tag <-- belongs to --> 1 post
    
    def show
        @tag = Tag.find(params[:name])
        render json: @tags
    end

    #GET /tags
    def index
        @tags = Tag.all
        render json: @tags
    end
    
    def create
        tag = Tag.new(params[:tag].permit(:name, :category))

        @tag.save
        redirect_to @tag
    end
end
