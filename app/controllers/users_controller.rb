class UsersController < ApplicationController
  before_action :authorized, only: [:show]

  rescue_from ActiveRecord::RecordNotFound, with:, :render_not_found_response 
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

  def new 
    @user = User.new 
  end 

  def create 
    @user = User.create(user_params)
    if @user.valid?
       @user.save 
    end 
  end 

  def show 
    @user = User.find(params[:id])
    @followers = Followers.all 
  end 

  private

  def user_params 
    params.require(:user).permit(:user, :password, :password_confirmation)
  end 
    
  def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end 
  
  def render_not_found_response 
      render json: { error: "User not found"}, status: :not_found 
  end 
  


end
