class CommentsController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocesssable_entity_response
  before_action :authenticate_request

  def index
    comments = Comment.all
    render json: comments
  end
  
  def create 
      comment = @current_user.comments.create!(comment_params)
      render json: comment, serializer: CommentSerializer, status: :created 
  end 
  
  
   def destroy 
      comment = find_comment 
      comment.destroy(user_id: session[:user_id]) # is this right? 
      head :no_content 
  end 
  
  
  private 
  
  def find_comment 
      Comment.find(params[:id]) 
  end 
  
  def authorize 
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id 

  def comment_params 
      params.permit(:text, :post_id, :user_id) 
  end 
  
  def render_not_found_response
      render json: { error: "Comment not found" }, status: :not_found 
  end 
  
  def render_unprocessable_entity_response(exception) 
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
  end 

end