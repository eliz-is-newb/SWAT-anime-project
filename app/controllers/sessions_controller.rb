class SessionsController < ApplicationController
    
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
    end
    
    def destroy
        session[:user_id] = nil 
    end 
end
