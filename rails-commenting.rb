# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) we are setting our blogpostcontroller to extend applicationcontroller
class BlogPostsController < ApplicationController
  def index
    # ---2) .all is returning all instances of BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3).find is looking specificly for a params id
    @post = BlogPost.find(params[:id])
  end

  # ---4) .new is creating a new post to input into the db
  def new
    @post = Post.new
  end

  def create
    # ---5) we are creating a post and checking if the post is valid, if it is, it will redirect to a certain path, if not it will redirect to a new posting path
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)we are editing a specific post in our db by searching for a id. when its updated it will either post or get redirected to a new posting path.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) we are chking if the update is valid. if it is it will post if not you will get redirected to edit the path.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) the redirect_to blog_post_path(@post) will take you back to the post if you choose not to delete it
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) everything below this line will be hidden 
  private
  def blog_post_params
    # ---10) this is setting the paramaters for a post to contain a title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
