class UsersController < ApplicationController
    skip_before_action :authenticate_request, only: [:create, :index]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    

    def index   
        @users = User.all
        render json: @users 
    end 

    def create
        user = User.create!(user_params)
        if user.valid?
             render json: user, status: :created
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
end 

        
    def show
        render json: @current_user
    end

    def user_comments 
        user = find_user 
        render json: user.comments
    end 
        
        
        private 
     
        def find_user
            User.find(params[:id]) 
        end 
        
        
        def user_params
            # PW and PW Confirmation automatically converted to password_digest on backend through bcrypt/has_secure_password
            params.permit( :username, :email, :password, :password_confirmation, :image_url, :bio)
        end
        
        def render_unprocessable_entity_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
        end 
        
        def render_not_found_response 
            render json: { error: "User not found"}, status: :not_found 
        end    


end
