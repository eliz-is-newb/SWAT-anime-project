class ApplicationController < ActionController::Base
    include ActionController::Cookies 
    before_action :authorize
    helper_method :logged_in?, :current_user 

    def current_user 
        if session[:user_id]
            @user = User.find(session[:user_id])
        end
    end 

    def logged_in?
        !!current_user
    end 

    def authorized
        redirect_to login_path unless logged_in?
    end

    def authorize 
        @current_user = User.find_by(id: session[:user_id])

        render json: { errors: ["Not authorized"] }, 
            status: :unauthorized unless @current_user 
    end 
  
end
