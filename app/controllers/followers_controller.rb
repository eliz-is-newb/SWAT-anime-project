class FollowersController < ApplicationController
  before_action: authenticate_request
  before_action: :set_follower, only:[ show edit update destroy ]
  


  # ʚ♥ɞ GET /followers 
  def index
    @followers = Follower.all
  end

  # ʚ♥ɞ GET /followers/1 
  def show_follower
    @followers = Follower.find(params[:follower][:follower_id])
  end

  def show_followee 
    @followers = Follower.find(params[:follower][:followee_id])
  end

  # ʚ♥ɞ GET /followers/new
  def new
    @follower = Follower.new
  end

  # ʚ♥ɞ POST /follower ("i want to follow")
  def create
    Follower.create(follower_id: user_id, followee_id: params[:followee_id]) 
    render json: follow
  end


  # ʚ♥ɞ DELETE /followers/1
  def destroy
    @follower.destroy

    respond_to do |format|
      format.html { redirect_to followers_url, notice: "Follower was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_follower
      @follower = Follower.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def follower_params
      params.require(:follower).permit(:follower_id, :followee_id)
    end

    def render_not_found_response 
      render json: { error: "Follower/Followee not found" }, status: :not_found 
  end 
  
  def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
  end 

end
