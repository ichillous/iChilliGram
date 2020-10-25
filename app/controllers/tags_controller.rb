class TagsController < ApplicationController
    # 1 tag <-- belongs to --> 1 post
    #GET /tags
    def index
        @tags = Tag.all
        render json: @tags
    end
end
